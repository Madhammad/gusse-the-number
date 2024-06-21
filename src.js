let inputNumber = document.getElementById("input");
let SubBtn = document.getElementById("submitte");
let perNumber = document.getElementById("previousnb");
let gueRemine = document.getElementById("guessesremining");
let lowHigh = document.getElementById("lowHigh");
let startOver = document.getElementById("startover");
let hint = document.getElementById("hint");
let hintNum = document.getElementById("hintNum");
let hintComment = document.getElementsByClassName("hintcomment");

let startGame = document.getElementById("startGame");
let startBtn = document.getElementById("StartBtn");

const p = document.createElement("p");

let RN = parseInt(Math.random() * 100 + 1);
let RN1 = parseInt(Math.random() * 100 + 1);
let RN2 = parseInt(Math.random() * 100 + 1);
let RN3 = parseInt(Math.random() * 100 + 1);
let RN4 = parseInt(Math.random() * 100 + 1);
// console.log(RN);

let arr = [];
let hintArry = [RN, RN1, RN1, RN3, RN4];
// console.log(hintArry);

let numGuses = 1;
let playGame = true;

startBtn.addEventListener("click", function () {
  startGame.classList.add("hide");
});

if (playGame) {
  SubBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e);
    const gusess = parseInt(inputNumber.value);
    validateGuess(gusess);
  });
}

function validateGuess(gusess) {
  if (isNaN(gusess)) {
    alert("plz enter a number");
    inputNumber.value = "";
  } else if (gusess < 1) {
    alert("plz enter valid number");
    inputNumber.value = "";
  } else if (gusess > 100) {
    alert("plz enter less than 100");
    inputNumber.value = "";
  } else if (gusess !== RN) {
    arr.push(gusess);

    if (numGuses > 9) {
      displayGusess(gusess);
      displayMessage(`Game Over and Number was ${RN}`);
      endGame();
      newGame();
    } else {
      displayGusess(gusess);
      checkGusess(gusess);
    }
  } else {
    displayMessage(`You Win`);
    endGame();
  }
}

function checkGusess(gusess) {
  if (gusess === RN) {
    displayMessage(`You Win`);
    endGame();
  } else if (gusess < RN) {
    displayMessage(`number is low`);
  } else if (gusess > RN) {
    displayMessage(`number is high`);
  }
}
function displayGusess(gusess) {
  inputNumber.value = "";
  perNumber.innerHTML += `${gusess} ;`;
  numGuses++;
  gueRemine.innerHTML = `${11 - numGuses}`;
  hintAble(numGuses);
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  inputNumber.value = "";
  inputNumber.setAttribute("disabled", "");
  SubBtn.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGamebtn">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const NewGameBtn = document.querySelector("#newGamebtn");
  NewGameBtn.addEventListener("click", function () {
    inputNumber.removeAttribute("disabled");
    SubBtn.removeAttribute("disabled");
    RN = parseInt(Math.random() * 100 + 1);
    // hintArry = [RN, RN1, RN1, RN3, RN4];

    arr = [];
    numGuses = 1;
    perNumber.innerHTML = " ";
    gueRemine.innerHTML = `${11 - numGuses}`;
    startOver.removeChild(p);
    lowHigh.innerHTML = "";

    hint.classList.remove("disable");

    hintNum.innerHTML = 1;
    playGame = true;
  });
}
function hintAble(numGuses) {
  //   console.log(numGuses);
  //   if (numGuses > 9) {
  hint.addEventListener("click", function () {
    if (numGuses > 9) {
        hint.classList.add("disable");
      hintNum.innerHTML = hintArry;
      hintComment.classList.remove("show");
    } else {
      hint.classList.remove("disable");
      hintNum.innerHTML = 1;
      hintComment.classList.add("show");
      // hint.addEventListener("click", function () {
      //   //   alert("hammad");
    }
  });
}
