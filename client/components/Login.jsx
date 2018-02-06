import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
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
                        Console Access Information
                      </h4>

                      <div className="space-6"></div>

                        <fieldset>
                          <label className="block clearfix">
                            <span className="block input-icon input-icon-right">
                              <input className="form-control" placeholder="Username" id="Loginlogin" ref={(email) => this.email = email} placeholder="Email"/>
                              <i className="icon-user"></i>
                            </span>
                          </label>

                          <label className="block clearfix">
                            <span className="block input-icon input-icon-right">
                              
                              <input type="password" className="form-control" id="Loginpassword" placeholder="Password" ref={(pw) => this.pw = pw} />
                              <i className="icon-lock"></i>
                            </span>
                          </label>

                          <div className="space"></div>

                          <div className="clearfix">
                            <button name="Button_DoLogin" type="submit" className="width-35 pull-right btn btn-sm btn-success" value="Login" id="LoginButton_DoLogin"><i className="icon-key"></i> Login</button>
                          </div>

                          <div className="space-4"></div>
                        </fieldset>


                      <div className="social-or-login center">
                        <span className="bigger-110">Don't have an account?</span><br/>
                      </div>
                        <div className="center">
                      <Link style={{color: '#333'}} to="/register" className="text-center registrarseh4">Sign up</Link>
                    </div>
                    {
                      this.state.loginMessage &&
                      <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
                      </div>
                    }

                    </div>

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
