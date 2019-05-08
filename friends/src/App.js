import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import FriendList from './FriendList'


class App extends Component {
    constructor() {
    super()
    this.state = {
    friends:[]
    }
  }
 
  async componentDidMount() {
    try { let res = await axios.get('http://localhost:5000/friends');
        this.setState({friends: res.data})} catch(err){
        console.error(err)
        }
    }

  render ()  {
    return (
      <div>
        <FriendList {...this.state}/>
      </div>
    )
  
  }

}

export default App;
