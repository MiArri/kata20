
//changing direction and position if the input is "right"
const turnRight = function (currentDirection, position) {
  if (position.north === 0 && currentDirection === "right") {
    return currentDirection
  }

  switch (currentDirection) {
    case "up":
      return "right"
    case "right":
      return "down"
    case "down":
      return "left"
    case "left":
      return "up"
    default:
      throw new Error("AAAAAAA")
  }
}
//changing direction and position if the input is "left"
const turnLeft = function (currentDirection, position) {
  if (position.east === 0 && currentDirection === "up") {
    return currentDirection
  }

  switch (currentDirection) {
    case "up":
      return "left"
    case "left":
      return "down"
    case "down":
      return "right"
    case "right":
      return "up"
    default:
      throw new Error("AAAAAAA")
  }
}

const move = function (direction, position, steps) {
  switch (direction) {
    case "up":
      return {
        east: position.east,
        north: position.north += steps
      }
    case "down":
      return {
        east: position.east,
        north: position.north -= steps
      }
    case "left":
      return {
        east: position.east -= steps,
        north: position.north
      }
    case "right":
      return {
        east: position.east += steps,
        north: position.north
      }
    default:
      throw new Error("Snowy day")
  }
}

const blocksAway = function(directions) {
  let position = { east: 0, north: 0 }
  let direction = "up"
  
  for (const nextStep of directions) {
    if (nextStep === "right") {
      direction = turnRight(direction, position) 
    } else if (nextStep === "left") {
      direction = turnLeft(direction, position) 
    } else {
      move(direction, position, nextStep)
    }
  }

  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));