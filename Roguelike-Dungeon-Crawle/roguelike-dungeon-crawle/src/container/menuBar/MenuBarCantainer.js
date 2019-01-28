import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

import MenuBar from './MenuBar';

function mapStateToProps(state) {
    return {
      gameStatus: state.gameStatus,
      tiles: state.map.tiles,
      player: state.player.position
    };
  }
  
  function dispatchStateToProps(dispatch) {
    return {
      updateLevel: () => dispatch(actions.updateLevel()),
      moveToNewLocation: object => dispatch(actions.movePlayer(object)),
      updateGrid: object => dispatch(actions.changeGrid(object)),
      toggleShowGrid: boolen => dispatch(actions.toggleShowGrid(boolen)),
      resetGame: () => dispatch(actions.resetGame()),
      toggleBossActive : (status) => dispatch(actions.toggleBossActive(status))
    };
  }
  
  export default connect(
    mapStateToProps,
    dispatchStateToProps
  )(MenuBar);
  