/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/



function distanceToNearestVowel(str) {
  let result = [];
  let leftToRight = [];
  let rightToLeft = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let flag = false;
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (!flag) {
      if (!vowels.includes(str.charAt(i))) {
        leftToRight.push(str.length - 1);
      } else {
        leftToRight.push(0);
        flag = true;
      }
    } else {
      if (!vowels.includes(str.charAt(i))) {
        leftToRight.push(++counter);
      } else {
        leftToRight.push(0);
        counter = 0;
      }
    }
  }
  flag = false;
  counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (!flag) {
      if (!vowels.includes(str.charAt(i))) {
        rightToLeft.push(str.length - 1);
      } else {
        rightToLeft.push(0);
        flag = true;
      }
    } else {
      if (!vowels.includes(str.charAt(i))) {
        rightToLeft.push(++counter);
      } else {
        rightToLeft.push(0);
        counter = 0;
      }
    }
  }

  rightToLeft.reverse();
  for (let i = 0; i < str.length; i++) {
    result.push(Math.min(leftToRight[i], rightToLeft[i]));
  }

  return result;
}

console.log(distanceToNearestVowel("bba"));

exports.solution = distanceToNearestVowel;
