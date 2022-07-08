import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import { placeAIFleet, userClick, playerPlaceShip } from './modules/gameplay';

let playerFleet = newFleet();
let AIFleet = newFleet();

makePlayerBoard();
makeAIBoard();
placeAIFleet();
userClick();

//! FOR TESTS

export { playerFleet, AIFleet };
