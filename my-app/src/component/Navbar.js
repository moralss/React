import React, { Component } from 'react';

class Navbar extends Component {


    render() {
        return (
            <div className="Navbar">
            <h1>Shopping List  {this.props.name} {this.props.surname}</h1> 
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
