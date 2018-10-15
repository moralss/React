const initialState = {
  position: { x: 0, y: 0 }
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...state, position: action.payload };
    case "MOVE_TO_OLD_POSITION":
      return { ...state, oldPosition: action.payload };
    case "TOGGLE_GAME_MODE":
      return { ...state, position: { x: 0, y: 0 } };

    default:
      return state;
  }
};

export default playerReducer;
