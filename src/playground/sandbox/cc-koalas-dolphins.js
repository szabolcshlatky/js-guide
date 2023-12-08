`use strict`;

export default function koalas_dolphins() {
  /* Coding Challenge 1/3 */

  let scoreDolphins = (96 + 108 + 89) / 3;
  let scoreKoalas = (88 + 91 + 110) / 3;

  if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy with ${scoreDolphins} points!`);
  } else if (scoreKoalas >= 100 && scoreKoalas < scoreDolphins) {
    console.log(`Koalas win the trophy with ${scoreKoalas} points!`);
  } else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy 🏆`);
  } else {
    console.log(`No one wins the trophy 😢`);
  }

  scoreDolphins = (97 + 112 + 101) / 3;
  scoreKoalas = (109 + 95 + 123) / 3;

  if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy with ${scoreDolphins} points!`);
  } else if (scoreKoalas >= 100 && scoreKoalas < scoreDolphins) {
    console.log(`Koalas win the trophy with ${scoreKoalas_1} points!`);
  } else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy 🏆`);
  } else {
    console.log(`No one wins the trophy 😢`);
  }

  scoreKoalas = (109 + 95 + 106) / 3;

  if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy with ${scoreDolphins} points!`);
  } else if (scoreKoalas >= 100 && scoreKoalas < scoreDolphins) {
    console.log(`Koalas win the trophy with ${scoreKoalas} points!`);
  } else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy 🏆`);
  } else {
    console.log(`No one wins the trophy 😢`);
  }

  /* Coding Challenge 2/1 */

  const calcAverage = (a, b, c) => (a + b + c) / 3;

  const checkWinner = (calcAverage, dolphinsScores, koalasScores) => {
    const avgDolphins = calcAverage(...dolphinsScores);
    const avgKoalas = calcAverage(...koalasScores);

    if (avgDolphins >= 2 * avgKoalas) {
      return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
      return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
    } else {
      return `No team wins... (Koalas: ${avgKoalas} vs. Dolphins: ${avgDolphins})`;
    }
  };

  const data1 = checkWinner(calcAverage, [44, 23, 71], [65, 54, 49]);
  console.log(data1);
  const data2 = checkWinner(calcAverage, [85, 54, 41], [23, 34, 27]);
  console.log(data2);
}
