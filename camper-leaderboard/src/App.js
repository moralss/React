import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


var apiAllTime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
var apiRecent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      
    }
  }


  getData(apiLink){
    axios.get(apiLink)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  componentWillMount() {
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }


  changeToRecent() {
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
   
  }

  changeToAllTime() {
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }


  render() {
    return (
      <div>
        {
          <table>
            <thead>
              <tr>
                <th>
                  #
          </th>
                <th>
                  Camper Name
          </th>
                <th>
                  <a href="#" onClick={() => this.changeToRecent()}>Points in past 30 days</a>

                </th>
                <th>
                  <a href="#" onClick={() => this.changeToAllTime()}>All Time</a>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.persons.map(p => {
                  var name = "https://www.freecodecamp.org/" + p.username;
                  return <tr key={p.username}>
                    <td> {this.state.persons.indexOf(p) + 1} </td>
                    <td> <img src={p.img} /> <a target="_blank" href={name} >{p.username}</a> </td>
                    <td> {p.recent} </td>
                    <td> {p.alltime} </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        }
      </div>
    )
  }
}

export default App;
