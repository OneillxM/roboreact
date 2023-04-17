
import React, { Component } from 'react';
import CardList from './Cardlist';
import SearchBox from './searchbox';
import Scroll from './scroll';
import ErrorBoundary from "./errorBoundary";

import './App.css';
import { robots } from './robots';

// const state = {
//   robots: robots,
//   searchfield: ''
// }


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=> {
       return response.json();
        }).then(users => {
        this.setState({robots: users})
      });
    

    
   
  }

  onSearchChange=(event)=>{
     this.setState({ searchfield: event.target.value});
    
      
  }
  render(){
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
        <CardList robots={filterRobots} />
        </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

}

export default App;
