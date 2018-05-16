import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


var apiAllTime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
var apiRecent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

class App extends Component {
  state = {
    persons: [],
    url: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }
    

    componentWillUnmount() {
    
  }


  displayCamperLeader() {
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
  }

  send(){
    this.setState({url:"https://fcctop100.herokuapp.com/api/fccusers/top/recent"})
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
                  <a href="#" onClick={this.send.bind(this)}>Points in past 30 days</a>

          </th>
                <th>
                  <a href="#" >All Time</a>
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
