const initialState = {
  position: { x: 7, y: 7 }
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...state, position: action.payload };
    case "RESET_GAME":
      return { ...state, position: { x: 7, y: 7 } };

    default:
      return state;
  }
};

export default playerReducer;
