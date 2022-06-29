import { playerFleet, AIFleet } from './src/index';
import { shipsPlaced } from './src/modules/gameBoard';

test('Battleship afloat', () => {
  expect(playerFleet[1].shipSink).toBeFalsy();
});

test('Destroyer Afloat', () => {
  expect(AIFleet[2].shipSink).toBeFalsy();
});

test('AI patrol boat has been sunk', () => {
  expect(AIFleet[4].shipSink).toBeTruthy();
});

test('Player Carrier Hit', () => {
  expect(playerFleet[0].shipHit).toBeTruthy();
});

test('Player Patrol Boat alive', () => {
  expect(playerFleet[4].shipSink).toBeFalsy();
});
test('Battleship struck twice', () => {
  expect(AIFleet[1].shipHit).toBe(2);
});
test('AI Fleet position set', () => {
  expect(shipsPlaced()).toBeTruthy();
});