import { makePlayerBoard, makeAIBoard, checkSpace, placeShips } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';

const playerFleet = newFleet();
const AIFleet = newFleet();

// makePlayerBoard();
// makeAIBoard();
placeShips()
checkSpace()
//! FOR TESTS
playerFleet[0].hit();
AIFleet[1].hit();
AIFleet[1].hit();
AIFleet[4].sunk();

export { playerFleet, AIFleet };
