document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const messageDisplay = document.getElementById("message");
  const width = 28;
  let score = 0;
  let direction = 'right';
  let directionChange = false;

  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  //Legend
  //0 = pac dot
  //1 = wall
  //2 = ghost lair
  //3 = power-pellet
  //4 = empty

  const numOfDotsPellet = (function countDotsPellet() {
    let num = 0
    for (var i = 0; i < layout.length; i++) {
      if (layout[i] === 0 || layout[i] === 3) {
        num = num + 1;
      }
    }
    return num
  })();

  let numDotsEaten = 0;
  let squares = [];
  let pacmanCurrentIndex = 490;
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerID = NaN;
      this.isScared = false;
    }
  }

  let ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500),
  ];

  function createBoard() {
    console.log("making board...");
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);

      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }

    squares[490].classList.add("pac-man");

    ghosts.forEach((ghost) => {
      squares[ghost.startIndex].classList.add(ghost.className, "ghost");
    });
    console.log("Orignal ghost info---", ghosts);

    messageDisplay.innerHTML = "PRESS PLAY TO START";
  }

  function clearBoard() {
    let board = document.querySelector(".grid");
    let grid = Array.from(board.querySelectorAll("div"));
    grid.forEach((div) => {
      board.removeChild(div);
    });
    squares = [];
  }

  function playAudio(audio) {
    const soundEffect = new Audio(audio);
    soundEffect.play();
  }

  document.onkeyup = function (e) {
    console.log(directionChange);
    directionChange = true;
    console.log(directionChange);
  }

  document.onkeydown = function (e) {
    directionChange = false;
    switch (e.keyCode) {
      case 37:
        direction = 'left';
        break;
      case 39:
        direction = 'right';
        break;
      case 38:
        direction = 'up';
        break;
      case 40:
        direction = 'down';
        break;
      default:
        alert('Invalid key pressed');
        break;
    }
  }

  function movePacman() {
    console.log(direction);
    if (direction === 'left') {
      console.log('moving left');
      moveLeft();
    } else if (direction === 'up') {
      console.log('moving up');
      moveUp();
    } else if (direction === 'right') {
      moveRight();
    } else if (direction === 'down') {
      moveDown();
    }
  }

  function moveLeft() {
    if (direction === 'left') {
      squares[pacmanCurrentIndex].classList.remove("pac-man");
      if (directionChange === true) {
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= 1;

        if (pacmanCurrentIndex - 1 === 363) {
          squares[pacmanCurrentIndex].classList.add("pac-man");
          pacmanCurrentIndex = 391;
          squares[364].classList.remove("pac-man");
        }

        squares[pacmanCurrentIndex].classList.add("pac-man");
        document.querySelector(".pac-man").style.transform = "rotate(180deg)";

        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkForWin();

      }
    }
  }

  function moveUp() {
    if (direction === 'up') {
      squares[pacmanCurrentIndex].classList.remove("pac-man");
      if (directionChange === true) {
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;

        squares[pacmanCurrentIndex].classList.add("pac-man");
        document.querySelector(".pac-man").style.transform = "rotate(270deg)";

        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkForWin();
      }
    }
  }

  function moveRight() {
    if (direction === 'right') {
      squares[pacmanCurrentIndex].classList.remove("pac-man");
      if (directionChange === true) {
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;

        if (pacmanCurrentIndex + 1 === 392) {
          squares[pacmanCurrentIndex].classList.add("pac-man");
          pacmanCurrentIndex = 364;
          squares[391].classList.remove("pac-man");
        }

        squares[pacmanCurrentIndex].classList.add("pac-man");
        document.querySelector(".pac-man").style.transform = "rotate(360deg)";

        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkForWin();
      }
    }
  }

  function moveDown() {
    if (direction === 'down') {
      squares[pacmanCurrentIndex].classList.remove("pac-man");
      if (directionChange === true) {
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;

        squares[pacmanCurrentIndex].classList.add("pac-man");
        document.querySelector(".pac-man").style.transform = "rotate(90deg)";

        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkForWin();
      }
    }
  }

  var intervalUpdateState = setInterval(movePacman, 200);

  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      playAudio('./sounds/munch.wav');
      score++;
      numDotsEaten++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      playAudio('./sounds/pill.wav');
      score += 10;
      numDotsEaten++;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  var letMove = 0;
  let request;
  let gameOver;

  function moveAllGhosts() {
    let classes = document.getElementById("board").classList;
    request = requestAnimationFrame(moveAllGhosts);
    if (gameOver) {
      // stop the ghost animation if the game is over
      //set gameover back to false
      gameOver = false;
      cancelAnimationFrame(request);

      console.log("Ghost animation cancelled - gameOver");
    }
    if (classes.contains("pause")) {
      classes.remove("pause");
      cancelAnimationFrame(request);
      messageDisplay.innerHTML = "PAUSED";
      console.log(classes);
    } else if (classes.contains("newGame")) {
      classes.remove("newGame");
      cancelAnimationFrame(request);
      console.log("game Paused");
    }

    ghosts.forEach((ghost) => moveGhost(ghost));
    //creates a request for new frame each time one is made
  }

  function moveGhost(ghost) {
    //ghost movement increments
    const directions = [-1, +1, width, -width];
    // make movement choice random
    let direction = directions[Math.floor(Math.random() * directions.length)];
    letMove++;

    // ghost.timerID = setInterval(() => {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      letMove % 15 === 0
    ) {
      //if the ghost is not about to move into a wall or another ghost
      //remove ghost from current square
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      // move ghost by adding direction to index and adding ghost class to that square
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    } else {
      // else find a new direction
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    if (ghost.isScared) {
      // add scared class to new square if ghost was previously scared
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pac-man")
    ) {
      playAudio('./sounds/eat_ghost.wav');
      // if a ghost is in the same square as pacman while scares remove the ghost
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );
      //send ghost back to start index
      ghost.currentIndex = ghost.startIndex;
      // add to score
      score += 100;
      // add ghost class to start square
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }
    // returns true or false
    if (!gameOver) {
      gameOver = checkGameOver();
    }

    // }, ghost.speed);
  }
  function checkGameOver() {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      playAudio('./sounds/death.wav');
      ghosts.forEach((ghost) => clearInterval(ghost.timerID));
      document.removeEventListener("keyup", movePacman);
      scoreDisplay.innerHTML = "GAME OVER you scored " + score;
      clearBoard();
      createBoard();
      numDotsEaten = 0;
      pacmanCurrentIndex = 490;
      return true;
    }
    return false;
  }

  function checkForWin() {
    if (numDotsEaten === numOfDotsPellet) {
      scoreDisplay.innerHTML = "WINNER";
      clearBoard();
      createBoard();
      numDotsEaten = 0;
      pacmanCurrentIndex = 490;
      score = 0;
      return true;
    }
    return false;
  }

  createBoard();
  //document.addEventListener("keyup", movePacman);
  window.requestAnimationFrame(moveAllGhosts);
  //play button
  let play = document.getElementById("play");
  play.addEventListener("click", (e) => {
    let classes = document.getElementById("board").classList;
    if (classes.contains("pause")) {
      console.log("currently paused");
      document.addEventListener("keyup", movePacman);
      window.requestAnimationFrame(moveAllGhosts);
      classes.remove("pause");
      classes.add("play");
      console.log("playing");
    }
    console.log(classes);
  });
  //pause button
  let pause = document.getElementById("pause");
  pause.addEventListener("click", (e) => {
    let classes = document.getElementById("board").classList;
    if (classes.contains("play")) {
      console.log("currently playing");
      document.removeEventListener("keyup", movePacman);
      window.cancelAnimationFrame(moveAllGhosts);
      classes.remove("play");
      classes.add("pause");
      console.log("paused");
    }
    console.log(classes);
  });
  // restart button // create board not working
  let restart = document.getElementById("restart");
  restart.addEventListener("click", (e) => {
    window.cancelAnimationFrame(moveAllGhosts);
    clearBoard();
    createBoard();
  });
});
