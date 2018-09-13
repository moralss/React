import React, { Component } from 'react';
import '../App.css';

export default class GameInfo extends Component {

    render() {

        return (

            <div id="gameInfo">
                    <span>Generation Number: {this.props.generationNumber} </span>
                    <span>Alive cells: {this.props.aliveCells} </span>
                    <span>Game: {this.props.gameStatus} </span>
            </div>

        );
    }
}

