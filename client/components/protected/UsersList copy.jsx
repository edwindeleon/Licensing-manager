import React, { Component } from 'react'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'
import Table from './Table'

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
    let email = this.state.email;
    let pw = this.state.pw;
    let name = this.state.name;
    firebaseAuth().createUserWithEmailAndPassword(email, pw).then(function(user) {
      //const usersRef = ref.child(`users/`)
      const usersRef = firebaseDatabase.ref(`users/${user.uid}`)
      const userLocal = {
        name: name,
        email: email,
        uid: user.uid,
        type_user: 0
        
      }
       usersRef.set(userLocal);
    })
      this.setState({
      name: '',
      email: '',
      pw: ''
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
          email: users[user].email
        });
      }
      this.setState({
        users: newState
      });
    });
  }
  removeItem(id) {
    const usersRef = ref.child(`/users/${id}`);
    								
    usersRef.remove();
  }
  render() {
    return (
      <div>
        <Table />
              <header>
                  <div className="wrapper">
                    <h1></h1>
                  </div>
              </header>
              <section className='add-item'>
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                      <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                      <input type="password" name="pw" placeholder="Password" onChange={this.handleChange} value={this.state.pw} />
                      <button>Add User</button>
                      
                    </form>
              </section>
              <section className='display-item'>
                  <div className="wrapper">
                    <ul>
                      {this.state.users.map((user) => {
                        return (
                          <li key={user.id}>
                            <h3>Nombre: {user.name}</h3>
                            <p>Email: {user.email}
                              <button onClick={() => this.removeItem(user.id)}>Remove User</button>
                            </p>
                            <p>uid: {user.id}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
              </section>
      </div>
    );
  }
}
