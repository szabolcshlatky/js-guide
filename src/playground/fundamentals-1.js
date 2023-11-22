export default function fundamentals_1() {
  /* Values and Variables */
  const country = `Hungary`;
  const continent = `Europe`;
  const population = 10;

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
}
