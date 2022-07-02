import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import {
  placeAIShips,
  userClick,
  playerTileSelect
} from './modules/gameplay';

const playerFleet = newFleet();
let AIFleet = newFleet();


makePlayerBoard();
makeAIBoard();
placeAIShips()
userClick();
playerTileSelect()
//! FOR TESTS



export { playerFleet, AIFleet};
