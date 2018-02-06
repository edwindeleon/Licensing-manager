import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { firebaseAuth } from '../../config/constants'
import UsersList from './UsersList'

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
export default class LateralMenu extends Component {
	  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
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
	render () {
	    return (
	      	<div>
	      		<BrowserRouter>
					<div id="sidebar" className="sidebar responsive ace-save-state">
						<script type="text/javascript">
							try{ace.settings.loadState('sidebar')}catch(e){}
						</script>

						<div className="sidebar-shortcuts" id="sidebar-shortcuts">
							<div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
								<button className="btn btn-success">
									<i className="ace-icon fa fa-signal"></i>
								</button>

								<button className="btn btn-info">
									<i className="ace-icon fa fa-pencil"></i>
								</button>

								
								<button className="btn btn-warning">
									<i className="ace-icon fa fa-users"></i>
								</button>

								<button className="btn btn-danger">
									<i className="ace-icon fa fa-cogs"></i>
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
								<a href="index.html">
									<i className="menu-icon fa fa-tachometer"></i>
									<span className="menu-text"> Dashboard </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-desktop"></i>
									<span className="menu-text">
										IT Assesment
									</span>

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

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-list"></i>
									<span className="menu-text"> Licensing </span>

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

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-pencil-square-o"></i>
									<span className="menu-text"> Companies </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="form-elements.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Form Elements
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="form-elements-2.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Form Elements 2
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="form-wizard.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Wizard &amp; Validation
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="wysiwyg.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Wysiwyg &amp; Markdown
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="dropzone.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Dropzone File Upload
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
								<a href="widgets.html">
									<i className="menu-icon fa fa-list-alt"></i>
									<span className="menu-text"> Contacts </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="calendar.html">
									<i className="menu-icon fa fa-calendar"></i>

									<span className="menu-text">
										Products

										
										<span className="badge badge-transparent tooltip-error" title="2 Important Events">
											<i className="ace-icon fa fa-exclamation-triangle red bigger-130"></i>
										</span>

										
									</span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="gallery.html">
									<i className="menu-icon fa fa-picture-o"></i>
									<span className="menu-text"> Notifications </span>
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-tag"></i>
									<span className="menu-text"> More Pages </span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="profile.html">
											<i className="menu-icon fa fa-caret-right"></i>
											User Profile
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="inbox.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Inbox
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="pricing.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Pricing Tables
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="invoice.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Invoice
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="timeline.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Timeline
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="search.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Search Results
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="email.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Email Templates
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="login.html">
											<i className="menu-icon fa fa-caret-right"></i>
											Login &amp; Register
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="active open">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-file-o"></i>

									<span className="menu-text">
										Settings

										
										<span className="badge badge-primary">5</span>

									</span>

									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="#">
											<i className="menu-icon fa fa-caret-right"></i>
											
										
										<Link to="/userslist" className="navbar-brand">Users</Link>
										</a>
										<b className="arrow"></b>
									</li>
								</ul>
							</li>
						</ul>
						<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
							<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
						</div>
						<Switch>
                
		                <PrivateRoute authed={this.state.authed} path='/userslist' component={UsersList} />
		                <Route render={() => <h3>No Match</h3>} />
		              </Switch>
					</div>
				</BrowserRouter>
	      	</div>
	    )
  	}
}