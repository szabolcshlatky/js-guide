`use strict`;

export default function conditionals() {
  /* if/else conditional statements */

  const age = 30;

  if (age > 21) {
    console.log(`You can drink alcohol internationally!`);
  } else if (age >= 18) {
    console.log(`You can get marry in Hungary!`);
  } else {
    console.log(`You can't drink alcohol & marry yet!`);
  }

  /* Ternary operator expressions */

  age <= 18 ? console.log(`You can't drive yet!`) : console.log(`You can drive!`);

  /* Logical operators */

  const password = `p@ss12`;
  let pattern = /^[a-zA-Z0-9]{6,18}$/;

  if (password.length >= 18 && pattern.test(password)) {
    console.log(`That password is mighty strong!`);
  } else if (password.length >= 8 || (pattern.test(password) && password.length > 5)) {
    console.log(`That password is strong enough!`);
  } else if (!password) {
    console.log(`Please give me a password!`);
  } else {
    console.log(`That password is not strong enough! But at least is better:
      than null (${password ?? null})
      or undefined (${undefined ?? password})!
    `);
  }

  /* Switch statement */

  const today = new Date().getDay();

  switch (today) {
    case 0:
      console.log(`Today is Sunday`);
      break;
    case 1:
      console.log(`Today is Monday`);
      break;
    case 2:
      console.log(`Today is Tuesday`);
      break;
    case 3:
      console.log(`Today is Wednesday`);
      break;
    case 4:
      console.log(`Today is Thursday`);
      break;
    case 5:
      console.log(`Today is Friday`);
      break;
    case 6:
    default:
      console.log(`Today is Saturday, Sabbath by default!`);
      break;
  }
}
