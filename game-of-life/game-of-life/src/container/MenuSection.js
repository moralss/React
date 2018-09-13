import React, { Component } from 'react';
import '../App.css';

export default class MenuSection extends Component {

    render() {

        return (

            <div id="gameDetails">
                <button className='btn btn-primary' id="pauseOrPlay"
                    onClick={() => this.props.gameMode()}>Start</button>
                <button className='btn btn-warning' id="pauseOrPlay"
                    onClick={() => this.props.pauseGame()}>Pause</button>
                <button className='btn btn-danger' id="pauseOrPlay"
                    onClick={() => this.props.clearGrid()}>Clear</button>
            </div>



        );
    }
}

