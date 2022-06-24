const shipFactory = (shipHealth, shipHit, shipSink) => {
  function hit() {
    return this.shipHit++;
  }
  function sunk() {
    return (this.shipSink = true);
  }
  return { shipHealth, shipHit, shipSink, hit, sunk };
};
const newFleet = () => {
  const carrier = shipFactory(5, 0, false);
  const battleShip = shipFactory(4, 0, false);
  const destroyer = shipFactory(3, 0, false);
  const submarine = shipFactory(3, 0, false);
  const patrolBoat = shipFactory(2, 0, false);
  return { carrier, battleShip, destroyer, submarine, patrolBoat };
};
export { newFleet };
