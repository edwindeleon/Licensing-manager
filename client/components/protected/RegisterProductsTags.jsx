import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
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

export default class RegisterProductsTags extends Component {
  state = { registerError: null, CreateMessage: null}
    constructor() {
    super();
    this.state = {
      title: ''
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
    let title = this.state.title;

    const partnersRef = firebaseDatabase.ref(`productsTags/`)
    
    let typeLocal = partnersRef.push();
	typeLocal.set({
	    title: title
	})
      
  
    .catch(e => this.setState(setErrorMsg(e)))
    this.setState(setSuccessMsg('Tag created successful.'))
      this.setState({
      title: ''
    });
    
  }
  render () {
    return (
    	<div className="col-xs-12 noPadding">
          
          <div className="widget-box col-xs-12 col-md-12">
            
                <form onSubmit={this.handleSubmit} style={{maxWidth: '450px'}}>
                    <fieldset>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="Title" type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      
                      <div className="space"></div>

                        <div className="clearfix">
                          <button name="Button_DoLogin" type="submit" className="width-35 pull-left btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="icon-key"></i>Save</button>
                        </div>

                          <div className="space-4"></div>
                    </fieldset>  
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
