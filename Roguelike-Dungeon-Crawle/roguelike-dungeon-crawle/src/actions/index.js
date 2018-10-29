export const movePlayer = coordinates => {
  return {
    type: "MOVE_PLAYER",
    payload: coordinates
  };
};

export const setPlayerOldLocation = (object) => {
  return {
      type: 'PLAYER_OLD_LOCATION',
      payload: object
  }
}


export const gameOver = status => {
  return {
    type: "GAME_OVER",
    payload: status
  };
};

export const toggleShowGrid = boolean => {
  return {
    type: "TOGGLE_SHOW_GRID",
    payload: boolean
  };
};

export const changeGrid = newGrid => {
  return {
    type: "UPDATE_GRID",
    payload: newGrid
  };
};

export const updateGridToDisplay = cells => {
  return {
    type: "UPDATE_GRID_TO_DISPLAY",
    payload: cells
  };
};

export const updateLevel = value => {
  return {
    type: "NEXT_LEVEL",
    payload: value
  };
};

export const toggleBossActive = status => {
  return {
    type : "TOGGLE_BOSS_ACTIVE",
    payload:status
  }
}

export const resetGame = () => {
  return {
    type: "RESET_GAME"
  };
};
