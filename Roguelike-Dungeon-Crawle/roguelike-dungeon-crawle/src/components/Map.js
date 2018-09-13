import React from 'react';
import '../App.css'
import { connect } from 'react-redux';


function MapTile(props) {
    return <div
   
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: 40,
            width: 40,
        }}
    >

    </div>
}


function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass';
        case 5:
            return 'rock';
        case 6:
            return 'tree';
        case 2:
            return 'car';
    }
}

function MapRow(props) {
    return <div className="row">
        {props.tiles.map(tile => <MapTile tile={tile} />)}
    </div>
}


function Map(props) {
    return (
        <div
            style={{
                width: '800px',
                height: '400px',
                backgroundColor: 'green',
            }}
        >

            {/* {props.tiles.map(row => <MapRow tiles={row} />)} */}
        </div>
    )

}




function mapStateToProps(state) {
    return { tiles: state.map.tiles }

}

export default connect(mapStateToProps, null)(Map);





