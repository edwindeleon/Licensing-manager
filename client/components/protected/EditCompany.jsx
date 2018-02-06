import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'



function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}
function setSuccessMsg(success) {
  return {
    CreateMessage: success
  }
}

export default class EditCompany extends Component {
  state = { registerError: null, CreateMessage: null}
    constructor(props) {
    super(props);
    this.state = {
        users: [],
        generalDataCompanies: [],
        generalData: [],
        generalDataTypes: [],
        generalDataPartners: [],
        theId: '',
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleDisabled(theId) {

    this.setState({
        myDisabled: !this.state.myDisabled
        
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let theId = this.props.location.state.theId;

    let companyTitle = '';
    this.state.companyTitle == '' ? companyTitle = this.props.location.state.companyTitle : companyTitle = this.state.companyTitle;
    
    let companyPhone = '';
    this.state.companyPhone == '' ? companyPhone = this.props.location.state.companyPhone : companyPhone = this.state.companyPhone;

	let companyAddress = '';
	this.state.companyAddress == '' ? companyAddress = this.props.location.state.companyAddress : companyAddress = this.state.companyAddress;

	let assignedTo = '';
	this.state.assignedTo == '' ? assignedTo = this.props.location.state.assignedTo : assignedTo = this.state.assignedTo;

	let companyNotes = '';
	this.state.companyNotes == '' ? companyNotes = this.props.location.state.companyNotes : companyNotes = this.state.companyNotes;

	let companyTaxId = '';
	this.state.companyTaxId == '' ? companyTaxId = this.props.location.state.companyTaxId : companyTaxId = this.state.companyTaxId;

	let companyShortName = '';
	this.state.companyShortName == '' ? companyShortName = this.props.location.state.companyShortName : companyShortName = this.state.companyShortName;

	let companyBudgetDate = '';
	this.state.companyBudgetDate == '' ? companyBudgetDate = this.props.location.state.companyBudgetDate : companyBudgetDate = this.state.companyBudgetDate;

	let companyWebsite = '';
	this.state.companyWebsite == '' ? companyWebsite = this.props.location.state.companyWebsite : companyWebsite = this.state.companyWebsite;

	let companyCity = '';
	this.state.companyCity == '' ? companyCity = this.props.location.state.companyCity : companyCity = this.state.companyCity;

	let companyType = '';
	this.state.companyType == '' ? companyType = this.props.location.state.companyType : companyType = this.state.companyType;

	let companyPartner = '';
	this.state.companyPartner == '' ? companyPartner = this.props.location.state.companyPartner : companyPartner = this.state.companyPartner;


    const companiesRef = ref.child(`/companies/${theId}`)
    
    const companiesLocal = {
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
		companyPartner: companyPartner
      }
       companiesRef.set(companiesLocal)
    .catch(e => this.setState(setErrorMsg(e)))
    this.setState(setSuccessMsg('Company created successul.'))
      this.setState({
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
		companyPartner: ''
    });
    
  }
  

  componentDidMount() {
  	let myDisabled = this.props.location.state.myDisabled;
  	let viewMode = this.props.location.state.viewMode;
  	this.setState({
        myDisabled: myDisabled,
        viewMode: viewMode
      });
  	
  	const usersRef = ref.child(`users`)
    
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = [];
      let name = '';
      for (let user in users) {
      	//users[user].type_user == 'ADMINISTRATOR' ? name = users[user].name : name = ''
        newState.push({
          id: user,
          name: users[user].name,
          typeUser: users[user].type_user
          
        });
      }
      this.setState({
        users: newState
      });
    });
    
    const theRef = ref.child(`companyTypes`)
    
    theRef.on('value', (snapshot) => {
      let generalData = snapshot.val();
      let newStateTypes = [];
      for (let entity in generalData) {
        newStateTypes.push({
          typeId: entity,
          typeTitle: generalData[entity].typeTitle
        });
      }
      this.setState({
        generalDataTypes: newStateTypes
      });
    });
    const theRefPartners = ref.child(`businessPartners`)
    
    theRefPartners.on('value', (snapshot) => {
      let generalDataPartners = snapshot.val();
      let newStatePartners = [];
      for (let entityPartner in generalDataPartners) {
        newStatePartners.push({
          partnerId: entityPartner,
          partnerTitle: generalDataPartners[entityPartner].partnerTitle
        });
      }
      this.setState({
        generalDataPartners: newStatePartners
      });
    });
    
  }
  render () {
    return (
    	<div className="col-xs-12 noPadding">
          <div className="col-xs-12 noPadding">
	          <h3 className="row header smaller lighter blue">
	            <span className="col-sm-6"><i className="fa fa-group bigger-160"></i>&nbsp; View & Edit Company&nbsp;&nbsp;{ this.state.viewMode === true ? <button className="cleanButton" onClick={() => this.handleDisabled()}><i className={this.state.myDisabled === false ? 'fa fa-lock green' : 'fa fa-edit green'} aria-hidden="true"></i></button> : <span></span> } </span> 

	          </h3>
          </div>
          <div className="widget-box col-xs-12 col-md-12">
            
                <form onSubmit={this.handleSubmit} >
                	<div className="col-xs-5 col-md-5">
	                    <fieldset>
	                      <label className="block clearfix">
	                      <span className="blue">Company name</span>
	                        <span className="block input-icon input-icon-right">
	                        	<input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyTitle" onChange={this.handleChange} defaultValue={this.props.location.state.companyTitle} />	
	                        	
	                          
	                        </span>
	                      </label>
	                      <label className="block clearfix">
	                      	<span className="blue">Phone</span>
	                        <span className="block input-icon input-icon-right">
	                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyPhone" onChange={this.handleChange} defaultValue={this.props.location.state.companyPhone} />
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      <label className="block clearfix">
	                      	<span className="blue">Address</span>
	                        <span className="block input-icon input-icon-right">
	                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyAddress" onChange={this.handleChange} defaultValue={this.props.location.state.companyAddress} />
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      <label className="block clearfix">
	                        <span className="block input-icon input-icon-right">
	                        <span className="blue">Assigned to</span>
	                        
	                          <select disabled={this.state.myDisabled === false ? false : true} className="form-control" name="assignedTo" onChange={this.handleChange} defaultValue={this.props.location.state.assignedTo}>
	                          	<option value={this.props.location.state.assignedTo}>{this.props.location.state.assignedTo}</option>
	                          	{this.state.users.map((user) => {
	                          		let typeU = user.typeUser;
	                          		let nameU = user.name;
	                          		//console.log('el tipo es '+typeU)
	                          		if (typeU  == 'ADMINISTRATOR' && nameU != this.props.location.state.assignedTo) {
		                          		return (
		                          		<option key={user.id} value={user.name}>{user.name}</option>
			                            	
			                            )
	                          		}	
		                        	})
		                        }
		                    </select>
	                          
	                        </span>
	                      </label>
	                      <label className="block clearfix">
	                      	<span className="blue">Notes</span>
	                        <span className="block input-icon input-icon-right">
	                          <textarea disabled={this.state.myDisabled === false ? false : true} className="form-control" name="companyNotes" onChange={this.handleChange} defaultValue={this.props.location.state.companyNotes}></textarea>
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      <div className="space"></div>

	                        <div className="clearfix">
	                        	<Link style={{marginRight:'20px'}} className="width-35 pull-left btn btn-sm btn-success" to="./companies-list" ><i className="fa  fa-arrow-left" aria-hidden="true"></i>  Go Back</Link>
	                          <button name="Button_DoLogin" type="submit" className="width-35 pull-left btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="fa fa-floppy-o" aria-hidden="true"></i>  Save</button>
	                          {
			                      this.state.registerError &&
			                      <div className="alert alert-danger" role="alert">
			                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                        <span className="sr-only">Error:</span>
			                        &nbsp;{this.state.registerError}
			                      </div>
			                }
			                {
			                      this.state.CreateMessage &&
			                      <div className="alert alert-success mySuccess" role="alert">
			                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                        <span className="sr-only">Sucess: </span>
			                        &nbsp;{this.state.CreateMessage}
			                      </div>
			                }
	                          
	                        </div>

	                          <div className="space-4"></div>
	                    </fieldset> 
	                </div> 
	                <div className="col-xs-7 col-md-7">
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                				<span className="blue">Tax ID</span>
			                        <span className="block input-icon input-icon-right">
			                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyTaxId" onChange={this.handleChange} defaultValue={this.props.location.state.companyTaxId} />
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                				<span className="blue">Company Shortname</span>
			                        <span className="block input-icon input-icon-right">
			                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyShortName" onChange={this.handleChange} defaultValue={this.props.location.state.companyShortName} />
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                				<span className="blue">Budget Date</span>
			                        <span className="block input-icon input-icon-right">
			                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control"  type="date" name="companyBudgetDate" onChange={this.handleChange} defaultValue={this.props.location.state.companyBudgetDate} />
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                			<span className="blue">Website</span>
			                        <span className="block input-icon input-icon-right">
			                          <input disabled={this.state.myDisabled === false ? false : true} className="form-control" type="text" name="companyWebsite" onChange={this.handleChange} defaultValue={this.props.location.state.companyWebsite} />
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                				<span className="blue">City</span>
			                        <span className="block input-icon input-icon-right">
			                          <select disabled={this.state.myDisabled === false ? false : true} className="form-control" name="companyCity" type="text" onChange={this.handleChange} defaultValue={this.props.location.state.companyCity} >
			                            
			                            <option value="SANTO DOMINGO">SANTO DOMINGO</option>
			                            <option value="SANTO DOMINGO ESTE">SANTO DOMINGO ESTE</option>
										<option value="SANTO DOMINGO NORTE">SANTO DOMINGO NORTE</option>
										<option value="SANTO DOMINGO OESTE">SANTO DOMINGO OESTE</option>
										<option value="SANTIAGO">SANTIAGO</option>
										<option value="PUERTO PLATA<">PUERTO PLATA</option>
										<option value="SAMANA">SAMANA</option>
										<option value="PUNTA CANA">PUNTA CANA</option>
			                          </select>
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                			<span className="blue">Company Type</span>
			                        <span className="block input-icon input-icon-right">
			                            <select disabled={this.state.myDisabled === false ? false : true} className="form-control" name="companyType" onChange={this.handleChange} >

			                            	<option value={this.props.location.state.companyType}>{this.props.location.state.companyType}</option>
				                          	{this.state.generalDataTypes.map((entity) => {
				                          		
					                          		return (
					                          		<option key={entity.typeId} value={entity.typeTitle}>{entity.typeTitle}</option>	
						                            )
					                        	})
					                        }
					                    </select>
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		<fieldset>
	                			<label className="block clearfix">
	                			<span className="blue">Business Partners</span>
			                        <span className="block input-icon input-icon-right">
			                            <select disabled={this.state.myDisabled === false ? false : true} className="form-control" name="companyPartner" onChange={this.handleChange} defaultValue={this.props.location.state.companyPartner}>
			                            	<option value={this.props.location.state.companyPartner}>{this.props.location.state.companyPartner}</option>
				                          	{this.state.generalDataPartners.map((entityPartner) => {
				                          		
					                          		return (
					                          		<option key={entityPartner.partnerId} value={entityPartner.partnerTitle}>{entityPartner.partnerTitle}</option>	
						                            )
					                        	})
					                        }
					                    </select>
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                	</div>
	                	<div className="col-xs-12 col-md-6">
	                		
	                	</div>
	                </div>

                </form>
          </div>
          			
        </div>
        
    )
  }
}
