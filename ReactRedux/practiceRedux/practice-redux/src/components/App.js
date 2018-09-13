import React, { Component } from 'react';
import { connect } from 'react-redux'
import BookList from '../containers/List';
import BookDetails from '../containers/BookDetails';
import AddBook from '../containers/AddBook';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <BookList />
        <BookDetails />
        <AddBook/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}


export default connect(mapStateToProps)(App);
