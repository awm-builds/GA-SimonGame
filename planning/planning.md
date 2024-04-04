Simon Game

Win condition
    -Player selects buttons in the same pattern as CPU
    -player matches pattern ? nextLevel : lose
    -player completes all levels ? win : lose 
    -Each levels parttern is extend longer than the one prior
    until win/reset
    -Sound
    -(Wish list) A timer which button selections must be entered within per level
    -(Wish list) Pattern speed increase each level

Board
    -A circle divided in four, each a different color
    -Logically, each division will represent a number
    -Colors need to light up when CPU shows pattern & Player input
    -Sound on light up (CPU) and on click (Player)
    -Level Display
    -(Wish list) Visual Timer

CPU
    -Each section of the board represents a number
    -Logic will produce a random number of 1 through 4,
        this will loop for the specified number of times
        depending on the level.
    -The random numbers will trigger events that cue the visuals
        and sound at a timed interval, creating a pattern for the
         player to follow
    -The loop continues until the player wins all levels, loses in any level,
    or quits the game.

Player
    -Clicks start button to initiate the game
    -Watches CPU pattern
    -Display changes to indicate players turn
    -Must replicate pattern by clicking one of 4 buttons
    -When the correct sequence of buttons are entered by user,
        update to next level.
    -There will be a quit button availible once the game is in play.
    -Play again and quit buttons will be displayed if player wins game or loses. 
    -Win/lose messages will dispay when each condition is met
    -(Wishlist) A win counter until a loss or quit has been enter.
    

Game Logic Needs - Functions pseudocode

    -A Random number generator function
        -Needs to create random numbers between 1-4, including 1 & 4.
        -These numbers must be saved in an array.
        -This array must be stored for the duration of a turn
        -returns array

    -A player input function
        -References click events for button submissions
        -triggers activeButton func. onClick
        -Stores each player input (1-4) into an array.
        -returns array

    -Array comparison function
        -A function to compare CPU array with Player array.
        -boolean ? if match : if not a match.
        -if (boolean)
            true
                // might not work with boolean parent
                if (win level)
                    -win level func.
                if (win game)
                    -win game func.
            false
                -trigger lose func.
            
    
    -Win Level func.
        -Takes in boolean from comparison func.
        -If true, continues to next level
            -Updates level counter
        -If false, trigger lose display
        -returns boolean

    Lose func.
        -When trigger, changes display:
            -You lose message
            -Triggers Play again func.

    Win game func.
        -When triggered, changes display:
            -You win message
            -Triggers Play again func.

    Play again func.
        -When trigger, changes display:
            -Reveals play again button
                -if condition -> returns boolean

    New Game Func.
        -Clears values from previous game
        -Resets display to init screen

    Pattern func.
        -Takes in CPU array
        -parses each (if necessary) to trigger individually
        -displays CPU pattern
        -triggers intrvlDisplay

    intrvlDspl func. (interval display)
        -triggers lightUp func. at timed intervals
        -(wishlist) change intervals depending on level

    activeButton func.
        -triggered by intrvlDisplay or Player Click Events
        *-Lights up buttons (may need func.)
        *-triggers sound (may need a func.)


******************************************************


  /*----- constants -----
  
// text messages


// color selections
document.querySelector('#startGame').addEventListener('click', playStart);
document.querySelector('#startGame').addEventListener('click', playStart);
document.querySelector('#startGame').addEventListener('click', playStart);
document.querySelector('#startGame').addEventListener('click', playStart);

// controls
document.querySelector('#startGame').addEventListener('click', playStart);
document.querySelector('#playAgain').addEventListener('click', playAgain);
document.querySelector('#quitGame').addEventListener('click', quitGame);
  
  
  
  */


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


/*----- functions -----*/


// CPU Patter Func - Disected and build what's needed
function activateBrd(clrBtn) {
  const boardSlct = document.querySelector(/*clrBtn*/);
  const soundSlct = document.querySelector(/*soundID*/);

  boardSlct.classList.add('activated');
  soundSlct.play();

  setTimeout(() => {
    boardSlct.classList.remove('activated');
  }, 300);
}

function playLevel(livePattern) {
  livePattern.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 600);
  });
}



HTML - Work in progress


