import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleMovement from '../movement';


// style={{

// }}

class Player extends Component {
    render() {
        return (
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px',
                display:'grid',
                justifyContent:'center',
                alignItems:'center',
                justifyItems:'center'
            }}
            >
                <span style={{fontSize:"20px"}}>    &#12320; </span>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        ...state.player,
    }

}

export default connect(mapStateToProps)(handleMovement(Player));
