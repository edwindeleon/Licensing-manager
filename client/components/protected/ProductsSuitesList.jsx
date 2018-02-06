import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import SearchInput, {createFilter} from 'react-search-input'
import RegisterProductsSuites from './RegisterProductsSuites'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ReactDom from 'react-dom';
import Popup from 'react-popup';

export default class ProductsSuitesList extends Component {
	constructor() {
    super();
    this.state = {
      suiteTitle: '',
		suiteName: '',
		suiteDetails: '',
		suiteManufacturer: '',
		suiteStatus: '',
      generalData: [],
      searchTerm: '',
      myDisabled: true,
    myId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }
   handleDisabled(theId) {
    let myId = ''
    this.setState({
        myDisabled: !this.state.myDisabled,
        myId: theId
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  editItem(theId, theTitle, theName, theManufacturer, theStatus, theDetail) {
    const theRef = ref.child(`/productsSuites/${theId}`);

    let preTitle = this.state.suiteTitle;
    let suiteTitle = '';
    preTitle == '' ? suiteTitle = theTitle : suiteTitle = preTitle;
    
    let preName = this.state.suiteName;
    let suiteName = '';
    preName == '' ? suiteName = theName : suiteName = preName;

    let preDetails = this.state.suiteDetails;
    let suiteDetails = '';
    preDetails == '' ? suiteDetails = theDetail : suiteDetails = preDetails;

    let preManufacturer = this.state.suiteManufacturer;
    let suiteManufacturer = '';
    preManufacturer == '' ? suiteManufacturer = theManufacturer : suiteManufacturer = preManufacturer;

    let preStatus = this.state.suiteStatus;
    let suiteStatus = '';
    preStatus == '' ? suiteStatus = theStatus : suiteStatus = preStatus;
      
      const userLocal2 = {
        suiteTitle: suiteTitle,
	    suiteName: suiteName,
		suiteDetails: suiteDetails,
		suiteManufacturer: suiteManufacturer,
		suiteStatus: suiteStatus
        
      }
       theRef.set(userLocal2)
       .then(function() {
       alert("Data save sucessful");
      });
      this.setState({
      myDisabled: true,
      myId: ''
    });
  }

  
  handleNewPartner(){
    Popup.create({
    title: 'Create new Suite Product',
    content: <RegisterProductsSuites />,
    className: 'alert',
    
});
  }
  componentDidMount() {
  	const theRef = ref.child(`productsSuites`)
    
    theRef.on('value', (snapshot) => {
      let generalData = snapshot.val();
      let newState = [];
      for (let entity in generalData) {
        newState.push({
          id: entity,
          suiteTitle:  generalData[entity].suiteTitle,
	      suiteName: generalData[entity].suiteName,
		  suiteDetails: generalData[entity].suiteDetails,
		  suiteManufacturer: generalData[entity].suiteManufacturer,
		  suiteStatus: generalData[entity].suiteStatus
        });
      }
      this.setState({
        generalData: newState,
        searchTerm: ''
      });
    });
    
  }
  removeItem(theId) {
    if(confirm("Do you really want to do this?")) {const theRef = ref.child(`/productsSuites/${theId}`); theRef.remove()} 

    
  }

  render() {

    const allData = this.state.generalData;

    let KEYS_TO_FILTERS = ['suiteTitle', 'suiteName', 'suiteManufacturer']
    let filteredEmails = allData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <div id="popupContainer"><Popup /></div>
        <div className="col-xs-12 noPadding">
          <h3 className="row header smaller lighter blue">
            <span className="col-sm-4"><i className="fa fa-check-square-o bigger-160"></i>&nbsp; Products Suites&nbsp;&nbsp;<Link to="./register-products-suites" ><i className="fa  fa-user-plus green" aria-hidden="true"></i></Link></span> 

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
                  <th>Manufacturer</th>
                  <th>Suite</th>
                  <th>Suite Name</th>
                  <th>Suite Status</th>
                  <th>Suite Details</th>
                  <th></th>
                  
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Manufacturer</th>
                  <th>Suite</th>
                  <th>Suite Name</th>
                  <th>Suite Status</th>
                  <th>Suite Details</th>
                  <th></th>
                  
              </tr>
          </tfoot>
          <tbody>
            {filteredEmails.map(entity => {
              let theId = entity.id;
              let theTitle = entity.suiteTitle;
              let theName = entity.suiteName;
              let theManufacturer = entity.suiteManufacturer;
              let theStatus = entity.suiteStatus;
              let theDetail = entity.suiteDetails;
              return (
                <tr key={theId}>
                	<td>
                	<input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="suiteManufacturer" onChange={this.handleChange} defaultValue={entity.suiteManufacturer} />
	                	
                    </td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="suiteTitle" onChange={this.handleChange} defaultValue={entity.suiteTitle} /></td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="suiteName" onChange={this.handleChange} defaultValue={entity.suiteName} /></td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="suiteStatus" onChange={this.handleChange} defaultValue={entity.suiteStatus} /></td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="suiteDetails" onChange={this.handleChange} defaultValue={entity.suiteDetails} /></td>
                  
                  <td>
                    <button onClick={() => this.handleDisabled(theId)}><i className={this.state.myDisabled === false && this.state.myId == theId ? 'fa fa-lock' : 'fa fa-edit'} aria-hidden="true"></i></button>
                    <button onClick={() => this.editItem(theId, theTitle, theName, theManufacturer, theStatus, theDetail)}><i className="fa fa-floppy-o" aria-hidden="true"></i></button>
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
