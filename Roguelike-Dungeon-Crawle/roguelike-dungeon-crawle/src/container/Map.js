import React from "react";
import "../App.css";
import { connect } from "react-redux";

class Map extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { tiles, player, oldLocation } = this.props;

    return (
      <div className="map">
        {tiles.map(cell => {
          if (cell.x === oldLocation.x && cell.y === oldLocation.y) {
            cell.tile = null;
          }

          if (cell.x === player.x && cell.y === player.y) {
            cell.tile = "Player";
          }

          const isHidden =
            !this.props.isSmallGrid &&
            cell.tile != "Player" &&
            !(
              Math.abs(player.x - cell.x) <= 1 &&
              Math.abs(player.y - cell.y) <= 1
            );

          return (
            <div
              key={tiles.indexOf(cell)}
              id={`${cell.show}`}
              className={`tile ${cell.tile} ${isHidden ? "tile-hidden" : ""}`}
            >
        
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSmallGrid: state.gameStatus.isSmallGrid,
    tiles: state.map.tiles,
    player: state.player.position
  };
}


export default connect(
  mapStateToProps,
  null
)(Map);
