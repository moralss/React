const initialState = {
  lives: 0,
  weaponPower: 0,
  enemysKilled: 0,
  level: 1,
  smallGrid: [],
  isSmallGrid: false,
  isGameMode: false
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

    case "HIDE_GRID":
      return {
        ...state,
        isSmallGrid: true
      };

    case "SHOW_GRID":
      return {
        ...state,
        isSmallGrid: false
      };

    case "TOGGLE_GAME_MODE":
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
