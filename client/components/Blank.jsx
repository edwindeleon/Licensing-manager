import React, { Component } from 'react'

export default class Blank extends Component {
  render () {
    return (
      	<div>	
			<div id="navbar" className="navbar navbar-default ace-save-state">
				<div className="navbar-container ace-save-state" id="navbar-container">
					
					<button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
						<span className="sr-only">Toggle sidebar</span>

						<span className="icon-bar"></span>

						<span className="icon-bar"></span>

						<span className="icon-bar"></span>
					</button>

					
					<div className="navbar-header pull-left">
						
						<a href="#" className="navbar-brand">
							<small>
								<i className="fa fa-leaf"></i>
								Ace Admin
							</small>
						</a>

						
					</div>

					
					<div className="navbar-buttons navbar-header pull-right" role="navigation">
						<ul className="nav ace-nav">
							<li className="grey">
								<a data-toggle="dropdown" className="dropdown-toggle" href="#">
									<i className="ace-icon fa fa-tasks"></i>
									<span className="badge badge-grey">4</span>
								</a>

								<ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
									<li className="dropdown-header">
										<i className="ace-icon fa fa-check"></i>
										4 Tasks to complete
									</li>

									<li className="dropdown-content">
										<ul className="dropdown-menu dropdown-navbar">
											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">Software Update</span>
														<span className="pull-right">65%</span>
													</div>

													<div className="progress progress-mini">
														<div className="progress-bar"></div>
													</div>
												</a>
											</li>

											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">Hardware Upgrade</span>
														<span className="pull-right">35%</span>
													</div>

													<div className="progress progress-mini">
														<div className="progress-bar progress-bar-danger"></div>
													</div>
												</a>
											</li>

											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">Unit Testing</span>
														<span className="pull-right">15%</span>
													</div>

													<div className="progress progress-mini">
														<div className="progress-bar progress-bar-warning"></div>
													</div>
												</a>
											</li>

											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">Bug Fixes</span>
														<span className="pull-right">90%</span>
													</div>

													<div className="progress progress-mini progress-striped active">
														<div className="progress-bar progress-bar-success"></div>
													</div>
												</a>
											</li>
										</ul>
									</li>

									<li className="dropdown-footer">
										<a href="#">
											See tasks with details
											<i className="ace-icon fa fa-arrow-right"></i>
										</a>
									</li>
								</ul>
							</li>

							<li className="purple">
								<a data-toggle="dropdown" className="dropdown-toggle" href="#">
									<i className="ace-icon fa fa-bell icon-animated-bell"></i>
									<span className="badge badge-important">8</span>
								</a>

								<ul className="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
									<li className="dropdown-header">
										<i className="ace-icon fa fa-exclamation-triangle"></i>
										8 Notifications
									</li>

									<li className="dropdown-content">
										<ul className="dropdown-menu dropdown-navbar navbar-pink">
											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">
															<i className="btn btn-xs no-hover btn-pink fa fa-comment"></i>
															New Comments
														</span>
														<span className="pull-right badge badge-info">+12</span>
													</div>
												</a>
											</li>

											<li>
												<a href="#">
													<i className="btn btn-xs btn-primary fa fa-user"></i>
													Bob just signed up as an editor ...
												</a>
											</li>

											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">
															<i className="btn btn-xs no-hover btn-success fa fa-shopping-cart"></i>
															New Orders
														</span>
														<span className="pull-right badge badge-success">+8</span>
													</div>
												</a>
											</li>

											<li>
												<a href="#">
													<div className="clearfix">
														<span className="pull-left">
															<i className="btn btn-xs no-hover btn-info fa fa-twitter"></i>
															Followers
														</span>
														<span className="pull-right badge badge-info">+11</span>
													</div>
												</a>
											</li>
										</ul>
									</li>

									<li className="dropdown-footer">
										<a href="#">
											See all notifications
											<i className="ace-icon fa fa-arrow-right"></i>
										</a>
									</li>
								</ul>
							</li>

							<li className="green">
								<a data-toggle="dropdown" className="dropdown-toggle" href="#">
									<i className="ace-icon fa fa-envelope icon-animated-vertical"></i>
									<span className="badge badge-success">5</span>
								</a>

								<ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
									<li className="dropdown-header">
										<i className="ace-icon fa fa-envelope-o"></i>
										5 Messages
									</li>

									<li className="dropdown-content">
										<ul className="dropdown-menu dropdown-navbar">
											<li>
												<a href="#" className="clearfix">
													<img src="../assets/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
													<span className="msg-body">
														<span className="msg-title">
															<span className="blue">Alex:</span>
															Ciao sociis natoque penatibus et auctor ...
														</span>

														<span className="msg-time">
															<i className="ace-icon fa fa-clock-o"></i>
															<span>a moment ago</span>
														</span>
													</span>
												</a>
											</li>

											<li>
												<a href="#" className="clearfix">
													<img src="../assets/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
													<span className="msg-body">
														<span className="msg-title">
															<span className="blue">Susan:</span>
															Vestibulum id ligula porta felis euismod ...
														</span>

														<span className="msg-time">
															<i className="ace-icon fa fa-clock-o"></i>
															<span>20 minutes ago</span>
														</span>
													</span>
												</a>
											</li>

											<li>
												<a href="#" className="clearfix">
													<img src="../assets/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
													<span className="msg-body">
														<span className="msg-title">
															<span className="blue">Bob:</span>
															Nullam quis risus eget urna mollis ornare ...
														</span>

														<span className="msg-time">
															<i className="ace-icon fa fa-clock-o"></i>
															<span>3:15 pm</span>
														</span>
													</span>
												</a>
											</li>

											<li>
												<a href="#" className="clearfix">
													<img src="../assets/avatars/avatar2.png" className="msg-photo" alt="Kate's Avatar" />
													<span className="msg-body">
														<span className="msg-title">
															<span className="blue">Kate:</span>
															Ciao sociis natoque eget urna mollis ornare ...
														</span>

														<span className="msg-time">
															<i className="ace-icon fa fa-clock-o"></i>
															<span>1:33 pm</span>
														</span>
													</span>
												</a>
											</li>

											<li>
												<a href="#" className="clearfix">
													<img src="../assets/avatars/avatar5.png" className="msg-photo" alt="Fred's Avatar" />
													<span className="msg-body">
														<span className="msg-title">
															<span className="blue">Fred:</span>
															Vestibulum id penatibus et auctor  ...
														</span>

														<span className="msg-time">
															<i className="ace-icon fa fa-clock-o"></i>
															<span>10:09 am</span>
														</span>
													</span>
												</a>
											</li>
										</ul>
									</li>

									<li className="dropdown-footer">
										<a href="inbox.html">
											See all messages
											<i className="ace-icon fa fa-arrow-right"></i>
										</a>
									</li>
								</ul>
							</li>

							
							<li className="light-blue">
								<a data-toggle="dropdown" href="#" className="dropdown-toggle">
									<img className="nav-user-photo" src="../assets/avatars/user.jpg" alt="Jason's Photo" />
									<span className="user-info">
										<small>Welcome,</small>
										Jason
									</span>

									<i className="ace-icon fa fa-caret-down"></i>
								</a>

								<ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
									<li>
										<a href="#">
											<i className="ace-icon fa fa-cog"></i>
											Settings
										</a>
									</li>

									<li>
										<a href="profile.html">
											<i className="ace-icon fa fa-user"></i>
											Profile
										</a>
									</li>

									<li className="divider"></li>

									<li>
										<a href="#">
											<i className="ace-icon fa fa-power-off"></i>
											Logout
										</a>
									</li>
								</ul>
							</li>

							
						</ul>
					</div>		
				</div>
				</div>
				<div className="main-container ace-save-state" id="main-container">
				<div id="sidebar" className="sidebar responsive ace-save-state">
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
									UI &amp; Elements
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
								<span className="menu-text"> Tables </span>

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
								<span className="menu-text"> Forms </span>

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
								<span className="menu-text"> Widgets </span>
							</a>

							<b className="arrow"></b>
						</li>

						<li className="">
							<a href="calendar.html">
								<i className="menu-icon fa fa-calendar"></i>

								<span className="menu-text">
									Calendar

									
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
								<span className="menu-text"> Gallery </span>
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
									Other Pages

									
									<span className="badge badge-primary">5</span>

									
								</span>

								<b className="arrow fa fa-angle-down"></b>
							</a>

							<b className="arrow"></b>

							<ul className="submenu">
								<li className="">
									<a href="faq.html">
										<i className="menu-icon fa fa-caret-right"></i>
										FAQ
									</a>

									<b className="arrow"></b>
								</li>

								<li className="">
									<a href="error-404.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Error 404
									</a>

									<b className="arrow"></b>
								</li>

								<li className="">
									<a href="error-500.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Error 500
									</a>

									<b className="arrow"></b>
								</li>

								<li className="">
									<a href="grid.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Grid
									</a>

									<b className="arrow"></b>
								</li>

								<li className="active">
									<a href="blank.html">
										<i className="menu-icon fa fa-caret-right"></i>
										Blank Page
									</a>

									<b className="arrow"></b>
								</li>
							</ul>
						</li>
					</ul>

					
					<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
						<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
					</div>

					
				</div>

				
				<div className="main-content">
					<div className="main-content-inner">
						
						<div className="breadcrumbs ace-save-state" id="breadcrumbs">
							<ul className="breadcrumb">
								<li>
									<i className="ace-icon fa fa-home home-icon"></i>
									<a href="#">Home</a>
								</li>

								<li>
									<a href="#">Other Pages</a>
								</li>
								<li className="active">Blank Page</li>
							</ul>

							
							<div className="nav-search" id="nav-search">
								<form className="form-search">
									<span className="input-icon">
										<input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autocomplete="off" />
										<i className="ace-icon fa fa-search nav-search-icon"></i>
									</span>
								</form>
							</div>

							
						</div>

						
						<div className="page-content">
							
							<div className="ace-settings-container" id="ace-settings-container">
								<div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
									<i className="ace-icon fa fa-cog bigger-130"></i>
								</div>

								<div className="ace-settings-box clearfix" id="ace-settings-box">
									<div className="pull-left width-50">
										
										<div className="ace-settings-item">
											<div className="pull-left">
												<select id="skin-colorpicker" className="hide">
													<option data-skin="no-skin" value="#438EB9">#438EB9</option>
													<option data-skin="skin-1" value="#222A2D">#222A2D</option>
													<option data-skin="skin-2" value="#C6487E">#C6487E</option>
													<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
												</select>
											</div>
											<span>&nbsp; Choose Skin</span>
										</div>

										

										
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-navbar" autocomplete="off" />
											<label className="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
										</div>

										

										
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-sidebar" autocomplete="off" />
											<label className="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
										</div>

									

										
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-breadcrumbs" autocomplete="off" />
											<label className="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
										</div>

										

										
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl" autocomplete="off" />
											<label className="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
										</div>

										 
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-add-container" autocomplete="off" />
											<label className="lbl" for="ace-settings-add-container">
												Inside
												<b>.container</b>
											</label>
										</div>

										
									</div>

									<div className="pull-left width-50">
										
										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-hover" autocomplete="off" />
											<label className="lbl" for="ace-settings-hover"> Submenu on Hover</label>
										</div>

										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-compact" autocomplete="off" />
											<label className="lbl" for="ace-settings-compact"> Compact Sidebar</label>
										</div>

										<div className="ace-settings-item">
											<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-highlight" autocomplete="off" />
											<label className="lbl" for="ace-settings-highlight"> Alt. Active Item</label>
										</div>

										
									</div>
								</div>
							</div>

							
							<div className="row">
								<div className="col-xs-12">
									

									
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer">
					<div className="footer-inner">
						
						<div className="footer-content">
							
						</div>

						
					</div>
				</div>

				<a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
					<i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
				</a>
			</div>
		</div>
    )
  }
}