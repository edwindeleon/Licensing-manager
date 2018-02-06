import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import UsersList from './UsersList'


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

export default class Register extends Component {
  state = { registerError: null, CreateMessage: null, emailVerified: null }
    constructor() {
    super();
    this.state = {
      name: '',
      pw: '',
      email: '',
      type_user: '',
      personal_id: '',
      phone: '',
      id: '',
      uid: '',
      emailVerified: null,
      users: []
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
    let successCreate = 'Account create sucessful.';
    let email = this.state.email;
    let pw = this.state.pw;
    let name = this.state.name;
    let type_user = 'INACTIVE';
    let personal_id = this.state.personal_id;
    let phone = this.state.phone;
    let emailVerified = null;
    firebaseAuth().createUserWithEmailAndPassword(email, pw).then(function(user) {
      //const usersRef = ref.child(`users/`)
      const usersRef = firebaseDatabase.ref(`users/${user.uid}`)
      const userLocal = {
        name: name,
        email: email,
        uid: user.uid,
        type_user: type_user,
        personal_id: personal_id,
        phone: phone
        
      }
       usersRef.set(userLocal);
       user.sendEmailVerification().then(function() {
        console.log("confirmation email sent");
        
      //document.write('Account create sucessful. Please check your E-mail to activate it.')
          // Email sent.
        }).catch(function(error) {
          // An error happened.
          console.log("error sending the confirmation email");
        });
    })
    .catch(e => this.setState(setErrorMsg(e)))
    this.setState(setSuccessMsg('Account create sucessful. Please check your E-mail to activate it.'))
      this.setState({
      name: '',
      email: '',
      pw: '',
      type_user: '',
      personal_id: '',
      phone: '',
      emailVerified: null
    });
      
      <Redirect to='/UsersList' />
    
  }
  render () {
    return (
    	<div className="col-xs-12 noPadding">
          
          <div className="widget-box col-xs-12 col-md-12">
            
                <form onSubmit={this.handleSubmit} style={{maxWidth: '450px'}}>
                    <fieldset>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="Full name" type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="E-mail" type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="Password" type="password" name="pw" onChange={this.handleChange} value={this.state.pw} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <select className="form-control" name="type_user" type="text" onChange={this.handleChange} value={this.state.type_user} >
                            <option value="INACTIVE">INACTIVE</option>
                            <option value="USER">USER</option>
                            <option value="OPERATOR">OPERATOR</option>
                            <option value="POWER USER">POWER USER</option>
                            <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                          </select>
                          
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="Personal ID" type="text" name="personal_id" onChange={this.handleChange} value={this.state.personal_id} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <label className="block clearfix">
                        <span className="block input-icon input-icon-right">
                          <input className="form-control" placeholder="Phone" type="text" name="phone" onChange={this.handleChange} value={this.state.phone} />
                          <i className="icon-user"></i>
                        </span>
                      </label>
                      <div className="space"></div>

                        <div className="clearfix">
                          <button name="Button_DoLogin" type="submit" className="width-35 pull-left btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="icon-key"></i>Register</button>
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
