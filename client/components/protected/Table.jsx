import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import { firebase, firebaseDatabase, ref, firebaseAuth } from '../../config/constants'
import { auth } from '../../helpers/auth'



export default class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      pw: '',
      email: '',
      type_user: '',
      id: '',
      uid: '',
      users: [],
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
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
        users: newState,
        searchTerm: ''
      });
    });

  }

  render () {
    const emails = this.state.users;

const KEYS_TO_FILTERS = ['email', 'name']
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <table id="usersTables" className="table table-striped table-bordered" cellSpacing="0" width="100%">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>E-mail</th>
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th>Name</th>
                  <th>E-mail</th>
              </tr>
          </tfoot>
          <tbody>
            {filteredEmails.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}