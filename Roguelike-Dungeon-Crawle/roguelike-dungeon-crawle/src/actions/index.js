export const movePlayer = coordinates => {
  return {
    type: "MOVE_PLAYER",
    payload: coordinates
  };
};

export const gameOver = status => {
  return {
    type: "GAME_OVER",
    payload: status
  };
};

export const activateShowGrid = () => {
  return {
    type: "SHOW_GRID"
  };
};

export const activateHideGrid = () => {
  return {
    type: "SHOW_GRID"
  };
};

export const moveToOldPosition = coordinates => {
  return {
    type: "MOVE_TO_OLD_POSITION",
    payload: coordinates
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

export const toggleGameMode = status => {
  return {
    type: "TOGGLE_GAME_MODE",
    payload: status
  };
};
