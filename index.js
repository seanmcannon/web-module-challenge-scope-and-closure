// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2? counter 1 has a nested function, counter(). It is a higher order function, it returns another function.
 *
 * 2. Which of the two uses a closure? How can you tell? Counter 1, because it has a nested function
 *  *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(runs) {
  var runs = Math.floor(Math.random() * 3);
  return runs;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numInnings) {
  let score = { Home: 0, Away: 0 };
  for (i = 0; i < numInnings; i++) {
    score.Home += inning();
    score.Away += inning();
    // console.log(score);
  }
  console.log(score);
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, numInnings2) {
  let scoreboardScore = { Home: 0, Away: 0 };
  for (i = 0; i < numInnings2; i++) {
    scoreboardScore.Home += inning();
    scoreboardScore.Away += inning();
    console.log(
      `Inning ${i + 1}: Away Team: ${scoreboardScore.Away} - Home Team: ${
        scoreboardScore.Home
      }`
    );
  }
  console.log(
    `Final Score: Away Team: ${scoreboardScore.Away} - Home Team: ${scoreboardScore.Home}`
  );
}

// score.Home += inning();
// score.Away += inning();
// }

//   let scoreboardScore = { Home: 0, Away: 0 };
//   for (i = 0; i < numInnings; i++) {
//     scoreboardScore.Home += inning();
//     scoreboardScore.Away += inning();
//   return scoreboardScore;
// }
// }


function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
