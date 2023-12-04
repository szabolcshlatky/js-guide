`use strict`;

export default function loops() {
  /* while loop */

  let i = 0;

  while (i <= 5) {
    console.log(`Index of a while loop`, i);
    i++;
  }

  /* do while loop */

  i = 0;

  do {
    console.log(`(index = ${i})`);
    i++;
  } while (i === 5);

  /* for loop */

  let For = [`begin`, `condition`, `step`];

  for (let i = 0; i < For.length; i++) {
    console.log(For[i]);
  }

  let phoneNumber = String(36703340741);

  for (let i = 0, b = `+3`; i < phoneNumber.length; i++, b += phoneNumber[i]) {
    console.log(phoneNumber[i], b);
  }

  for (;;) {
    if (For.includes(`initialization`)) {
      continue;
    } else {
      break;
    }
  }
}
