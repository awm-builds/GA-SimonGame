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
            
    
    -A Win Level Function
        -Takes in boolean from comparison func.
        -If true, continues to next level
            -Updates level counter
        -If false, trigger lose display
        -returns boolean

    Lose func.
        -When trigger, changes display:
            -You lose message
            -Triggers Play again func.

    Win game display func.
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

    intrvlDisplay func.
        -triggers lightUp func. at timed intervals
        -(wishlist) change intervals depending on level

    activeButton func.
        -triggered by intrvlDisplay or Player Click Events
        *-Lights up buttons (may need func.)
        *-triggers sound (may need a func.)
