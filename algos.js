/**
 * Create a function that counts how many r's are in a string.
 * This function must count both cases of the letter r.
 *
 * Example: problemOne("Hello World") should return 1
 *
 * @param {string} str - The string to be searched
 *
 * @returns {number} - The number of r's in the string
 */
function problemOne(sentence) {
  var count = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'r' || sentence[i] === 'R') {
      count++;
    }
  }

  return count;
}

/**
 * Create a function that takes a number and returns a string formatted with commas separating thousands.
 * Example: problemTwo(1000000) should return "1,000,000"
 *
 * @param {number} num - The number to be formatted
 *
 * @returns {string} - The number formatted with commas
 */

function problemTwo(num) {
  return num.toLocaleString();
}

/**
 * Create a function that takes two strings as inputs and returns the longest common ending.
 * This should be case insensitive.
 *
 * Example: problemThree("Hello World", "Goodbye World") should return " World"
 *
 * @param {string} str1 - The first string to be compared
 * @param {string} str2 - The second string to be compared
 *
 * @returns {string} - The longest common ending of the two strings
 */
function problemThree(stringOne, stringTwo) {
  const originalStringOne = stringOne;
  const originalStringTwo = stringTwo;
  
  stringOne = stringOne.toLowerCase();
  stringTwo = stringTwo.toLowerCase();
  let commonEnding = '';

  let i = stringOne.length - 1;
  let j = stringTwo.length - 1;

  while (i >= 0 && j >= 0) {
    if (stringOne[i] === stringTwo[j]) {
      commonEnding = originalStringOne[i] + commonEnding;
    } else {
      break;
    }
    i--;
    j--;
  }

  return commonEnding;
}
/**
 * You are at the given coordinate of a grid.
 * Given your coordinates and a cartesian coordinate of your destination,
 * return how many moves it will take to arrive, if you can only move 1 integer in any direction at a time.
 * All coordinates will be integers
 *
 * Example: problemFive([0,0], [1,1]) should return 2
 *
 * @param {number[]} start - The starting coordinate
 * @param {number[]} end - The ending coordinate
 *
 * @returns {number} - The number of moves it will take to arrive at the destination
 *
 */
function problemFour(start, end) {
  var moves;
  // Your code here

  return moves;
}

function problemFour(start, end) {
  var moves = Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1]);
  return moves;
}