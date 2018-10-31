const initialState = {
  lives: 0,
  weaponPower: 0,
  enemysKilled: 0,
  level: 1,
  isSmallGrid: false,
  xp:0,
  isBossActive : false
};

const gameStateReducer = (state = initialState, action) => {
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
        enemysKilled: state.enemysKilled + 1,
        xp: state.xp + 20
      };

    case "SUBTRACT_LIFE":
      return {
        ...state,
        lives: state.lives - 1
      };

    case "NEXT_LEVEL":
      return {
        ...state,
        enemysKilled : 0,
        level: state.level +  1,
        xp:state.xp + 20

        
      };

    case "TOGGLE_BOSS_ACTIVE":
      return {
        ...state,
        isBossActive: action.payload
      };

      case "TOGGLE_SHOW_GRID":
      return {
        ...state,
        isSmallGrid: action.payload
      };

    case "RESET_GAME":
      return {
        ...state,
        isGameMode: false,
        lives: 0,
        weaponPower: 0,
        enemysKilled: 0,
        level: 1,
        isSmallGrid: false,
        xp:0,
        isBossActive : false
      };

    default:
      return state;
  }
};

export default gameStateReducer;
