/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var count = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(var i=0; i<str1.length;i++) {
    count[str1.charAt(i)] = count[str1.charAt(i)] != null ? count[str1.charAt(i)] + 1 : 1;
  }
  for(var i=0; i<str2.length;i++) {
    count[str2.charAt(i)] = count[str2.charAt(i)] != null ? count[str2.charAt(i)] - 1 : -1;
  }
  console.log(count);
  for(const [key, value] of Object.entries(count)) {
    if(value != 0)
      return false;
  }
  return true;
}

module.exports = isAnagram;
