/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

function findLongestString(arr) {
  if (arr.length === 0) {
    return null; // Or throw an error, depending on desired behavior for empty arrays
  }

  let longestString = arr[0]; // Initialize with the first string

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i]; // Update if a longer string is found
    }
  }

  return longestString.length;
}

function overlap(word1, word2) {
  let sub = "";
  for (let i = word1.length - 1; i >= 0; i--) {
    if (word2.includes(word1.substring(i))) {
      sub = word1.substring(i);
    } else {
      if (word1.endsWith(sub)) {
        return [word1 + word2.substring(sub.length, word2.length), sub.length];
      }
      return [word1 + word2, 0];
    }
  }
  return [word1 + word2, 0];
}

function join(arr) {
  let min = findLongestString(arr);
  let currentWord = arr[0];
  let currentMin;
  for (let i = 1; i < arr.length; i++) {
    [currentWord, currentMin] = overlap(currentWord, arr[i]);
    if (currentMin < min) {
      min = currentMin;
    }
  }
  return [currentWord, min];
}

console.log(join(["happy", "python", "honey", "yelp", "plank", "lanky"]));

exports.solution = join;
