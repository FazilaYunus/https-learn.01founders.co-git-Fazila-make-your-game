// check for win !!!
// set interval to RAF *
// spacevar not pausing pacaman *
// ghosts AI
// fps
// ghost not re-entering lair *

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const messageDisplay = document.getElementById("modal-text");
  const livesDisplay = document.getElementById("lives");
  const width = 28;
  let score = 0;
  let direction = "right";
  let directionChange = false;
  var letMoveGhost = 0;
  let lives = 3;
  let livesUsed = 0;
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
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1,
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
    let num = 0;
    for (var i = 0; i < layout.length; i++) {
      if (layout[i] === 0 || layout[i] === 3) {
        num = num + 1;
      }
    }
    return num;
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

  function playAudio(audio) {
    const soundEffect = new Audio(audio);
    soundEffect.play();
  }

  function drawHearts() {
    for (var i = 0; i < lives; i++) {
      const livesDiv = document.createElement("div");
      livesDiv.classList.add("heart");
      livesDiv.setAttribute("id", "life" + (i + 1));
      livesDiv.style.display = "inline-block";
      livesDiv.style.marginLeft = "10px";
      livesDiv.style.marginBottom = "5px";
      document.getElementById("lives").appendChild(livesDiv);
      console.log(`heart ${i} added`);
    }
  }

  document.onkeyup = function (e) {
    directionChange = true;
  };

  document.onkeydown = function (e) {
    directionChange = false;
    switch (e.code) {
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
    }
  };
  let intervalUpdateState;
  let elapsed = 0;
  let gameOverP;
  let gameOver;
  let winner;
  function movePacman(time) {
    let classes = document.getElementById("board").classList;
    intervalUpdateState = requestAnimationFrame(movePacman);
    // console.log(direction);
    if (time - elapsed >= 400) {
      if (direction === "left") {
        // console.log("moving left");
        winner = moveLeft();
      } else if (direction === "up") {
        // console.log("moving up");
        moveUp();
      } else if (direction === "right") {
        moveRight();
      } else if (direction === "down") {
        moveDown();
      }
      if (winner) {
        cancelAnimationFrame(intervalUpdateState);
        console.log("Pac-Man animation cancelled - winner");
      }
      if (gameOverP) {
        cancelAnimationFrame(intervalUpdateState);

        console.log("Pac-Man animation cancelled - gameOver");
      }
      if (!classes.contains("play")) {
        cancelAnimationFrame(intervalUpdateState);
      }
      elapsed = time;
    }
  }

  function moveLeft() {
    if (direction === "left") {
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
        winner = checkForWin();
      }
    }
  }

  function moveUp() {
    if (direction === "up") {
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
        winner = checkForWin();
      }
    }
  }

  function moveRight() {
    if (direction === "right") {
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
        // gameOver = checkGameOverP();
        winner = checkForWin();
      }
    }
  }

  function moveDown() {
    if (direction === "down") {
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
        winner = checkForWin();
      }
    }
  }

  // var intervalUpdateState =setInterval(man, 350);

  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      playAudio("./sounds/munch.wav");
      score++;
      numDotsEaten++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      playAudio("./sounds/pill.wav");
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

  let request;

  function moveAllGhosts() {
    let classes = document.getElementById("board").classList;
    request = requestAnimationFrame(moveAllGhosts);
    if (winner) {
      cancelAnimationFrame(request);

      console.log("Ghost animation cancelled - Winner");
    } else if (gameOver) {
      // stop the ghost animation if the game is over
      //set gameover back to false
      // gameOver = false;
      cancelAnimationFrame(request);

      console.log("Ghost animation cancelled - gameOver");
    } else if (classes.contains("pause")) {
      classes.remove("pause");
      cancelAnimationFrame(intervalUpdateState);
      cancelAnimationFrame(request);
      // console.log(classes);
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
    letMoveGhost++;

    // ghost.timerID = setInterval(() => {

    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      letMoveGhost % 15 === 0
    ) {
      if (
        !squares[ghost.currentIndex].classList.contains("ghost-lair") &&
        squares[ghost.currentIndex + direction].classList.contains("ghost-lair")
      ) {
        // else find a new direction
        direction = directions[Math.floor(Math.random() * directions.length)];
      } else {
        //if the ghost is not about to move back into the ghost-lair
        //remove ghost from current square
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex += direction;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      }
    } else if (ghost.currentIndex - direction === 363) {
      squares[ghost.currentIndex].classList.add("ghost");
      ghost.currentIndex = 391;
      squares[364].classList.remove(ghost.className, "ghost", "scared-ghost");
    } else if (ghost.currentIndex + direction === 392) {
      squares[ghost.currentIndex].classList.add("ghost");
      ghost.currentIndex = 364;
      squares[391].classList.remove(ghost.className, "ghost", "scared-ghost");
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
      playAudio("./sounds/eat_ghost.wav");
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
      // if game hasnt ended  check game over 
      gameOver = checkGameOver();
      // asign true or false for pacman gameover as well so you dont have to call checkgameover within packman loop
      gameOverP = gameOver;
    } else {
      console.log("gameover is ", gameOver);
      console.log(livesUsed);
    }

    // }, ghost.speed);
  }

  function checkGameOver() {
    let startMessage = document.getElementById("modal-play-message").classList;
    let classes = document.getElementById("board").classList;
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      if (lives > 1) {
        lives--;
        livesUsed = livesUsed + 1;
        const element = document.getElementById("life" + livesUsed);
        element.remove();
        squares[pacmanCurrentIndex].classList.remove("pac-man");
        // send pacman back to start
        pacmanCurrentIndex = 490;
        squares[490].classList.add("pac-man");
        // send ghosts back to start
        ghosts.forEach((ghost) => {
          squares[ghost.currentIndex].classList.remove(
            `${ghost.className}`,
            "ghost"
          );
          squares[ghost.startIndex].classList.add(
            `${ghost.className}`,
            "ghost"
          );
          ghost.currentIndex = ghost.startIndex;
        });
        return false;
      } else {
        playAudio("./sounds/death.wav");
        lives--;
        const element = document.getElementById("life3");
        element.remove();
        livesDisplay.innerHTML = lives;
        //clear timer
        clearInterval(time);
        document.getElementById("safeTimerDisplay").innerHTML = "00:00";
        sec = 0;
        min = 0;
        document.removeEventListener("keyup", movePacman);
        classes.remove("play");
        console.log("GAME OVER");
        scoreDisplay.innerHTML = 0;
        messageDisplay.innerHTML = "GAME OVER! PRESS R TO BEGIN A NEW GAME";
        startMessage.remove("playing");

        return true;
      }
    }
    return false;
  }

  function checkForWin() {
    if (numDotsEaten === numOfDotsPellet) {
      scoreDisplay.innerHTML = "WINNER";
      numDotsEaten = 0;
      pacmanCurrentIndex = 490;
      score = 0;
      //clear timer
      clearInterval(time);
      document.getElementById("safeTimerDisplay").innerHTML = "00:00";
      sec = 0;
      min = 0;
      document.removeEventListener("keyup", movePacman);
      classes.remove("play");
      console.log("WINNER");
      scoreDisplay.innerHTML = 0;
      messageDisplay.innerHTML = "YOU WON! PRESS RESTART TO BEGIN A NEW GAME";
      startMessage.remove("playing");
      return true;
    }
    return false;
  }

  var sec = 0;
  var min = 0;
  var time;
  function timer() {
    time = setInterval(function () {
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (sec < 10 && min < 10) {
        document.getElementById("safeTimerDisplay").innerHTML =
          "0" + min + ":0" + sec;
      } else if (sec >= 10 && min < 10) {
        document.getElementById("safeTimerDisplay").innerHTML =
          "0" + min + ":" + sec;
      } else if (min >= 10 && sec < 10) {
        document.getElementById("safeTimerDisplay").innerHTML =
          min + ":0" + sec;
      } else {
        min + ":" + sec;
      }
      sec++;
      if (min === 60) {
        clearInterval(time);
      }
    }, 1000);
  }

  function createBoard() {
    drawHearts();
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

    messageDisplay.innerHTML = "PRESS SPACE TO START GAME";
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
  // document.addEventListener("keyup", (e) => {
  //   console.log(e.code);
  // });

  //play and pause spacebar event

  document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      let classes = document.getElementById("board").classList;
      let startMessage =
        document.getElementById("modal-play-message").classList;
      if (!classes.contains("play")) {
        console.log("currently paused");
        console.log("game over is ...", gameOver);
        //start timer
        timer();
        // get rid of previuos prompt message
        messageDisplay.innerHTML = "PRESS SPACE TO PAUSE";
        classes.add("play");
        startMessage.add("playing");
        // start or restart animation and pacman
        document.addEventListener("keyup", movePacman);
        window.requestAnimationFrame(moveAllGhosts);
        window.requestAnimationFrame(movePacman);
        console.log("playing");
        console.log(classes);
      } else if (classes.contains("play")) {
        console.log("currently playing");
        //pause timer
        clearInterval(time);
        document.removeEventListener("keyup", movePacman);
        messageDisplay.innerHTML = "PRESS SPACE TO RESUME GAME";
        startMessage.remove("playing");
        // if currently playing add pause class so request is cancelled when next attempt at animation frame occurs
        classes.remove("play");
        classes.add("pause");
        //not actually paused yet just for referece
        console.log("paused");
        console.log(classes);
      }
    }
    if (e.code === "KeyR") {
      let classes = document.getElementById("board").classList;
      let startMessage =
        document.getElementById("modal-play-message").classList;
      //clear timer
      clearInterval(time);
      document.getElementById("safeTimerDisplay").innerHTML = "00:00";
      sec = 0;
      min = 0;
      // stop pacman movement
      document.removeEventListener("keyup", movePacman);
      // if currently playing add in newGame class so request is cancelled when next attempt at animation frame occurs
      // only necessary if game is not already paused
      if (classes.contains("play")) {
        classes.remove("play");
        classes.add("newGame");
        startMessage.remove("playing");
      }
      // set pacman back to start index
      pacmanCurrentIndex = 490;
      // set ghosts current index pack to start index
      ghosts.forEach((ghost) => {
        ghost.currentIndex = ghost.startIndex;
      });
      // reset score
      scoreDisplay.innerHTML = "0";
      //reset lives
      livesUsed = 0;
      lives = 3;
      livesDisplay.innerHTML = "3";
      //reset gameover to false
      gameOver = false;
      winner = false;
      //create new board
      clearBoard();
      createBoard();

      console.log("game restarted");
      console.log(classes);
      document.activeElement.blur();
    }
  });

  // restart button
  let restart = document.getElementById("restart");
  restart.addEventListener("click", (e) => {
    let classes = document.getElementById("board").classList;
    let startMessage = document.getElementById("modal-play-message").classList;
    //clear timer
    clearInterval(time);
    document.getElementById("safeTimerDisplay").innerHTML = "00:00";
    sec = 0;
    min = 0;
    // stop pacman movement
    document.removeEventListener("keyup", movePacman);
    // if currently playing add in newGame class so request is cancelled when next attempt at animation frame occurs
    // only necessary if game is not already paused
    if (classes.contains("play")) {
      classes.remove("play");
      classes.add("newGame");
      startMessage.remove("playing");
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
    //reset lives
    livesDisplay.innerHTML = "3";
    //reset gameover to false
    gameOver = false;
    winner = false;
    console.log("game restarted");
    console.log(classes);
    document.activeElement.blur();
  });
});
