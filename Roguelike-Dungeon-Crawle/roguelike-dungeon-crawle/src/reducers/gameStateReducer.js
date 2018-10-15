const initialState = {
  lives: 0,
  weaponPower: 0,
  enemysKilled: 0,
  level: 1,
  isSmallGrid: false
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_HEALTH":
      return {
        ...state,
        lives: state.lives + 1
      };

    case "UPDATE_WEAPON":
      return {
        ...state,
        weaponPower: state.weaponPower + action.payload.weaponPower
      };

    case "UPDATE_ENEMY":
      return {
        ...state,
        lives: state.enemys.length - 1
      };

    case "SUBTRACT_WEAPON":
      return {
        ...state,
        weaponPower: state.weaponPower - action.payload,
        enemysKilled: state.enemysKilled + 1
      };

    case "SUBTRACT_LIVE":
      return {
        ...state,
        lives: state.lives - action.payload
      };

    case "NEXT_LEVEL":
      return {
        ...state,
        level: state.level + action.payload,
        enemysKilled: 0
      };

    case "TOGGLE_SHOW_GRID":
      return {
        ...state,
        isSmallGrid:action.payload
      };


    case "RESET_GAME":
      return {
        ...state,
        isGameMode: false,
        lives: 0,
        weaponPower: 0,
        enemysKilled: 0,
        level: 1,
        isSmallGrid: false
      };

    default:
      return state;
  }
};

export default playerReducer;
