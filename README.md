#Tic Tac Toe

This is a tic tac toe game. Players alternate turns and try to get three in a row. Good luck!!

Player X will go first. They will choose one square by clicking the box. It will then be player O's turn. They will choose, then back and forth until either player gets three of their letters, in a row. A row can be vertical, horizontal, or diagonal. 

The game will let you know if either player wins, or if there are no more squares open, and no winner, which results in a tie game. 

You can press the "Start new game" button to clear the board and start a new game whenever you want. 

Building the game

The first few steps to build the game, were getting a game space going and then inserting 9 boxes into that space. Using JS and iterating thru using a for loop, i was able to create 9 boxes, make them into their own div's, and then attaching/appending them to the overall div, which was the background box, the game board. These boxes then needed certain attributes. They first needed to be "clickable". Once they became clickable, i had to add many other functions to what the click would do. 

Once a box was clicked, these things had to happen:
1) Place an X or an O in the box according to whose turn it it
2) Make the box "closed" or un-clickable moving forward
3) Store the value of the square, the location, in an array for THAT player. This will be used later to check for win or tie
4) Move the "turn" to the next player
5) Change the banner to ask the other player to go

The start button also needed some functionality. It has the ability to "clear the board" and start a game new, without a page refresh. It does this by wiping the content of each box, the text, and takign giving back the event listeners to each. it resets the text to let player X know they can go first again as well. It basically rebuilds the board from scratch without needing a code or page refresh. 

This is a screenshot of the main page when the game begins.


