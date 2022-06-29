import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';

const playerFleet = newFleet();
const AIFleet = newFleet();

// makePlayerBoard();
// makeAIBoard();



//! FOR TESTS
playerFleet[0].hit();
AIFleet[1].hit();
AIFleet[1].hit();
AIFleet[4].sunk();
AIFleet[0].location = ['A1','A2','A3','A4','A5'];
AIFleet[1].location = ['A1','B1','C1','D1'];
AIFleet[2].location = ['C6','C7','C8'];
AIFleet[3].location = ['C8','D8','E8'];
AIFleet[4].location = ['H10','I10']


export { playerFleet, AIFleet };
