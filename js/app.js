
//declare some to star
const board = document.querySelector('.container')
const startNew = document.querySelector('#newGame')
const turn = document.querySelector('.whoseTurn')

// make empty arrays for each player. this will hold their choice on their turn. 
let playerXChoice = []
let playerOChoice = []

//check the array. need to first check for a tie, basically if all squares are full, its a tie
//then if not all are full, check for patterns for a win
// what are all the winning combos. right to left. top to bottom. diagonal
// wins. sq1, sq2, sq3  --  sq4, sq5, sq6 - sq7, sq8, sq9 -- in any order
// wins. sq1, sq4, sq7  --  sq2, sq5, sq8 - sq3, sq6, sq9 -- in any order
// wins. sq1, sq5, sq9  --  sq3, sq5, sq7 -- in any order
// if either player has any of these combos, they win, no matter what. example, cant have them late in game and tie. so. build array with these combos. then check each players array, against this "winning" array, every time. if you get a hit, game over

const winCombos = [
    ['sq1', 'sq2', 'sq3'],
    ['sq4', 'sq5', 'sq6'],
    ['sq7', 'sq8', 'sq9'],
    ['sq1', 'sq4', 'sq7'],
    ['sq2', 'sq5', 'sq8'],
    ['sq3', 'sq6', 'sq9'],
    ['sq1', 'sq5', 'sq9'],
    ['sq3', 'sq5', 'sq7']
]
// to check, can loop thru winCombos first, check one by one if an element is IN the players array. if it is, then check the next one. if it isnt, then move on. from stack overflow, trying to use "all found" from my wincombo array over my player arrays

const checkForWin = () => {
    for (let i = 0; i < 10; i++) {
        const resultX = winCombos[i].every(val => playerXChoice.includes(val));
        const resultO = winCombos[i].every(val => playerOChoice.includes(val));
        if (resultX === true) {
         console.log('player X wins')
         turn.textContent = "PLAYER X WINS!!!!"
         
         closeSquares()
         
    }   else if (resultO === true)  {
         console.log('player O wins')
         turn.textContent = "PLAYER O WINS!!!!"
         closeSquares()
         
    }   else if ((playerXChoice.length) === 5) {
         
         console.log('no one wins , its a tie')
         turn.textContent = "ITS A TIE!!!!"
    }
}
}

// make function to put an X in a box
// its going to look for the target (click) event, then place an X in that box that was the target of that click. it should know X b/c of the player whose turn it is
//trying event instead of loc
const drawX = (event) => {   
    // console.log('x function runs' + event)
    event.target.textContent = 'X';   
    // make somethitng to find the squares that get clicked, to kill them
    const deadSquare = document.getElementById(event.target.id)
    deadSquare.removeEventListener('click',takeTurns)
}
//same for O
const drawO = (event) => {   
    // console.log('o function runs')
    event.target.textContent = 'O';
    const deadSquare = document.getElementById(event.target.id)
    deadSquare.removeEventListener('click',takeTurns)
}
// need function to turn off the event listener of all squares if someone wins
// then can insert that into the check for win function
const closeSquares = () => {
    for (let i = 1; i<= 9; i++) {
        const getSquares = document.getElementById('sq' + i)
        getSquares.removeEventListener('click', takeTurns)
    }
}
//make a function to grab the location "name" of the clicked box, like sq1, sq2, etc
//using event.target.id to get square location

//put takeTurns here, before make board is called, but earlier than its called in make board
// put counter outside of the function so it starts at 2 then goes up in function
counter = 2
const takeTurns = (event) => { 
    
    // go even/odd to take turns, player one(even) goes first
    //counter might need to be 10. not sure. depends on click
    if (counter === 11) {
        // if 9 turns are taken, say game is over
        console.log('board full game over')
        turn.textContent = 'GAME OVER'
    } else if ((counter % 2) === 0) {
        console.log('in the for loop, even number')
        //text needs to be one turn in front of the click, so its opposite
        turn.textContent = "O - It's Your Turn"
        //put the text in the box
        drawX(event)
        //push the square choice into the array
        playerXChoice.push(event.target.id)
        console.log(playerXChoice)
        counter = counter + 1
        // dont need to check for win till now, its impossible till now
        if (counter > 5) {
            checkForWin()
        }
        
    // player two(odd) goes second
    } else if ((counter % 2) !== 0) {
        console.log('in the for loop, odd number')
        turn.textContent = "X - It's Your Turn"
        drawO(event)
        playerOChoice.push(event.target.id)
        console.log(playerOChoice)
        counter = counter + 1
        if (counter > 5) {
            checkForWin()
        }
    }         
}

// lets make the board
const makeBoard = () => {
    //remove boxes
    while (board.firstChild) {
        board.removeChild(board.firstChild)
    }
    //clear the player arrays
    playerOChoice.length = 0
    playerXChoice.length = 0
    //bring counter back to start , which is 2
    counter = 2

    //create 9 squares (divs)
    //append them to the container div
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement('div')
        square.classList.add("gameBoard")
        square.setAttribute('id','sq' + i)
        //starting text
        turn.textContent = 'Player X starts'
        //square.setAttribute('onClick', "reply_click(this.id)")
        board.appendChild(square)
        
        /// what happens on a click, add the listener here
        square.addEventListener('click', takeTurns)
    }
}
makeBoard()

// Declare some variables to get to certain objects
const sq1 = document.querySelector('#sq1')
const sq2 = document.querySelector('#sq2')
const sq3 = document.querySelector('#sq3')
const sq4 = document.querySelector('#sq4')
const sq5 = document.querySelector('#sq5')
const sq6 = document.querySelector('#sq6')
const sq7 = document.querySelector('#sq7')
const sq8 = document.querySelector('#sq8')
const sq9 = document.querySelector('#sq9')


// do i need this?????
// document.addEventListener('DOMContentLoaded', () => {
//     makeBoard()
// })


// for the start button, build the board
startNew.addEventListener('click', makeBoard)









