document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
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
    ghosts.forEach((ghost) => moveGhost(ghost));
    request = requestAnimationFrame(moveAllGhosts);

    if (gameOver) {
      // stop the ghost animation if the game is paused or the game is over
      //set gameover back to false 
      cancelAnimationFrame(request);
      gameOver = false;
      console.log("Ghost animation cancelled - gameOver");
    }
    if (classes.contains("pause")) {
      cancelAnimationFrame(request);
    }
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
      letMove % 30 === 0
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
      scoreDisplay.innerHTML =
        "GAME OVER you scored \n Press the restart button to begin a new game!" +
        score;

      return true;

      //setTimeout(function () { alert("Game Over") }, 500)
    }
    return false;
  }

  function newBoard() {
    let gameEnded = gameOver;
    if (gameEnded) {
      console.log("creating new game ......");
      gameOver = false;
      clearBoard();
      createBoard();
    }
  }

  function createBoard() {
    console.log("making board...");
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);

      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
        console.log(squares[i].classList);
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

    document.addEventListener("keyup", movePacman);
    window.requestAnimationFrame(moveAllGhosts);
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
  // if GAME OVER create new board
  newBoard();

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
