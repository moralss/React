import React, { Component } from 'react';
import { connect } from 'react-redux';
import addBook from './addBook';


class AddBook extends Component {

    addBook() {
        console.log(this.props.book);
    }


    submitForm() {
        this.props.addNewBook(this.refs.title.value);
    }


    render() {

        return (
            <div>
                <input type="text" ref="title" />
                <button onClick={this.submitForm.bind(this)}> submit</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allBooks: state.addbook
    }
}


function mapDispatchToProps(dispatch) {
    return { addNewBook : (title) => dispatch(addBook(title)) }
    // return bindActionCreators({ addBook: addBook }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);



