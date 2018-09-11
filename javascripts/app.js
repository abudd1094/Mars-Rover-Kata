// Rover Object 
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [ ]
}

// Test Matrix
var testMatrix = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, 1, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, 1, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 1, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [1, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
]

// Global Variables
var currentDirection = rover.direction 

// Functions:  pass "rover.direction" in as the argument for currentDirection
function turnLeft(currentDirection) {
  switch (currentDirection) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }  
}

function turnRight(currentDirection){
  switch (currentDirection) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(currentDirection){
  switch (currentDirection) {
    case "N":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    case "S":
      rover.y -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
  }
}

function moveBackward(currentDirection){
  switch (currentDirection) {
    case "N":
      rover.y -= 1;
      break;
    case "W":
      rover.x += 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "E":
      rover.x -= 1;
      break;
  }
}

function command(commandString) {
  for (var i = 0; i < commandString.length; i++) {
    var commandLetter = commandString[i];
    if (commandLetter == "f" || commandLetter == "b" || commandLetter == "l" || commandLetter == "r") {
        switch(commandLetter) {
          case "f":
            moveForward(rover.direction);
            rover["travelLog"].push(rover.x + ", " + rover.y);
            break;
          case "b":
            moveBackward(rover.direction);
            rover["travelLog"].push(rover.x + ", " + rover.y);
            break;
          case "l":
            turnLeft(rover.direction);
            rover["travelLog"].push(rover.x + ", " + rover.y);
            break;
          case "r":
            turnRight(rover.direction);
            rover["travelLog"].push(rover.x + ", " + rover.y);
            break;
        }
      } else {
      console.log("command " + commandLetter + " not recognized"); 
    }
    if ((rover.y > 10 || rover.y < 0) || (rover.x > 10 || rover.x < 0)) {
      console.log("Out of bounds!");
      break;
    }
    var obstacle = testMatrix[rover.y][rover.x];
    if (obstacle == 1) {
      console.log("Obstacle encountered at coordinate " + rover.x + ", " + rover.y)
      break;
    }
  }
  console.log(rover);
}