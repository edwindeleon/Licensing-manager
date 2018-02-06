import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Blank from './Blank'
import Dashboard from './protected/Dashboard'
import LateralMenu from './protected/LateralMenu'
import UsersList from './protected/UsersList'
import Table from './protected/Table'
import CompaniesList from './protected/CompaniesList'
import RegisterCompany from './protected/RegisterCompany'
import EditCompany from './protected/EditCompany'
import BusinessPartnersList from './protected/BusinessPartnersList'
import CompanyTypesList from './protected/CompanyTypesList'
import ProductsManufacturersList from './protected/ProductsManufacturersList'
import ProductsTagsList from './protected/ProductsTagsList'
import ProductsTypesList from './protected/ProductsTypesList'
import LicenseTypesList from './protected/LicenseTypesList'
import LicenseGrantTypesList from './protected/LicenseGrantTypesList'
import CompetitorsProductsList from './protected/CompetitorsProductsList'
import ProductsSuitesList from './protected/ProductsSuitesList'
import RegisterProductsSuites from './protected/RegisterProductsSuites'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import {SideMenu, Item} from 'react-sidemenu'


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      //if (user && user.emailVerified == true) {
      if (user) {
        let emailVerified = user.emailVerified;
        console.log('email verificado '+emailVerified);
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><small>
              <i className="fa fa-shield fa-lg light-green" aria-hidden="true"></i>
              &nbsp;&nbsp;ALM Service
            </small></Link>
              </div>
              <ul className="nav navbar-nav pull-right">
              
                <li>
                  {this.state.authed
                    ? <button 
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                    
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mainContainer">
            <div className="row">
              {this.state.authed
                    ?
              <div className="col-md-3 mainContainer noPadding">
                  <div id="sidebar" className="sidebar responsive ace-save-state" >
                   

                    <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                      <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                        <button className="btn btn-success">
                          <i className="ace-icon fa"></i>
                        </button>

                        <button className="btn btn-info">
                          <i className="ace-icon fa"></i>
                        </button>

                        
                        <button className="btn btn-warning">
                          <i className="ace-icon fa"></i>
                        </button>

                        <button className="btn btn-danger">
                          <i className="ace-icon fa"></i>
                        </button>

                        
                      </div>

                      <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                        <span className="btn btn-success"></span>

                        <span className="btn btn-info"></span>

                        <span className="btn btn-warning"></span>

                        <span className="btn btn-danger"></span>
                      </div>
                    </div>

                    <ul className="nav nav-list">
                      <li className="">
                        <a href="#">
                          <i className="menu-icon fa fa-tachometer"></i>
                          <span className="menu-text">&nbsp;Dashboard </span>
                        </a>

                        <b className="arrow"></b>
                      </li>

                      <li className="dropdown ">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-home orange"></i>
                          <span className="menu-text">&nbsp;IT Assesment</span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <a href="#" className="dropdown-toggle">
                              <i className="menu-icon fa fa-caret-right"></i>

                              Layouts
                              <b className="arrow fa fa-angle-down"></b>
                            </a>

                            <b className="arrow"></b>

                            <ul className="submenu">
                              <li className="">
                                <a href="top-menu.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Top Menu
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="two-menu-1.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Two Menus 1
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="two-menu-2.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Two Menus 2
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="mobile-menu-1.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Default Mobile Menu
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="mobile-menu-2.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Mobile Menu 2
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="mobile-menu-3.html">
                                  <i className="menu-icon fa fa-caret-right"></i>
                                  Mobile Menu 3
                                </a>

                                <b className="arrow"></b>
                              </li>
                            </ul>
                          </li>

                          <li className="">
                            <a href="typography.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Typography
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="elements.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Elements
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="buttons.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Buttons &amp; Icons
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="content-slider.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Content Sliders
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="treeview.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Treeview
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="jquery-ui.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              jQuery UI
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="nestable-list.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Nestable Lists
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="#" className="dropdown-toggle">
                              <i className="menu-icon fa fa-caret-right"></i>

                              Three Level Menu
                              <b className="arrow fa fa-angle-down"></b>
                            </a>

                            <b className="arrow"></b>

                            <ul className="submenu">
                              <li className="">
                                <a href="#">
                                  <i className="menu-icon fa fa-leaf green"></i>
                                  Item #1
                                </a>

                                <b className="arrow"></b>
                              </li>

                              <li className="">
                                <a href="#" className="dropdown-toggle">
                                  <i className="menu-icon fa fa-pencil orange"></i>

                                  4th level
                                  <b className="arrow fa fa-angle-down"></b>
                                </a>

                                <b className="arrow"></b>

                                <ul className="submenu">
                                  <li className="">
                                    <a href="#">
                                      <i className="menu-icon fa fa-plus purple"></i>
                                      Add Product
                                    </a>

                                    <b className="arrow"></b>
                                  </li>

                                  <li className="">
                                    <a href="#">
                                      <i className="menu-icon fa fa-eye pink"></i>
                                      View Products
                                    </a>

                                    <b className="arrow"></b>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-dashboard red"></i>
                          <span className="menu-text">&nbsp;Licensing </span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <a href="tables.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              Simple &amp; Dynamic
                            </a>

                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <a href="jqgrid.html">
                              <i className="menu-icon fa fa-caret-right"></i>
                              jqGrid plugin
                            </a>

                            <b className="arrow"></b>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown open active">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-group red"></i>
                          <span className="menu-text">&nbsp;Companies </span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <Link to="/companies-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Companies</Link>
                            <b className="arrow"></b>
                          </li>

                          <li className="">
                           <Link to="/busines-partners-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Business Partners</Link>
                            <b className="arrow"></b>
                          </li>

                          <li className="">
                            <Link to="/company-types-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Company Type</Link>
                            <b className="arrow"></b>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-group green"></i>

                          <span className="menu-text">&nbsp;Contacts</span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <Link to="/userslist" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Users</Link>
                            <b className="arrow"></b>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown open active">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-th orange"></i>

                          <span className="menu-text">&nbsp;Products</span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <Link to="/products-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Products&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/products-suites-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Suites</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/competitor-products-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Competitor Products</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/license-grant-types-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> License Grant Types</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/license-types-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> License Types</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/product-types-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Product Types</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/product-tags-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Product Tags</Link>
                            <b className="arrow"></b>
                          </li>
                           <li className="">
                            <Link to="/manufacturers-list" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Manufacturers</Link>
                            <b className="arrow"></b>
                          </li>

                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-envelope blue"></i>

                          <span className="menu-text">&nbsp;Notifications</span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <Link to="/userslist" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Users</Link>
                            <b className="arrow"></b>
                          </li>
                          <li className="">
                            <Link to="/table" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Table</Link>
                            <b className="arrow"></b>
                          </li>
                        </ul>
                      </li>
                      <li className="open active">
                        <a href="#" className="dropdown-toggle">
                          <i className="menu-icon fa fa-desktop"></i>

                          <span className="menu-text">&nbsp;Settings</span>

                          <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                          <li className="">
                            <Link to="/userslist" className="navbar-brand" ><i className="menu-icon fa fa-caret-right"></i> Users</Link>
                            <b className="arrow"></b>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                      <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
                    </div>
                  </div>
                    
              </div>
              : <div>
                </div>}
                {this.state.authed
                    ?
              <div className="col-md-9 mainContainer" style={{marginLeft: '-45px'}}>
              <Switch>
                  
                  <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                  <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                  <PublicRoute authed={this.state.authed} path='/blank' component={Blank} />
                  <PrivateRoute authed={this.state.authed} path='/userslist' component={UsersList} />
                  <PrivateRoute authed={this.state.authed} path='/companies-list' component={CompaniesList} />
                  <PrivateRoute authed={this.state.authed} path='/register-company' component={RegisterCompany} />
                  <PrivateRoute authed={this.state.authed} path='/edit-company' component={EditCompany} />
                  <PrivateRoute authed={this.state.authed} path='/busines-partners-list' component={BusinessPartnersList} />
                  <PrivateRoute authed={this.state.authed} path='/company-types-list' component={CompanyTypesList} />
                  <PrivateRoute authed={this.state.authed} path='/manufacturers-list' component={ProductsManufacturersList} />
                  <PrivateRoute authed={this.state.authed} path='/product-tags-list' component={ProductsTagsList} />
                  <PrivateRoute authed={this.state.authed} path='/product-types-list' component={ProductsTypesList} />
                  <PrivateRoute authed={this.state.authed} path='/license-types-list' component={LicenseTypesList} />
                  <PrivateRoute authed={this.state.authed} path='/license-grant-types-list' component={LicenseGrantTypesList} />
                  <PrivateRoute authed={this.state.authed} path='/competitor-products-list' component={CompetitorsProductsList} />
                  <PrivateRoute authed={this.state.authed} path='/products-suites-list' component={ProductsSuitesList} />
                  <PrivateRoute authed={this.state.authed} path='/register-products-suites' component={RegisterProductsSuites} />
                  <PrivateRoute authed={this.state.authed} path='/table' component={Table} />
                  <PrivateRoute authed={this.state.authed} path='/' component={Dashboard} />
                  
                  

                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
                :
                <div className="col-md-12 mainContainer">
                
                <Switch>
                  
                  <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                  <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                  
                  <Route
                    render={() =>  <Redirect to={{pathname: '/login' }} />}
                  />
  
                </Switch>
              </div>
              }
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
