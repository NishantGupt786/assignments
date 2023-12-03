/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removePunctuationAndSpaces(str) {
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
  let cleanStr = '';
  for (let i = 0; i < str.length; i++) {
      if (!punctuation.includes(str[i])) {
          cleanStr += str[i].toLowerCase();
      }
  }
  return cleanStr;
}

function isPalindrome(str) {
  const cleanStr = removePunctuationAndSpaces(str);

  const arr = Array.from(cleanStr);
  const revArr = arr.slice().reverse();
  const revStr = revArr.join('');

  return cleanStr === revStr;
}

module.exports = isPalindrome;
