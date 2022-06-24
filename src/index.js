import { makePlayerBoard, makeAIBoard} from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
const playerFleet = newFleet();
const AIFleet = newFleet();

makePlayerBoard();
makeAIBoard()

//! FOR TESTS
playerFleet.carrier.hit();
AIFleet.battleShip.hit();
AIFleet.battleShip.hit();
AIFleet.patrolBoat.sunk();

export { playerFleet, AIFleet };
