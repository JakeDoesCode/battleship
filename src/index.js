import { makePlayerBoard, makeAIBoard } from './modules/gameBoard';
import { newFleet } from './modules/shipFactory';
import {
  placeAIFleet,
  userClick,
  

  
} from './modules/gameplay';

let playerFleet = newFleet();
let AIFleet = newFleet();


makePlayerBoard();
makeAIBoard();
placeAIFleet()
playerFleet[0].location = ['A1','A2,','A3','A4','A5']
playerFleet[1].location = ['B1','B2,','B3','B4']
playerFleet[2].location = ['C1','C2,','C3']
playerFleet[3].location = ['D1','D2,','D3']
playerFleet[4].location = ['E1','E2']
userClick();



//! FOR TESTS



export { playerFleet, AIFleet};
