import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../config/constants'
import { auth } from '../helpers/auth'
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

export default class Register extends Component {
  state = { registerError: null, CreateMessage: null }
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
      successCreate: 'Account create successful.'
    });
  }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <form onSubmit={this.handleSubmit}>
          <div className="login-container">
            <div className="position-relative login-layout">
              <div id="login-box" className="login-box visible widget-box no-border">
                <div className="widget-body">
                  <div className="widget-main">
                    <h4 className="header blue lighter bigger">
                        <i className="icon-desktop green"></i>
                        Sign up
                    </h4>
                    <div className="space-6"></div>
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
                          <button name="Button_DoLogin" type="submit" className="width-35 pull-right btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="icon-key"></i>Sign up</button>
                        </div>

                          <div className="space-4"></div>
                    </fieldset>
                    <div className="social-or-login center">
                        <span className="bigger-110">Already have an account?</span> <br/>
                    </div>
                    <div className="center">
                      <Link style={{color: '#333'}} to="/login" className="text-center registrarseh4">Login</Link>
                    </div>
                  </div>
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

                    <div className="toolbar clearfix center">            
                      <h4>© ADEXUS 2017</h4>
                    </div> 
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
