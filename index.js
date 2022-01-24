function isPalindrome(word) {
 
  let wordArray = word.split('')
  return wordArray.every((letter, i, wordArray) => letter === wordArray[wordArray.length - i - 1])
}




/* 
  Add your pseudocode here
*/

/*
 Split word into array to check indexes, use every to check that every index matches its opposite index
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jackaj"));
}

module.exports = isPalindrome;
