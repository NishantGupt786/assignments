/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr1 = Array.from(str1.toLowerCase());
  let arr2 = Array.from(str2.toLowerCase());
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  if (arr1.length === 0 || arr2.length === 0) {
    return true;
  }
  if (arr2.includes(arr1) || arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram('hello', 'hello!'));
module.exports = isAnagram;
