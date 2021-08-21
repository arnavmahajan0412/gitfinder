import React from 'react'
import Navbar from './components/Navbar';
import Users from './components/Users';
//import Test from './components/test';
import axios from 'axios';
import './App.css';
import Search from './components/Search';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };
 /* async componentDidMount(){
    this.setState({ loading: true});
    const res = await axios.get('https://api.github.com/users');
   // console.log(res.data);
    this.setState({ users: res.data, loading: false});
  }*/
  searchUser = async(text) =>{
  //  console.log(text);
    this.setState({ loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   // console.log(res.data);
    this.setState({ users: res.data.items, loading: false});
  }
  render() {
    return (
      <div className="App">
        <Navbar title = 'Github Finder' />
        <div className = 'container'>
          <Search userSearch = {this.searchUser}/>
          <Users loading={this.state.loading} users ={this.state.users} />
        </div>
        
      </div>
    );
  }
  
}

export default App;
