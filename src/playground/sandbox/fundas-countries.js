`use strict`;

export default function countries() {
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

  /* Taking Decisions: if / else Statements */

  if (population > avgPop) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${avgPop - population} million below average`);
  }

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

  function percentageOfWorld1(population) {
    // console.log(`Function declaration`);
    return (population / 7900) * 100;
  }

  let hungaryPopPercent = percentageOfWorld1(population);
  let finlandPopPercent = percentageOfWorld1(finlandPop);
  let averagePopPercent = percentageOfWorld1(avgPop);
  let chinaPopPercent = percentageOfWorld1(1441);

  console.log(hungaryPopPercent);
  console.log(finlandPopPercent);
  console.log(averagePopPercent);
  console.log(chinaPopPercent);

  const percentageOfWorld2 = function (population) {
    console.log(`Function expression`);
    return (population / 7900) * 100;
  };

  hungaryPopPercent = percentageOfWorld2(population);
  finlandPopPercent = percentageOfWorld2(finlandPop);
  averagePopPercent = percentageOfWorld2(avgPop);
  chinaPopPercent = percentageOfWorld2(1441);
  console.log(hungaryPopPercent);
  console.log(finlandPopPercent);
  console.log(averagePopPercent);
  console.log(chinaPopPercent);

  /* Arrow Functions */

  const percentageOfWorld3 = (population) => {
    console.log(`Arrow function`);
    return (population / 7900) * 100;
  };

  hungaryPopPercent = percentageOfWorld3(population);
  finlandPopPercent = percentageOfWorld3(finlandPop);
  averagePopPercent = percentageOfWorld3(avgPop);
  chinaPopPercent = percentageOfWorld3(1441);
  console.log(hungaryPopPercent);
  console.log(finlandPopPercent);
  console.log(averagePopPercent);
  console.log(chinaPopPercent);

  /* Functions Calling Other Functions */

  const describePopulation = (country, population) => {
    console.log(`Callback function`);
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  };

  hungaryPopPercent = describePopulation(`Hungary`, population);
  finlandPopPercent = describePopulation(`Finland`, finlandPop);
  averagePopPercent = describePopulation(`Avarage populated country`, avgPop);
  chinaPopPercent = describePopulation(`China`, 1441);
  console.log(hungaryPopPercent);
  console.log(finlandPopPercent);
  console.log(averagePopPercent);
  console.log(chinaPopPercent);

  /* Introduction to Arrays */

  const populations = [population, finlandPop, avgPop, 1441];
  console.log(populations.length === 4);

  const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
  ];
  console.log(percentages);

  /* Basic Array Operations (Methods) */

  const neighbours = [`Germany`, `CzechSlovakia`, `Russia`, `Romania`, `Yugoslavia`];
  console.log(neighbours);

  console.log(neighbours.push(`Utopia`));
  console.log(neighbours.pop());

  if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central European country 😁`);
  }

  neighbours[neighbours.indexOf(`Germany`)] = `Deutschland`;
  console.log(neighbours);

  /* Introduction to Objects */

  const myCountry = {
    country,
    capital: `Budapest`,
    language,
    population,
    neighbours,
  };

  /* Dot vs. Bracket Notation */

  console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`,
  );

  myCountry.population += 2;
  console.log(myCountry.population);

  myCountry[`population`] -= 2;
  console.log(myCountry.population);

  /* Object Methods */

  myCountry.describe = function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`,
    );
  };

  myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  };

  /* Iteration: The for Loop */

  for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
  }

  /* Looping Arrays, Breaking and Continuing */

  const percentages2 = [];

  for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
  }

  console.log(percentages2);

  /* Looping Backwards and Loops in Loops */

  const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

  for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
      console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
  }

  /* The while Loop */

  const percentages3 = [];

  let i = 0;
  while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
  }

  console.log(percentages3);
}
