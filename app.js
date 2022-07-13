document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const messageDisplay = document.getElementById("message");
  const width = 28;
  let score = 0;

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

  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");

    switch (e.keyCode) {
      case 37:
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
        break;
      case 38:
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        break;
      case 39:
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
        break;
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        break;
    }

    squares[pacmanCurrentIndex].classList.add("pac-man");

    pacDotEaten();
    powerPelletEaten();
    checkGameOver();
    //checkForWin()
  }

  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
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
      document.removeEventListener("keyup", movePacman);
      console.log("GAME OVER");
      scoreDisplay.innerHTML = 0;
      messageDisplay.innerHTML =
        "GAME OVER you scored. \n Press the restart button to begin a new game!" +
        score;

      return true;

      //setTimeout(function () { alert("Game Over") }, 500)
    }
    return false;
  }

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
    console.log("board cleared");
    squares = [];
  }
  createBoard();

  //play button
  let play = document.getElementById("play");
  play.addEventListener("click", (e) => {
    let classes = document.getElementById("board").classList;
    if (!classes.contains("play")) {
      console.log("currently paused");
      document.addEventListener("keyup", movePacman);
      // get rid of previuos prompt message
      messageDisplay.innerHTML = "";
      // start or restart animation and pacman
      document.addEventListener("keyup", movePacman);
      window.requestAnimationFrame(moveAllGhosts);
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
      // if currently playing add pause class so request is cancelled when next attempt at animation frame occurs
      classes.remove("play");
      classes.add("pause");
      //not actually paused yet just for referece
      console.log("paused");
    }
    console.log(classes);
  });

  // restart button
  let restart = document.getElementById("restart");
  restart.addEventListener("click", (e) => {
    let classes = document.getElementById("board").classList;
    // stop pacman movement
    document.removeEventListener("keyup", movePacman);
    // if currently playing add in newGame class so request is cancelled when next attempt at animation frame occurs
    // only necessary if game is not already paused
    if (classes.contains("play")) {
      classes.remove("play");
      classes.add("newGame");
    }
    // set pacman back to start index
    pacmanCurrentIndex = 490;
    // set ghosts current index pack to start index
    ghosts.forEach((ghost) => {
      ghost.currentIndex = ghost.startIndex;
    });
    clearBoard();
    createBoard();
    // reset score
    scoreDisplay.innerHTML = "0";
    console.log("game restarted");
    console.log(classes);
  });
});
