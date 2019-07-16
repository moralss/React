import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      isSection : false,
      inputName : ""
    }
  }

  componentWillMount() {
    console.log("willMount");

  }

  componentDidMount() {
    console.log("didMount")
  }


  toggleSection(){
    if(this.state.isSection == false){
      this.setState({isSection : true})
    }
    if(this.state.isSection == true){
      this.setState({isSection : false})
    }
  }

  componentWillUnmount() {
    console.log("willUnmount")

  }

  onChange(e){
    console.log('WATCH ME' , e.target.value);
    this.setState({inputName : e.target.value});
  }

  sendSubmit(){
    this.setState({inputName : "moral"});    
  }

  render() {
    console.log("render")
    return (
      <div>
       <input onChange={(e) => this.onChange(e)}/>
      <button onClick={() => this.sendSubmit()}> Submit </button>
        <button onClick={() => this.toggleSection()}> say yes! </button>
        {this.state.isSection == true ? <Section name={this.state.inputName}/> : null}
      </div>
    );
  }
}

App.propTypes = {

};

export default App;