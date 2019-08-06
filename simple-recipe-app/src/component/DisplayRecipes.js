import React, { Component } from "react";
import PropTypes from "prop-types";
import { async } from "q";
import axios from 'axios';

class DisplayRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listOfUsers : []
    }
  }

  async componentDidMount ()  {
      try{
          const {data} = await axios.get("http://localhost:3003/user")
          this.setState({listOfUsers : data})
      }catch(e){
          console.log(e)
      }
    }
  




  render() {
      console.log(this.state.listOfUsers);

    const {listOfUsers} = this.state;
    return (
      <div>
        <h3> List of users </h3>
        {listOfUsers.map((user)  => <li> {user.name} {user.id} </li>)}
        </div>
    );
  }
}

DisplayRecipes.propTypes = {};

export default DisplayRecipes;
