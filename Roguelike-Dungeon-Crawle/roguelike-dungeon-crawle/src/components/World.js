import React, { Component } from 'react';
import { tiles } from '../map1';
import Player from './Player'
import Map from './Map';
import store from '../config/store';


function World(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: tiles,
        }
    })

    return (
        <div style={{
            position: 'relative',
            width: '800px',
            backgroundColor:'black',
            height: '440px',
            border:'3px solid black'
        
        }}>
            <Map />
            <Player />

        </div>
    );
}

export default World;
