const index= require('../index');

// Mock readline module

describe('test', () => {
  beforeEach(() => {
    jest.spyOn(index, 'play').mockImplementation(() =>  `
    p
    X
    p2
    11

    `)
  })
})

describe('printInputBoard function', () => {
  
  test('should print the current board state', () => {
    // Mock console.log
    console.log = jest.fn();

    // Call the function
    printInputBoard();

    // Check if console.log has been called with expected output
    expect(console.log).toHaveBeenCalledTimes(14); // Expecting 14 calls to console.log
    // Add more specific checks if needed
  });
});

describe('play function', () => {
  test('should correctly handle game logic', () => {

    // Call the function
    // play().mockResolvedValueOnce();

    // Add assertions for the expected behavior
    // For example, you can expect certain console.log outputs or mock the user object to check its properties after the game.
  });
});
