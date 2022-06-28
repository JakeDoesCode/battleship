//factory function for ship
const shipFactory = (shipName, shipHealth, shipHit, shipSink, location) => {
  function hit() {
    return this.shipHit++;
  }
  function sunk() {
    return (this.shipSink = true);
  }
  return { shipName, shipHealth, shipHit, shipSink, location, hit, sunk };
};

//will build the "fleet" for both players
const newFleet = () => {
  const carrier = shipFactory('carrier', 5, 0, false, []);
  const battleShip = shipFactory('battleShip', 4, 0, false, []);
  const destroyer = shipFactory('destroyer', 3, 0, false, []);
  const submarine = shipFactory('submarine', 3, 0, false, []);
  const patrolBoat = shipFactory('patrolBoat', 2, 0, false, []);
  const ship = [carrier, battleShip, destroyer, submarine, patrolBoat];
  return ship;
};
export { newFleet };
