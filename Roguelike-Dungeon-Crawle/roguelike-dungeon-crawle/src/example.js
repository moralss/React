// export const determineMovement(playerPosition) {
//     var oldLocation = this.state.playerLocation;
//     let nextLocation = this.props.map.tiles.find(
//       cell => cell.x === playerPosition.x && cell.y === playerPosition.y
//     );

//     if (nextLocation === undefined) {
//       return
//     }

//     let isMove = true;

//     switch (nextLocation.tile) {
//         case "enemy":{
//             handleEnemy(nextLocation, this.props);
//             break;
//         }
//         case "boss": {
//             handleBoss(nextLocation);
//         }
//     }

//       if (nextLocation.tile === "boss") {
//         if (
//           this.props.gameStatus.weaponPower <= 2 &&
//           this.props.gameStatus.lives === 0
//         ) {
//           this.setGameOver(
//             "over , you need at least a weapon power above 2 to kill the boss"
//           );
//           this.generateNewGrid();
//           return
//         }

//         if (this.props.gameStatus.weaponPower >= 2) {
//           this.props.useWeaponPower(1);
//           this.playerMovement(nextLocation);
//           this.props.moveToNewLocation({
//             x: nextLocation.x,
//             y: nextLocation.y
//           });

//           this.setState({
//             playerLocation: playerPosition,
//             oldLocation: oldLocation
//           });
//           this.setGameOver("won");
//           this.generateNewGrid();
//         }

//         if (
//           this.props.gameStatus.weaponPower <= 2 &&
//           this.props.gameStatus.lives > 0
//         ) {
//           this.props.subtractLive(1);
//           this.playerMovement(oldLocation);
//     }

//         isMove = false;
//       }

//       if (nextLocation.tile === "wall") {
//         this.playerMovement(oldLocation);
//         isMove = false;
//       }

//       if (nextLocation.tile === "health") {
//         this.props.getHealth(nextLocation);
//       }

//       if (nextLocation.tile === "weapon1") {
//         this.getWeapon(1);
//       }

//       if (nextLocation.tile === "weapon2") {
//         this.getWeapon(2);
//       }

//       if (isMove) {
//         this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
//         this.setState({
//           playerLocation: playerPosition,
//           oldLocation: oldLocation
//         });
//       }

//   }


//   function handleEnemy(nextLocation, { gameStatus: { weaponPower, lives }, useWeaponPower, subtractLive, moveToNewLocation }){
//     if (
//       weaponPower === 0 &&
//       lives === 0
//     )
//      {
//       this.setGameOver("over");
//       this.generateNewGrid();
//       return
//     }

//     if (
//         weaponPower === 0 &&
//         lives > 0
//       ) {
//         subtractLive(1);
//         return
//       } 

//         useWeaponPower(1);
//         moveToNewLocation({
//           x: nextLocation.x,
//           y: nextLocation.y
//         });
      

//     isMove = false;
//   }