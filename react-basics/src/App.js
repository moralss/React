import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Friend from './components/Friend';
import ShowSingleFriend from './components/ShowSingleFriend';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [
        {
          name:"Thato",
          text:"I hate you"
        },
        {
          name:"Vusi",
          text:"I love soccer you"
        },
        {
          name:"Sbu",
          text:"what what what"
        }
      ],
      singlefriend : "",
      inputColor:""
    }
  }

  showSingleFriend = (name) => {
    this.setState({singlefriend : name});
  }


  showButton(){
    const name = "moral";

    return (
      <div>
           <button> say Hello {name} </button>
      </div>
    )
  }


  onChange(e){
    this.setState({inputColor:e.target.value});
  }

  render() {
    // console.log();
    const {friends , singlefriend} = this.state;
    return (
      <div style={{backgroundColor:this.state.inputColor}} >
      <input type="text" onChange={(e) => this.onChange(e)}/>
      <Header/>
        {friends.map(friend => <Friend
           friend={friend}
           showSingleFriend={this.showSingleFriend}
           />
          )}
          {this.showButton()}
        <ShowSingleFriend singlefriend={singlefriend}/>
      </div>

    )
  }
}
