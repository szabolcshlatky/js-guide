`use strict`;

export default function bills_tips() {
  /* Coding Challenge 1/4 */

  let bill = 275;
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  bill = 40;
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  bill = 430;
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

  /* Coding Challenge 2/2 */

  const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
  console.log(calcTip(100));

  let bills = [125, 555, 44];

  let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

  let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

  console.log(bills, tips, total);

  /* Coding Challenge 2/4 */

  bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  tips = [];
  total = [];

  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
  }

  const calcAverage = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  };

  console.log(calcAverage(total));
}
