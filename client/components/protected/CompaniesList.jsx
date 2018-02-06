import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import SearchInput, {createFilter} from 'react-search-input'
import RegisterCompany from './RegisterCompany'
import EditCompany from './EditCompany'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ReactDom from 'react-dom';
import Popup from 'react-popup';

export default class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalData: [],
      searchTerm: '',
      companyTitle: '',
      companyPhone: '',
      companyAddress: '',
      assignedTo: '',
      companyNotes: '',
      companyTaxId: '',
      companyShortName: '',
      companyBudgetDate: '',
      companyWebsite: '',
      companyCity: '',
      companyType: '',
      companyPartner: '',
      myDisabled: true,
      viewMode: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  

handleEdit(theId,companyTitle){
    Popup.create({
    title: 'Edit Company',
    content: <EditCompany theId={theId} companyTitle={companyTitle} />,
    className: 'alert',
    
    });
    this.setState({
        theId: theId
      });
    
 
  }
  
  handleNewPartner(){
    Popup.create({
    title: 'Create new Company Type',
    content: <RegisterCompanyTypes />,
    className: 'alert',
    
});

  }
  componentDidMount() {
    const theRef = ref.child(`companies`)
    
    theRef.on('value', (snapshot) => {
      let generalData = snapshot.val();
      let newState = [];
      for (let entity in generalData) {
        newState.push({
          id: entity,
          typeTitle: generalData[entity].typeTitle,
          companyTitle: generalData[entity].companyTitle,
          companyPhone: generalData[entity].companyPhone,
          companyAddress: generalData[entity].companyAddress,
          assignedTo: generalData[entity].assignedTo,
          companyNotes: generalData[entity].companyNotes,
          companyTaxId: generalData[entity].companyTaxId,
          companyShortName: generalData[entity].companyShortName,
          companyBudgetDate: generalData[entity].companyBudgetDate,
          companyWebsite: generalData[entity].companyWebsite,
          companyCity: generalData[entity].companyCity,
          companyType: generalData[entity].companyType,
          companyPartner: generalData[entity].companyPartner
        });
      }
      this.setState({
        generalData: newState,
        searchTerm: ''
      });
    });
    
  }
  removeItem(theId) {
    if(confirm("Do you really want to do this?")) {const removeRef = ref.child(`/companies/${theId}`); removeRef.remove()} 

    
  }

  render() {

    const allData = this.state.generalData;

    let KEYS_TO_FILTERS = ['companyTitle']
    let filteredEmails = allData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <div id="popupContainer"><Popup /></div>
        <div className="col-xs-12 noPadding">
          <h3 className="row header smaller lighter blue">
            <span className="col-sm-4"><i className="fa fa-check-square-o bigger-160"></i>&nbsp; Companies&nbsp;&nbsp;<Link to="./register-company" ><i className="fa  fa-user-plus green" aria-hidden="true"></i></Link></span> 

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
                  <th>Company</th>
                  <th>Assigned To</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Company Type</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Company</th>
                  <th>Assigned To</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Company Type</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  
              </tr>
          </tfoot>
          <tbody>
            {filteredEmails.map(entity => {
              let theId = entity.id;
              let companyTitle = entity.companyTitle;
              let companyPhone = entity.companyPhone;
              let companyAddress = entity.companyAddress;
              let assignedTo = entity.assignedTo;
              let companyNotes = entity.companyNotes;
              let companyTaxId = entity.companyTaxId;
              let companyShortName = entity.companyShortName;
              let companyBudgetDate = entity.companyBudgetDate;
              let companyWebsite = entity.companyWebsite;
              let companyCity = entity.companyCity;
              let companyType = entity.companyType;
              let companyPartner = entity.companyPartner;
              return (
                <tr key={theId}>
                  <td><input className="form-control" disabled="disabled" name="companyTitle" onChange={this.handleChange} defaultValue={entity.companyTitle} /></td>
                  <td><input className="form-control" disabled="disabled" name="assignedTo" onChange={this.handleChange} defaultValue={entity.assignedTo} /></td>
                  <td><input className="form-control" disabled="disabled" name="companyPhone" onChange={this.handleChange} defaultValue={entity.companyPhone} /></td>
                  
                  <td><input className="form-control" disabled="disabled" name="companyCitye" onChange={this.handleChange} defaultValue={entity.companyCity} /></td>
                  <td><input className="form-control" disabled="disabled" name="companyType" onChange={this.handleChange} defaultValue={entity.companyType} /></td>
                  
                  <td>
                  
                  <Link to={{pathname: './edit-company', state: { 
                      theId: theId, 
                      companyTitle: companyTitle,
                      companyPhone: companyPhone,
                      companyAddress: companyAddress,
                      assignedTo: assignedTo,
                      companyNotes: companyNotes,
                      companyTaxId: companyTaxId,
                      companyShortName: companyShortName,
                      companyBudgetDate: companyBudgetDate,
                      companyWebsite: companyWebsite,
                      companyCity: companyCity,
                      companyType: companyType,
                      companyPartner: companyPartner,
                      myDisabled: false,
                      viewMode: false

                    }}} ><i className="fa  fa-edit green fa-lg" aria-hidden="true"></i></Link>
                    </td>
                  
                  <td>
                  <Link to={{pathname: './edit-company', state: { 
                      theId: theId, 
                      companyTitle: companyTitle,
                      companyPhone: companyPhone,
                      companyAddress: companyAddress,
                      assignedTo: assignedTo,
                      companyNotes: companyNotes,
                      companyTaxId: companyTaxId,
                      companyShortName: companyShortName,
                      companyBudgetDate: companyBudgetDate,
                      companyWebsite: companyWebsite,
                      companyCity: companyCity,
                      companyType: companyType,
                      companyPartner: companyPartner,
                      myDisabled: true,
                      viewMode: true
                    }}} ><i className="fa  fa-eye green fa-fw" aria-hidden="true"></i></Link>
                    
                  </td>
                  <td>
                  <button className="cleanButton" onClick={() => this.removeItem(theId)}><i className="fa fa-trash-o red cleanButton" aria-hidden="true"></i></button>
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
