import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import SearchInput, {createFilter} from 'react-search-input'
import RegisterInternal from './RegisterInternal'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ReactDom from 'react-dom';
import Popup from 'react-popup';

export default class UsersList extends Component {
	constructor() {
    super();
    this.state = {
      name: '',
      pw: '',
      email: '',
      type_user: '',
      id: '',
      uid: '',
      personal_id: '',
      phone: '',
      users: [],
      searchTerm: '',
      myDisabled: true,
      myId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }
  handleDisabled(theId) {
    let myId = ''
    this.setState({
        myDisabled: !this.state.myDisabled,
        myId: theId
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  editItem(theId, theName, theEmail, theType, thePersonalId, thePhone) {
    const usersRef = ref.child(`/users/${theId}`);
    let preName = this.state.name;
    let name = '';
    preName == '' ? name = theName : name = preName;

    let preEmail = this.state.email;
    let email = '';
    preEmail == '' ? email = theEmail : email = preEmail;

    let preType = this.state.type_user;
    let type_user = '';
    preType == '' ? type_user = theType : type_user = preType;

    let prePersonalId = this.state.personal_id;
    let personal_id = '';
    prePersonalId == '' ? personal_id = thePersonalId : personal_id = prePersonalId;

    let prePhone = this.state.phone;
    let phone = '';
    prePhone == '' ? phone = thePhone : phone = prePhone;
    
      
      const userLocal2 = {
        name: name,
        email: email,
        type_user: type_user,
        personal_id: personal_id,
        phone: phone
        
      }
       usersRef.set(userLocal2)
       .then(function() {
       alert("User data save sucessful");
      });
      this.setState({
      myDisabled: true,
      myId: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.email;
    let pw = this.state.pw;
    let name = this.state.name;
    let type_user = this.state.type_user;
    let personal_id = this.state.personal_id;
    let phone = this.state.phone;
    firebaseAuth().createUserWithEmailAndPassword(email, pw).then(function(user) {
      
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
    })
      this.setState({
      name: '',
      email: '',
      pw: '',
      type_user: '',
      personal_id: '',
      phone: ''
    });
  }
  handleNewUser(){
    Popup.create({
    title: 'Create new user',
    content: <RegisterInternal />,
    className: 'alert',
    
});
  }
  componentDidMount() {
  	const usersRef = ref.child(`users`)
    
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
        newState.push({
          id: user,
          name: users[user].name,
          email: users[user].email,
          type_user: users[user].type_user,
          personal_id: users[user].personal_id,
          phone: users[user].phone
        });
      }
      this.setState({
        users: newState,
        searchTerm: ''
      });
    });
    
  }
  removeItem(id) {
    const usersRef = ref.child(`/users/${id}`);
    								
    usersRef.remove();
  }

  render() {

    const emails = this.state.users;

    let KEYS_TO_FILTERS = ['email', 'name']
    let filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <div id="popupContainer"><Popup /></div>
        <div className="col-xs-12 noPadding">
          <h3 className="row header smaller lighter blue">
            <span className="col-sm-4"><i className="fa fa-group bigger-160"></i>&nbsp; Users&nbsp;&nbsp;<Link to="#" onClick={() => this.handleNewUser()}><i className="fa  fa-user-plus green" aria-hidden="true"></i></Link></span> 

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
                  <th>Fullname</th>
                  <th>Username</th>
                  <th>Group ID</th>
                  <th>Personal ID</th>
                  <th>Phone</th>
                  <th></th>
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Fullname</th>
                  <th>Username</th>
                  <th>Group ID</th>
                  <th>Personal ID</th>
                  <th>Phone</th>
                  <th></th>
              </tr>
          </tfoot>
          <tbody>
            {filteredEmails.map(user => {
              let theId = user.id;
              let theName = user.name;
              let theEmail = user.email;
              let theType = user.type_user;
              let thePersonalId = user.personal_id;
              let thePhone = user.phone;
              return (
                <tr key={user.id}>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="name" onChange={this.handleChange} defaultValue={user.name} /></td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="email" onChange={this.handleChange} defaultValue={user.email} /></td>
                  <td>
                    <select ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="type_user" type="text" onChange={this.handleChange} defaultValue={user.type_user} >
                            <option value="INACTIVE">INACTIVE</option>
                            <option value="USER">USER</option>
                            <option value="OPERATOR">OPERATOR</option>
                            <option value="POWER USER">POWER USER</option>
                            <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                    </select>
                  </td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="personal_id" onChange={this.handleChange} defaultValue={user.personal_id} /></td>
                  <td><input ref={theId} disabled={this.state.myDisabled === false && this.state.myId == theId ? false : true} className="form-control" name="phone" onChange={this.handleChange} defaultValue={user.phone} /></td>
                  <td>
                  <button onClick={() => this.handleDisabled(theId)}><i className={this.state.myDisabled === false && this.state.myId == theId ? 'fa fa-lock' : 'fa fa-edit'} aria-hidden="true"></i></button>
                  <button onClick={() => this.editItem(theId, theName, theEmail, theType, thePersonalId, thePhone)}><i className="fa fa-floppy-o" aria-hidden="true"></i></button></td>
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
