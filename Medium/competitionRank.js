/*
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes
The highest score has a rank value of 1..
*/

function competitionRank(competition_rank, competitor) {
  const competitorScore = competition_rank[competitor];

  let orderedScores = [];

  // copy items to an array so they can be sorted
  for (let competitorItem in competition_rank) {
    orderedScores.push(competition_rank[competitorItem]);
  }

  orderedScores.sort((a, b) => b - a);

  let rank = 1;
  let currentScore = orderedScores[0];
  let lastIUpdated = 0;
  if (currentScore === competitorScore) {
    return rank;
  }
  for (let i = 1; i < orderedScores.length; i++) {
    if (orderedScores[i] == currentScore) {
      if (orderedScores[i] === competitorScore) {
        return rank;
      }
    } else {
      rank += i - lastIUpdated;
      lastIUpdated = i;
      currentScore = orderedScores[i];
      if (orderedScores[i] === competitorScore) {
        return rank;
      }
    }
  }

  return rank;
}

competitionRank(
  { Carson: 92, Cole: 96, Gabriel: 91, Hollie: 97, Penelope: 85 },
  "Hollie"
);

exports.solution = competitionRank;
