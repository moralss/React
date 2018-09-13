import React, { Component } from 'react';
import { connect } from 'react-redux'
import selectBook from './selectBook'

class List extends Component {

    renderList() {
        return this.props.allBooks.map(book => (
            <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
              >
                {book.title}
            </li>
        ));
    };

    render() {
        console.log("test", this.props.allBooks.map((book) => { book }));
        return (
            <div>

                {this.renderList()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        selectedBook: state.books,
        allBooks: state.addbook
    }
}

function mapDispatchToProps(dispatch) {
    return { selectBook: (title) => dispatch(selectBook(title)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);



