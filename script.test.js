import { playerFleet, AIFleet} from './src/index';

test('Battleship afloat', () => {
  expect(playerFleet.battleShip.shipSink).toBeFalsy();
});

test('Destroyer Afloat', () => {
  expect(AIFleet.destroyer.shipSink).toBeFalsy();
});

test('AI patrol boat has been sunk', () => {
  expect(AIFleet.patrolBoat.shipSink).toBeTruthy();
});


test('Player Carrier Hit', () => {
  expect(playerFleet.carrier.shipHit).toBeTruthy();
});

test('Player Patrol Boat alive', () => {
  expect(playerFleet.patrolBoat.shipSink).toBeFalsy();
});
test('Battleship struck twice', () => {
  expect(AIFleet.battleShip.shipHit).toBe(2);
});