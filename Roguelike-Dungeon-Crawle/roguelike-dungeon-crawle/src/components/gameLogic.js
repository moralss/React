
  export function findPlayerLocation(playerPosition , props){
    let nextLocation = props.map.tiles.find(
      cell => cell.x === playerPosition.x && cell.y === playerPosition.y
    );
    return nextLocation;
  }



export function handleEnemy(nextLocation, oldLocation, props) {
  const { weaponPower, lives } = props.gameStatus;
  if (weaponPower <= 0 && lives === 0) {
    alert(`game over!`);
    props.resetGame();
    return;
  }
  if (weaponPower > 0) {
    props.useWeaponPower(1);
    props.moveToNewLocation({x: nextLocation.x, y: nextLocation.y});
    props.setPlayerOldLocation(oldLocation);
    return;
  }
  if (weaponPower === 0 && lives > 0) {
    props.subtractLife();
    return;
  }
}

export function handleBoss(props) {
  const { weaponPower, lives } = props.gameStatus;
  if (weaponPower <= 2 && lives === 0) {
    alert("over , you need at least a weapon power above 2 to kill the boss");
    props.resetGame();
  }
  if (weaponPower > 2) {
    alert("won");
    props.resetGame();
    return;
  }
  if (weaponPower <= 2 && lives > 0) {
    props.subtractLife();
  }
}
