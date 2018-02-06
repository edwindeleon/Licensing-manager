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

export default class RegisterProductsSuites extends Component {
  state = { registerError: null, CreateMessage: null}
    constructor() {
    super();
    this.state = {
        generalDataTypes: [],
        suiteTitle: '',
		suiteName: '',
		suiteDetails: '',
		suiteManufacturer: '',
		suiteStatus: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let suiteTitle = this.state.suiteTitle;
    let suiteName = this.state.suiteName;
	let suiteDetails = this.state.suiteDetails;
	let suiteManufacturer = this.state.suiteManufacturer;
	let suiteStatus = this.state.suiteStatus;
	

    const suiteRef = firebaseDatabase.ref(`productsSuites/`)
    
    let suiteLocal = suiteRef.push();
	suiteLocal.set({
	    suiteTitle: suiteTitle,
	    suiteName: suiteName,
		suiteDetails: suiteDetails,
		suiteManufacturer: suiteManufacturer,
		suiteStatus: suiteStatus
	})
      
  
    .catch(e => this.setState(setErrorMsg(e)))
    this.setState(setSuccessMsg('Suite created successul.'))
      this.setState({
      	suiteTitle: '',
		suiteName: '',
		suiteDetails: '',
		suiteManufacturer: '',
		suiteStatus: ''
    });
    
  }
  componentDidMount() {

  	const theRef = ref.child(`productsManufacturers`)
    
    theRef.on('value', (snapshot) => {
      let generalDataTypes = snapshot.val();
      let newState = [];
      for (let entity in generalDataTypes) {
        newState.push({
          id: entity,
          typeTitle: generalDataTypes[entity].typeTitle
        });
      }
      this.setState({
        generalDataTypes: newState
      });
    });
    
    
  }
  render () {
    return (
    	<div className="col-xs-12 noPadding">
          <div className="col-xs-12 noPadding">
	          <h3 className="row header smaller lighter blue">
	            <span className="col-sm-4"><i className="fa fa-group bigger-160"></i>&nbsp; Register Suite&nbsp;&nbsp;</span> 

	          </h3>
          </div>
          <div className="widget-box col-xs-12 col-md-12">
            
                <form onSubmit={this.handleSubmit} >
                	<div className="col-xs-5 col-md-5">
	                    <fieldset>
	                      <label className="block clearfix">
	                        <span className="block input-icon input-icon-right">
	                          <input className="form-control" placeholder="Suite" type="text" name="suiteTitle" onChange={this.handleChange} value={this.state.suiteTitle} />
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      <label className="block clearfix">
	                        <span className="block input-icon input-icon-right">
	                          <input className="form-control" placeholder="Suite Name" type="text" name="suiteName" onChange={this.handleChange} value={this.state.suiteName} />
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      
	                      <label className="block clearfix">
	                        <span className="block input-icon input-icon-right">
	                          <textarea className="form-control" placeholder="Suite Details" name="suiteDetails" onChange={this.handleChange} value={this.state.suiteDetails}></textarea>
	                          <i className="icon-user"></i>
	                        </span>
	                      </label>
	                      <div className="space"></div>

	                        <div className="clearfix">
	                          <button name="Button_DoLogin" type="submit" className="width-35 pull-left btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="icon-key"></i>Save</button>
	                        </div>

	                          <div className="space-4"></div>
	                    </fieldset> 
	                </div> 
	                <div className="col-xs-5 col-md-5">
	                
	                		<fieldset>
	                			<label className="block clearfix">
	                			<span>Manufacturers</span>
			                        <span className="block input-icon input-icon-right">
			                            <select className="form-control" name="suiteManufacturer" onChange={this.handleChange} >

				                          	{this.state.generalDataTypes.map((entity) => {
				                          		
					                          		return (
					                          		<option key={entity.id} value={entity.typeTitle}>{entity.typeTitle}</option>	
						                            )
					                        	})
					                        }
					                    </select>
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                			<label className="block clearfix">
	                				<span>Suite Status</span>
			                        <span className="block input-icon input-icon-right">
			                          <select className="form-control" name="suiteStatus" type="text" onChange={this.handleChange} value={this.state.suiteStatus} >
			                            <option>SELECT</option>
			                            <option value="ACTIVE">ACTIVE</option>
			                            <option value="LEGACY">LEGACY</option>
										<option value="DISCONTINUE">DISCONTINUE</option>
										
			                          </select>
			                          <i className="icon-user"></i>
			                        </span>
		                        </label>
	                		</fieldset>
	                </div>

                </form>
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
                      <div className="alert alert-success" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Sucess:</span>
                        &nbsp;{this.state.CreateMessage}
                      </div>
                    }
              
          </div>
        </div>
    )
  }
}
