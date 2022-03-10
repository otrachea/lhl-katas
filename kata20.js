const blocksAway = function (directions) {
  let dist = { 'east': 0, 'north': 0 };
  let currentDirection = 0;
  (directions[0] === "right") ? currentDirection += 1 : currentDirection = 0;
  // 0 = N, 1 = E, 2 = S, 3 = W

  for (let i = 1; i < directions.length; i++) {
    if (typeof directions[i] === "number") {
      if (currentDirection % 4 === 0) {
        dist.north += directions[i];
      } else if (currentDirection % 4 === 1) {
        dist.east += directions[i];
      } else if (currentDirection % 4 === 2) {
        dist.north -= directions[i];
      } else {
        dist.east -= directions[i];
      }
    } else {
      if (directions[i] === "right") {
        currentDirection++;
      } else { // directions[i] === "left"
        currentDirection--;
      }
    }
  }

  return dist;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
