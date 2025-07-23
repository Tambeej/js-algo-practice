/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, 
and returns the team name with the highest number of points. 
If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions(champions) {
  let maxTeam = champions[0].name;
  let maxPointes = 0;
  let maxDiff = 0;
  let currentScore = 0;
  let currentDiff = 0;
  for (let team of champions) {
    currentScore += team.wins * 3 + team.draws;
    currentDiff = team.scored - team.conceded;
    if (currentScore > maxPointes) {
      maxPointes = currentScore;
      maxTeam = team.name;
      maxDiff = currentDiff;
    } else if (currentScore == maxPointes && maxDiff < currentDiff) {
      maxTeam = team.name;
      maxDiff = currentDiff;
    }
    currentDiff = 0;
    currentScore = 0;
  }
  return maxTeam;
}

exports.solution = champions;
