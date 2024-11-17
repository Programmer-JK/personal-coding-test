function findDistance(maps, start, target) {
  let moveCount = 0;
  let moveX = [1, -1, 0, 0];
  let moveY = [0, 0, 1, -1];

  let goX = 0;
  let goY = 0;

  maps[start[0]][start[1]] = "X";
  let queue = [start];

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        goX = x + moveX[k];
        goY = y + moveY[k];

        if (
          goX >= 0 &&
          goX < maps.length &&
          goY >= 0 &&
          goY < maps[0].length &&
          maps[goX][goY] !== "X"
        ) {
          if (maps[goX][goY] === target) {
            return moveCount + 1;
          } else {
            queue.push([goX, goY]);
            maps[goX][goY] = "X";
          }
        } else {
          continue;
        }
      }
    }
    moveCount++;
  }
  return -1;
}

function solution(maps) {
  let answer = 0;
  let findLever = -1;
  let findExit = -1;

  let start = [];
  let lever = [];
  let exit = [];

  // Find Start Point, Lever Point (Starting Point)
  for (let i = 0; i < maps.length; i++) {
    for (let k = 0; k < maps[i].length; k++) {
      if (maps[i][k] === "S") {
        start = [i, k];
      } else if (maps[i][k] === "L") {
        lever = [i, k];
      }
    }
  }

  let mapsLever = maps.map((item) => item.split(""));
  let mapsExit = maps.map((item) => item.split(""));
  findLever = findDistance(mapsLever, start, "L");
  findExit = findDistance(mapsExit, lever, "E");

  if (findLever !== -1 && findExit !== -1) {
    answer = findLever + findExit;
  } else {
    answer = -1;
  }
  return answer;
}
