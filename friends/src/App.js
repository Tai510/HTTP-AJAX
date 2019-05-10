import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import FriendList from './FriendList'
import NewForm from './NewForm';


class App extends Component {
    constructor() {
    super()
    this.state = {
    friends:[],
    id: null,
    name:'',
    age:'',
    email:''
    }
  }


 
  async componentDidMount() {
    try { let res = await axios.get('http://localhost:5000/friends');
        this.setState({friends: res.data})
      console.log(this.state.friends)} catch(err){
        console.error(err)
        }
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({[e.target.name]:e.target.value})
    }


  addNewFriend = e => {
    e.preventDefault()
    const friends = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
}

  axios
    .post(`http://localhost:5000/friends/`, friends)
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err));
  }

  updateFriends = e => {
    const friends = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
}

  axios
    .put(`http://localhost:5000/friends/`, friends)
    .then(res => 
    this.setState({friends: res.data}))
    .catch(err => console.log(err));

  }

  deleteFriends = e => {
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(error => console.log('Error: ', error))
  }

  render ()  {
    return (
      <div >
        <div className='title'>
          <h1 className='friendlist-title'>Friends List</h1>
        </div>
        <div className='display'>
        <FriendList deleteFriends={this.deleteFriends} updateFriends={this.updateFriends} {...this.state}/>
        <NewForm addNewFriend={this.addNewFriend} changeHandler={this.changeHandler} {...this.state} />
        
        </div>
      </div>
    )
  
  }

}

export default App;
