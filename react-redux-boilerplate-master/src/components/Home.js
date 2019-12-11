import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, sendMessage } from '../actions';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      message: ""
    }
  }



  componentDidMount() {
    // checkIsAuthNav();
  }

  render() {
    const { name, message } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <button onClick={() => this.props.sendMessage({ name, message })}> Send </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: (value) => { dispatch(updateName(value)) },
  sendMessage: (text) => { dispatch(sendMessage(text)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);