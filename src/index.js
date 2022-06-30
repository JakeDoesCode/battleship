import { makePlayerBoard, makeAIBoard} from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import { checkSpace,placeAIShip,shipPlaced } from './modules/gameplay';

const playerFleet = newFleet();
const AIFleet = newFleet();

makePlayerBoard();
makeAIBoard();
placeAIShip(AIFleet[0])
placeAIShip(AIFleet[1])
placeAIShip(AIFleet[2])
placeAIShip(AIFleet[3])
placeAIShip(AIFleet[4])

//! FOR TESTS
playerFleet[0].hit();
AIFleet[1].hit();
AIFleet[1].hit();
AIFleet[4].sunk();




export { playerFleet, AIFleet };
