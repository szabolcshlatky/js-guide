`use strict`;

export default function bmi() {
  /* Coding Challenge 1/1 */

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

  /* Coding Challenge 1/2 */

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

  /* Coding Challengse 2/3 */

  const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
      this.BMI = this.mass / this.height ** 2;
      return this.BMI;
    },
  };

  const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
      this.BMI = this.mass / this.height ** 2;
      return this.BMI;
    },
  };

  const markBMI = mark.calcBMI();
  const johnBMI = john.calcBMI();

  console.log(
    `${mark.fullName}'s BMI (${markBMI}) is ${mark.BMI > john.BMI ? `higher` : `lower`} than ${
      john.fullName
    }'s (${johnBMI})!`,
  );
}
