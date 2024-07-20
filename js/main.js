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

const boardSlcts = [0, 1, 2, 3];
const numGen = Math.floor(Math.random() * 4);
const difLvl = Math.floor(Math.random()*4)+4;

  /*----- state variables -----*/
let turn;
let winLoseSwtc;
let cpuNums = [];
let playerNums = [];
let gamePattern = [];
let userClickedPattern = [];

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
redBtn.addEventListener('click', redLitUp);
grnBtn.addEventListener('click', playSndBtn);
grnBtn.addEventListener('click', addGrn);
grnBtn.addEventListener('click', numCompare);
grnBtn.addEventListener('click', grnLitUp);
bluBtn.addEventListener('click', playSndBtn);
bluBtn.addEventListener('click', addBlu);
bluBtn.addEventListener('click', numCompare);
bluBtn.addEventListener('click', bluLitUp);
ylwBtn.addEventListener('click', playSndBtn);
ylwBtn.addEventListener('click', addYlw);
ylwBtn.addEventListener('click', numCompare);
ylwBtn.addEventListener('click', ylwLitUp);

/*----- functions -----*/

// initiate
function init() {
  playAgainBtn.style.display = 'none';
  quitGameBtn.style.display = 'none';
  disableBtns();
}

init();

// Player input
function addRed() {
  playerNums.push(0);
}
function addGrn() {
  playerNums.push(1);
}
 function addBlu() {
  playerNums.push(2);
}
 function addYlw() {
  playerNums.push(3);
 }

function playSndBtn() {
  playNew.src = 'audio/pickBtnSnd.wav';
  playNew.play();
}

function winLossFunc(winLoss) {
  if (winLoss === 'w') {
    winLossText.innerText = winLossTexts[0]["button text"];
    quitGameBtn.style.display = 'none';
    playAgainBtn.style.display = '';
  } else if (winLoss === 'l') {
    quitGameBtn.style.display = 'none';
    playAgainBtn.style.display = '';
    winLossText.innerText = winLossTexts[1]["button text"];
  } else if ('n') { 
    winLossText.innerText = '';
  }
}

// Game start/quit controls
playStartBtn.onclick = function () {
  startGame();
  playStartBtn.style.display = 'none';
};

quitGameBtn.onclick = function () {
  winLossFunc('l');
  playAgainBtn.style.display = '';
  quitGameBtn.style.display = 'none';
};

playAgainBtn.onclick = function () {
  winLossFunc('n');
  startGame();
  playAgainBtn.style.display = 'none';
}

// creates CPU pattern
function livePattern() {
  for (i = 0; i < difLvl; i++) {
    const numGen = Math.floor(Math.random() * 4);
    let randomBtn = boardSlcts[numGen];
    gamePattern.push(randomBtn);
  }
    return gamePattern;
}

// Array of Player Input Func
const cpuFuncPic = [
  redAct,
  grnAct,
  bluAct,
  ylwAct
];

// Player Input Func
function redAct() { 
  lightUp(redBtn);
  playSndBtn();
}
function grnAct() { 
  lightUp(grnBtn);
  playSndBtn();
}
function bluAct() { 
  lightUp(bluBtn);
  playSndBtn();
}
function ylwAct() { 
  lightUp(ylwBtn);
  playSndBtn();
}

// starGame - play/playAgain logic
function startGame() {
  disableBtns();
  playAgainBtn.disabled = true;
  playAgainBtn.style.opacity = .2;
  quitGameBtn.style.display = '';
  turn = true;
  gameTurn(turn);
  playerNums = [];
  gamePattern = [];
  cpuNums = [];
  // livePattern() creates CPU pattern and stores array value in cpuNums
  livePattern();
  cpuNums = gamePattern;
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

// Button light up func
function lightUp(btn) {
  const btnFlash = setInterval(function() {
    btn.style.opacity = 1;
    const timerID = setTimeout(function() {
      btn.style.opacity = 0.3;
    }, 600);
      clearInterval(btnFlash);
    }, 400);
}

// Red button light up click  func
function redLitUp() {
  const btnFlash = setInterval(function() {
    redBtn.style.opacity = 1;
    const timerID = setTimeout(function() {
      redBtn.style.opacity = 0.3;
    }, 400);
      clearInterval(btnFlash);
    }, 200);
}

// Green button light up click  func
function grnLitUp() {
  const btnFlash = setInterval(function() {
    grnBtn.style.opacity = 1;
    const timerID = setTimeout(function() {
      grnBtn.style.opacity = 0.3;
    }, 400);
      clearInterval(btnFlash);
    }, 200);
}

// Blue button light up click  func
function bluLitUp() {
  const btnFlash = setInterval(function() {
    bluBtn.style.opacity = 1;
    const timerID = setTimeout(function() {
      bluBtn.style.opacity = 0.3;
    }, 400);
      clearInterval(btnFlash);
    }, 200);
}

// Yellow button light up click  func
function ylwLitUp() {
  const btnFlash = setInterval(function() {
    ylwBtn.style.opacity = 1;
    const timerID = setTimeout(function() {
      ylwBtn.style.opacity = 0.3;
    }, 400);
      clearInterval(btnFlash);
    }, 200);
}

// Game Turn func
function gameTurn(turnVal) { 
  if (turnVal === true) {
    turnName.innerText = turnDspl[0]["button text"];
  } else if (turnVal === false) {
    turnName.innerText = turnDspl[1]["button text"];
  }
}

// Disable Player Color Select Buttons
function disableBtns() { 
  redBtn.disabled = true;
  grnBtn.disabled = true;
  bluBtn.disabled = true;
  ylwBtn.disabled = true;
}

// Enable Player Color Select Buttons
function enableBtns() { 
  redBtn.disabled = false;
  grnBtn.disabled = false;
  bluBtn.disabled = false;
  ylwBtn.disabled = false;
}

// Compare CPU & Player Arrays - return win/loss
function numCompare() {
  if (cpuNums.length === playerNums.length) {
    disableBtns();
    if (JSON.stringify(cpuNums) == JSON.stringify(playerNums)) {
      winLossFunc('w');
    } else if (JSON.stringify(cpuNums) != JSON.stringify(playerNums)){
      winLossFunc('l');
    }
  }
}