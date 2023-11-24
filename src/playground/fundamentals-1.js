`use strict`;

export default function fundamentals_1() {
  /* Values and Variables */
  const country = `Hungary`;
  const continent = `Europe`;
  let population = 10;

  console.log(country, continent, population);

  /* Data Types */
  const isIsland = false;
  let language;

  console.log(typeof isIsland, typeof population, typeof country, typeof language);

  /* let, const and var */
  language = `Hungarian`;

  /* Basic Operators */
  const halfPop = population / 2;
  console.log(halfPop);

  const halfPopPlus1 = halfPop + 1;
  console.log(halfPopPlus1);

  const finlandPop = 6;
  const comparePop = halfPopPlus1 > finlandPop;
  console.log(finlandPop, comparePop);

  const avgPop = 33;
  const compareAvgPop = halfPopPlus1 > avgPop;
  console.log(avgPop, compareAvgPop);

  let description = country + ` is in ` + continent + `, and its ` + population + ` million people speak ` + language;
  console.log(description);

  /* Strings and Template Literals */
  description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
  console.log(description);

  /* Coding Challenge 1 */
  const massMark_1 = 78; // kg
  const heightMark_1 = 1.69; // meters
  const massJohn_1 = 92;
  const heightJohn_1 = 1.95;

  const BMIMark_1 = massMark_1 / heightMark_1 ** 2;
  const BMIJohn_1 = massJohn_1 / heightJohn_1 ** 2;

  const markHigherBMI_1 = BMIMark_1 > BMIJohn_1;

  console.log(BMIMark_1, BMIJohn_1, markHigherBMI_1);

  const massMark_2 = 95;
  const heightMark_2 = 1.88;
  const massJohn_2 = 85;
  const heightJohn_2 = 1.76;

  const BMIMark_2 = massMark_2 / (heightMark_2 * heightMark_2);
  const BMIJohn_2 = massJohn_2 / (heightJohn_2 * heightJohn_2);

  const markHigherBMI_2 = BMIMark_2 > BMIJohn_2;

  console.log(BMIMark_2, BMIJohn_2, markHigherBMI_2);

  /* Taking Decisions: if / else Statements */

  if (population > avgPop) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${avgPop - population} million below average`);
  }

  /* Coding Challenge 2 */

  if (BMIMark_1 > BMIJohn_1) {
    console.log(`Mark's BMI (${BMIMark_1}) is higher than John's (${BMIJohn_1})!`);
  } else {
    console.log(`John's BMI (${BMIJohn_1}) is higher than Mark's (${BMIMark_1})!`);
  }

  if (BMIMark_2 > BMIJohn_2) {
    console.log(`Mark's BMI (${BMIMark_2}) is higher than John's (${BMIJohn_2})!`);
  } else {
    console.log(`John's BMI (${BMIJohn_2}) is higher than Mark's (${BMIMark_2})!`);
  }

  /* Type Conversion and Coercion */

  console.log(
    '9' - '5', // Prediction: 4
    '19' - '13' + '17', // Prediction: '617'
    '19' - '13' + 17, // Prediction: 23
    '123' < 57, // Prediction: false
    5 + 6 + '4' + 9 - 4 - 2, // Prediction: 1143
  );

  /* Equality Operators: == vs. === */

  const numNeighbours = 1; // prompt(`How many neighbour countries does your country have? (1-9)`);

  if (numNeighbours == 1) {
    console.log(`Only 1 border!`);
  } else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
  } else {
    console.log(`No borders`);
  }

  if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
  } else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
  } else {
    console.log(`No borders`);
  }

  if (Number(numNeighbours) === 1) {
    console.log(`Only 1 border!`);
  } else if (Number(numNeighbours) > 1) {
    console.log(`More than 1 border`);
  } else {
    console.log(`No borders`);
  }

  console.log(`Type conversion with '===' makes the code more secure and understandable.`);

  /* Logical Operators */

  if (language === `English` && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
  } else {
    console.log(`${country} does not meet your criteria :(`);
  }

  /* Coding Challenge 3 */

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

  /* The switch Statement */

  switch (language) {
    case `Chinese`:
    case `Mandarin`:
      console.log(`MOST number of native speakers!`);
      break;
    case `Spanish`:
      console.log(`2nd place in number of native speakers`);
      break;
    case `English`:
      console.log(`3rd place`);
      break;
    case `Hindi`:
      console.log(`Number 4`);
      break;
    case `Arabic`:
      console.log(`5th most spoken language`);
      break;
    default:
      console.log(`Great language too :D`);
  }

  /* The Conditional (Ternary) Operator */

  population = 13;
  console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`);

  population = 130;
  console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`);

  population = 10;
  console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`);

  /* Coding Challenge 4 */

  let bill = 275;
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  bill = 40;
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  bill = 430;
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  /* Functions */

  function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }

  const hungary = describeCountry(country, population, `Budapest`);
  console.log(hungary);

  const finland = describeCountry(`Finland`, 6, `Helsinki`);
  console.log(finland);

  const portugal = (`Portugal`, 10, `Lisbon`);
  console.log(portugal);

  /* Function Declarations vs. Expressions */
}
