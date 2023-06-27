function isPalindrome(word) {
  //Should have a function (isPalindrome) with one argument- word- expects a function
  //Function should return true if the word reads same backwards- expects a boolean
  //Should return false if it doesnt -expects boolean
  //Should use split - to get individual characters
  //should use reverse - to reverse the order of xtrs
  //should use join to comb individual xts  reversed
  return word === word.split('').reverse().join('')
}

/* 
  Function tha will receive one argument and return true if string is a palindrone  and false if not
  Should use split - to get individual characters
  should use reverse - to reverse the order of xtrs
  should use join to comb individual xts  reversed
*/

/*
 Used the given function name and argument
  used split function to split string to individual xtrs
  used reverse function to reverse the string xts
  used join to join the xtrcs into string
  used boolen to compare the reversed and original using return
*/

// Test cases
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
