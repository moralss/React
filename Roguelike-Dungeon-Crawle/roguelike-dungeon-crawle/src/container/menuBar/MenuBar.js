import React from "react";
import { createGridToDisplay } from "../game-func";

class MenuBar extends React.Component {
  constructor() {
    super();
   
  }

  updateLevel() {
    let nextLevelGrid = createGridToDisplay();
    this.props.updateGrid(nextLevelGrid);
    this.props.updateLevel();

    if (this.props.gameStatus.level === 1 && this.props.gameStatus.enemysKilled === 9) {
      this.props.toggleBossActive(true);
      let nextLevelGrid = createGridToDisplay(true);
      this.props.updateGrid(nextLevelGrid);

    }
  }

  render() {
    const {
      xp,
      lives,
      weaponPower,
      enemysKilled,
      level,
      isBossActive
    } = this.props.gameStatus;

    return (
      <div className="menu-bar">
        {this.props.gameStatus.enemysKilled === 9 ? this.updateLevel() : null}
        <div>
          <span> {isBossActive ? "Boss active" : "Gain XP to unlock the boss"} </span>
        </div>
        <div>
          <label> lives </label>
          <span> {lives}</span>
        </div>
        <div>
          <label> weapon power </label>
          <span> {weaponPower}</span>
        </div>
        <div>
          <label> enemys killed </label>
          <span> {enemysKilled}</span>
        </div>
        <div>
          <label>level </label>
          <span> {level} </span>
        </div>

        <div>
          <label>XP </label>
          <span> {xp} </span>
        </div>

        <div>
          <button onClick={() => this.props.toggleGamePlay(true)}>
          play game</button>
        </div>

        <div>
          <button onClick={() => this.props.toggleShowGrid(true)}>
            show full grid
          </button>
        </div>

        <div>
          <button onClick={() => this.props.toggleShowGrid(false)}>
            show small grid
          </button>
        </div>

        <div>
          <button onClick={() =>  this.props.toggleGamePlay(false)}>
           quite game </button>
        </div>
      </div>
    );
  }
}


export default MenuBar;