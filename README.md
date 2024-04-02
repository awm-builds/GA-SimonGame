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
    -Must replicate pattern by clicking one of 4 buttons
    -

