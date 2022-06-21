import { shipyardOne, shipyardTwo } from './script';

test('Battleship afloat', () => {
  expect(shipyardOne.battleShip.shipSink).toBeFalsy();
});

test('Battleship sunk', () => {
  expect(shipyardOne.destroyer.shipSink).toBeTruthy();
});
test('Still Alive', () => {
  expect(shipyardTwo.destroyer.shipSink).toBeTruthy();
});
