import React from 'react';
import '../App.css'
import { connect } from 'react-redux';



class PieceOfGrid extends React.Component {
    constructor() {
        super()
        this.state = {
            tiles: [],
            player: { x: 0, y: 0 },
            oldLocation: { x: 0, y: 0 },
        };
    }

    createGridToDisplay() {
        console.log("grid to display", this.props.player);
    }



    render() {
        this.createGridToDisplay()
        return (
            <div className="piece">
                <p> block to display</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player.position
    }
}



export default connect(mapStateToProps, null)(PieceOfGrid);



