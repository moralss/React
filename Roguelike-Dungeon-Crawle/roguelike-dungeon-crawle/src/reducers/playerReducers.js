const initialState = {
  position: { x: 7, y: 7 },
  OldPosition: { x: 7, y: 7 }
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...state, position: action.payload };
    case "RESET_GAME":
      return {
        ...state,
        position: { x: 7, y: 7 },
        OldPosition: { x: 7, y: 7 }
      };
    case "PLAYER_OLD_LOCATION":
      return { ...state, OldPosition: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
