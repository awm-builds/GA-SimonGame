  /*----- constants -----*/

const playNew = new Audio;


// Objects
const winLossTexts = [
  {
    name: "win message",
    "button text": "You Win!",
  },
  {
    name: "lose message",
    "button text": "You Lose.",
  }
];

const playQuitBtns = [
  {
    name: "Play button",
    "button text": "Play",
  },
  {
    name: "Play Again button",
    "button text": "Play Again",
  },
  {
    name: "Quit Button",
    "button text": "Quit",
  }
];

const turnDspl = [
  {
    name: "CPU's turn",
    "button text": "Simon",
  },
  {
    name: "Player's turn",
    "button text": "Player"
  }
];

  /*----- state variables -----*/
let board;  // Array ref 4 color selections
let turn;  // Cur player turn --> 0/1
let winLoseSwtc;
let cpuNums = [];
let playerNums = [];
let level = 0;

  /*----- cached elements  -----*/
// text messages
const winLossText = document.querySelector("#winLossText");
const turnName = document.querySelector("#turnName");
const clrElBtns = document.querySelector("colorSlct");

// color selections
const redBtn = document.querySelector('#redBtn');
const grnBtn = document.querySelector('#grnBtn');
const bluBtn = document.querySelector('#bluBtn');
const ylwBtn = document.querySelector('#ylwBtn');

// controls
const playStartBtn = document.querySelector('#startGame');
const playAgainBtn = document.querySelector('#playAgain');
const quitGameBtn = document.querySelector('#quitGame');


  /*----- event listeners -----*/
redBtn.addEventListener('click', playSndBtn);
redBtn.addEventListener('click', addRed);
redBtn.addEventListener('click', numCompare);
grnBtn.addEventListener('click', playSndBtn);
grnBtn.addEventListener('click', addGrn);
grnBtn.addEventListener('click', numCompare);
bluBtn.addEventListener('click', playSndBtn);
bluBtn.addEventListener('click', addBlu);
bluBtn.addEventListener('click', numCompare);
ylwBtn.addEventListener('click', playSndBtn);
ylwBtn.addEventListener('click', addYlw);
ylwBtn.addEventListener('click', numCompare);

// event test
function addRed() {
  playerNums.push(0);
  console.log(playerNums);
}
function addGrn() {
  playerNums.push(1);
  console.log(playerNums);
}
 function addBlu() {
  playerNums.push(2);
  console.log(playerNums);
}
 function addYlw() {
  playerNums.push(3);
  console.log(playerNums);
 }

function playSndBtn() {
  playNew.src = 'audio/pickBtnSnd.wav';
  playNew.play();
}


/*----- functions -----*/


function init() {
  playAgainBtn.style.display = 'none';
  disableBtns();
  // render();
}

init();
/*
render(){
}
*/


function winLossFunc(winLoss) {
  if (winLoss === 'w') {
    winLossText.innerText = winLossTexts[0]["button text"];
  } else if (winLoss === 'l') {
    winLossText.innerText = winLossTexts[1]["button text"];
  } else if ('n') { 
    winLossText.innerText = '';
  }
}

playStartBtn.onclick = function () {
  startGame();
  playStartBtn.style.display = 'none';
};

// Clicking quit = You Lose, need to also unhide play again
quitGameBtn.onclick = function () {
  // quitGame();
  winLossFunc('l');
  playAgainBtn.style.display = '';
};

playAgainBtn.onclick = function () {
  winLossFunc('n');
  startGame();
  playAgainBtn.style.display = 'none';
}

function playSndBtn() {
  playNew.src = 'audio/pickBtnSnd.wav';
  playNew.play();
}



// Test Iteration Func
const boardSlcts = [0, 1, 2, 3];
let gamePattern = [];
let userClickedPattern = [];

const numGen = Math.floor(Math.random() * 4);

let difLvl = Math.floor(Math.random()*4)+4;

function livePattern() {
  for (i = 0; i < difLvl; i++) {
    const numGen = Math.floor(Math.random() * 4);
    let randomBtn = boardSlcts[numGen];
    gamePattern.push(randomBtn);
  }
    return gamePattern;
}

const cpuFuncPic = [
  redAct,
  grnAct,
  bluAct,
  ylwAct
];


function redAct() { 
  lightUp(redBtn);
  playSndBtn();
  console.log('Red Works!');
}
function grnAct() { 
  lightUp(grnBtn);
  playSndBtn();
  console.log('Green Works!');
}
function bluAct() { 
  lightUp(bluBtn);
  playSndBtn();
  console.log('Blue Works!');
}
function ylwAct() { 
  lightUp(ylwBtn);
  playSndBtn();
  console.log('Yellow Works!');
}

function startGame() {
  disableBtns();
  playAgainBtn.setAttribute('disabled', true);
  playAgainBtn.style.opacity = .2;
  turn = true;
  gameTurn(turn);
  playerNums = [];
  gamePattern = [];
  cpuNums = [];
  // livePattern() creates CPU pattern and stores array value in cpuNums
  livePattern();
  cpuNums = gamePattern;
  // Test Iteration
  // Returns a Promise that resolves after "ms" Milliseconds
  const timer = ms => new Promise(res => setTimeout(res, ms))
  // Start Level - Triggers the CPU's turn, calls functions from an array on each interval
  async function startLevel() {
    for (i = 0; i < gamePattern.length; i++) {
      cpuFuncPic[gamePattern[i]]();
      await timer(1000);
    }
    playAgainBtn.style.opacity = 1;
    playAgainBtn.disabled = false;
    turn = false;
    enableBtns();
    gameTurn(turn);
  }
  startLevel();
  
}

// Test set interval
function lightUp(btn) {
  const btnFlash = setInterval(function() {
    btn.style.opacity = 1;
    const timerID = setTimeout(function() {
      btn.style.opacity = 0.3;
    }, 600);
      clearInterval(btnFlash);
    }, 400);
}

console.log(cpuNums);

if (cpuNums.length == playerNums.length) {
  if (cpuNums == playerNums) {
    winLoseSwtc = 'w';
    console.log('You won!');
  } else {
    winLoseSwtc = 'l';
    console.log('You lose.');
  }
}

console.log('CPU Length: ' + cpuNums.length);


function gameTurn(turnVal) { 
  if (turnVal === true) {
    // change turn text: CPU
    turnName.innerText = turnDspl[0]["button text"];
  } else if (turnVal === false) {
    // change turn text: Player
    turnName.innerText = turnDspl[1]["button text"];
  }

}

function disableBtns() { 
  redBtn.setAttribute('disabled', true);
  grnBtn.setAttribute('disabled', true);
  bluBtn.setAttribute('disabled', true);
  ylwBtn.setAttribute('disabled', true);
}

function enableBtns() { 
  redBtn.disabled = false;
  grnBtn.disabled = false;
  bluBtn.disabled = false;
  ylwBtn.disabled = false;
}

// Compare two arrays, cpu and player pick
function numCompare() {
  if (cpuNums.length === playerNums.length) {
    disableBtns();
    if (JSON.stringify(cpuNums) == JSON.stringify(playerNums)) {
      console.log('numCompare true');
      winLossFunc('w');
    } else if (JSON.stringify(cpuNums) != JSON.stringify(playerNums)){
      winLossFunc('l');
    }
  }
}