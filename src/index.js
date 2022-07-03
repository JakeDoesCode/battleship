import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import {
  placeAIShips,
  userClick,
  playerTileSelect,
  placePlayer,
  placePlayerFleet,
  
} from './modules/gameplay';

let playerFleet = newFleet();
let AIFleet = newFleet();


makePlayerBoard();
makeAIBoard();
placeAIShips()
userClick();
placePlayerFleet()

//! FOR TESTS



export { playerFleet, AIFleet};
