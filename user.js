class user {
  // Object to keep track of positions where the user has placed their symbols
  winObj = {
    x1: [],
    x2: [],
    x3: [],
    y1: [],
    y2: [],
    y3: [],
    c1: [], 
    c2: [], 
  };
  
  id; // Player ID
  name = ""; // Player name
  symbol = ""; // Player symbol (e.g., X or O)
  c2 = [13, 22, 31]; // Positions of the secondary diagonal

  // Constructor to initialize the player with ID, name, and symbol
  constructor(id, name, symbol) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
  }

  // Method to add a position to the user's winning combinations
  addNumber(num) {
    let x = Math.floor(num / 10); // Get the row number
    let y = num % 10; // Get the column number
    this.winObj["x" + x].push(num); // Add the position to the corresponding row array
    this.winObj["y" + y].push(num); // Add the position to the corresponding column array
    if (x === y) this.winObj["c1"].push(num); // Add the position to the main diagonal if it's on it
    if (this.c2.includes("" + x + y)) this.winObj["c2"].push(num); // Add the position to the secondary diagonal if it's on it
  }

  // Method to check if the user has won
  checkWin() {
    let result = [];
    for (let i of Object.keys(this.winObj)) {
      if (this.winObj[i].length >= 3) result.push(this.winObj[i]); // Check if any winning combination has at least 3 positions
    }
    return result;
  }

  // Getter method to get the user's name
  getName() {
    return this.name;
  }

  // Getter method to get the user's symbol
  getSymbol() {
    return this.symbol;
  }

  // Getter method to get the user's ID
  getId() {
    return this.id;
  }
}


module.exports = user;
