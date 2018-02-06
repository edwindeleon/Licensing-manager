import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import SearchInput, {createFilter} from 'react-search-input'
import RegisterBusinessPartner from './RegisterBusinessPartner'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ReactDom from 'react-dom';
import Popup from 'react-popup';

export default class BusinessPartnersList extends Component {
	constructor() {
    super();
    this.state = {
      partnerTitle: '',
      generalData: [],
      searchTerm: '',
      myDisabled: true,
      myId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  editItem(theId, theTitle) {
    const theRef = ref.child(`/businessPartners/${theId}`);

    let preTitle = this.state.partnerTitle;
    let partnerTitle = '';
    preTitle == '' ? partnerTitle = theTitle : partnerTitle = preTitle;
    
      
      const userLocal2 = {
        partnerTitle: partnerTitle
        
      }
       theRef.set(userLocal2)
       .then(function() {
       alert("Partner data save sucessful");
      });
      this.setState({
      myDisabled: true,
      myId: ''
    });
  }

  
  handleNewPartner(){
    Popup.create({
    title: 'Create new Business Partner',
    content: <RegisterBusinessPartner />,
    className: 'alert',
    
});
  }
  componentDidMount() {
  	const theRef = ref.child(`businessPartners`)
    
    theRef.on('value', (snapshot) => {
      let generalData = snapshot.val();
      let newState = [];
      for (let entity in generalData) {
        newState.push({
          id: entity,
          partnerTitle: generalData[entity].partnerTitle
        });
      }
      this.setState({
        generalData: newState,
        searchTerm: ''
      });
    });
    
  }
  removeItem(theId) {
    if(confirm("Do you really want to do this?")) {const theRef = ref.child(`/businessPartners/${theId}`); theRef.remove()} 
    
  }
  handleDisabled(theId) {
    let myId = ''
    this.setState({
        myDisabled: !this.state.myDisabled,
        myId: theId
      });
  }

  render() {

    const allData = this.state.generalData;

    let KEYS_TO_FILTERS = ['partnerTitle']
    let filteredEmails = allData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <div id="popupContainer"><Popup /></div>
        <div className="col-xs-12 noPadding">
          <h3 className="row header smaller lighter blue">
            <span className="col-sm-4"><i className="fa fa-check-square-o bigger-160"></i>&nbsp; Business Partners&nbsp;&nbsp;<Link to="#" onClick={() => this.handleNewPartner()}><i className="fa  fa-user-plus green" aria-hidden="true"></i></Link></span> 

          </h3>
         
          <div className="widget-box col-xs-12 col-md-12">
            <div className="widget-header widget-header-blue">
              <h4 className="lighter">Search</h4>
            </div>
            <div className="widget-body">
              <div className="widget-main">
                <SearchInput className="search-input" onChange={this.searchUpdated} />
              </div>
            </div>
          </div>
        </div>
        <table id="usersTables" className="table table-striped table-bordered" cellSpacing="0" width="100%">
          <thead>
              <tr>
                  <th>Partner Title</th>
                  <th></th>
                  
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Partner Title</th>
                  <th></th>
                  
              </tr>
          </tfoot>
          <tbody>
            {filteredEmails.map(entity => {
              let theId = entity.id;
              let theTitle = entity.partnerTitle;
              return (
                <tr key={theId}>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="partnerTitle" onChange={this.handleChange} defaultValue={entity.partnerTitle} /></td>
                  
                  <td>
                    <button onClick={() => this.handleDisabled(theId)}><i className={this.state.myDisabled === false && this.state.myId == theId ? 'fa fa-lock' : 'fa fa-edit'} aria-hidden="true"></i></button>
                    <button onClick={() => this.editItem(theId, theTitle)}><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
                    <button onClick={() => this.removeItem(theId)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                  </td>
                  
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

}
