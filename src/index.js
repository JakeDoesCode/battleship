import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import { placeAIFleet, userClick, playerSelect,gameLoop } from './modules/gameplay';


let playerFleet = newFleet();
let AIFleet = newFleet();

makePlayerBoard();
makeAIBoard();
placeAIFleet();
gameLoop()




//! FOR TESTS

export { playerFleet, AIFleet };
