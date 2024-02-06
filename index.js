// import { user } from "./user.js"
const user = require("./user");
const readlineSync = require("readline-sync");

let boardData = {
  11: 0,
  12: 0,
  13: 0,
  21: 0,
  22: 0,
  23: 0,
  31: 0,
  32: 0,
  33: 0,
};


function printInputBoard() {
  // Loop through each row
  for (let i = 1; i <= 3; i++) {
    let str = "";
    // Loop through each column
    for (let j = 1; j <= 3; j++) {
      // Convert row and column into a single number to represent a cell
      let cell = parseInt("" + i + j);
      // Get the symbol placed on the cell from the boardData object
      let symbol = boardData[cell];
      // If the cell is empty, display the cell number instead
      if (!symbol) symbol = cell;
      // Concatenate the symbol or cell number with a separator
      str += symbol + " | ";
    }
    // Print the row
    console.log(str);
    // Print a horizontal line between rows, except for the last row
    if (i <= 2) console.log("---------------");
  }
  console.log(""); // Add an empty line after printing the board
}


function play() {
  // Prompt for user input: name and symbol for player 1
  const user1 = readlineSync.question("Enter First User name : ");
  let user1Symbol = readlineSync.keyInSelect(['O','X'],"Enter First Symbol ");
  // Prompt for user input: name and symbol for player 2
  const user2 = readlineSync.question("Enter Second User name : ");
  const user2Symbol = user1Symbol === 0 ? "X" : "O";
  user1Symbol = user1Symbol === 0 ? "O" : "X";
  // Create player objects for player 1 and player 2
  let player1 = new user(1,user1,user1Symbol);
  let player2 = new user(2,user2,user2Symbol);
  
  // Set current player to player 1
  let currentPlayer = player1
  
  // Initialize move count
  let count = 0;
  
  // Game loop
  while (true) {
    // Check if the board is full
    if (count >= 9) {
      console.log("*********   Board is full   ********");
      break;
    }
    
    // Print the current board state
    printInputBoard();
    
    // Prompt for user input: move selection
    const input = readlineSync.questionInt("Enter number: ");
    let result = [];
    
    // Check if the input is valid
    if (boardData[input] === undefined) console.log("Invalid input");
    if (boardData[input] !== 0 || boardData[input] === undefined) {
      console.log("************ Invalid move. Try again.************");
      continue;
    }
    
    // Update the board with the current player's symbol
    boardData[input]=currentPlayer.getSymbol();
    currentPlayer.addNumber(input);
    
    // Check if the current player has won
    result = currentPlayer.checkWin();
    if (result.length > 0) {
      printInputBoard();
      console.log("winner is " + currentPlayer.getName() + " with symbol "+currentPlayer.getSymbol());
      if(result.length >= 2) console.log("very good");
      console.log(result);
      break;
    }
    
    // Increment move count
    count++;
    
    // Switch to the other player
    currentPlayer = currentPlayer.getId() === 1 ? player2 : player1 
  }
  
  // Game end message
  console.log("***** Game End ****");
}


play();
