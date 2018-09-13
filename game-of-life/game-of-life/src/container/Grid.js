import React, { Component } from 'react';
import Cell from './Cell';
import '../App.css';
import '../index.css';



export default class Grid extends Component {


    render() {
        return (
            <div>
             
                <div className="row">
                    <div className="col-md-8" id="grid">
                        {this.props.grid.map(gridCell => {
                            return <Cell
                             toggleAliveOrDead={() => this.props.toggleAliveOrDead(gridCell)}
                                grid={this.props.grid}
                                gridCell={gridCell}
                            />
                        })}
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div >
        )
    }
}

