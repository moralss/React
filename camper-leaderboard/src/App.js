import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import config from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      colorRecent: "black",
      colorAllTime: "blue"
    }
  }

  getData(apiLink) {
    axios.get(config.apiBaseUrl + apiLink)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  componentWillMount() {
    this.getData("/fccusers/top/alltime");
  }


  changeToRecent() {
    this.setState({ colorRecent: "blue", colorAllTime: "black" });
    this.getData("/fccusers/top/recent");
  }

  changeToAllTime() {
    this.setState({ colorRecent: "black", colorAllTime: "blue" });
    this.getData("/fccusers/top/alltime");
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
                  <a style={{color:this.state.colorRecent}} href="#" onClick={() => this.changeToRecent()}>Points in past 30 days</a>
                </th>
                <th>
                  <a style={{color:this.state.colorAllTime}} href="#" onClick={() => this.changeToAllTime()}>All Time</a>
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
