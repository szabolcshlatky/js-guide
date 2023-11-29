`use strict`;

export default function loops() {
  /* While loop */
  let i = 0;

  while (i <= 5) {
    console.log(`Index of a while loop`, i);
    i++;
  }

  /* do while loop */
  i = 0;

  do {
    console.log(`A do while loop is good, when I want to run a code at least once... (index = ${i})`);
    i++;
  } while (i === 5);

  /* For loop */
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
      console.log(
        `Added a 'continue' keyword to this 'if' statement which means: if a condition is true, 'continue' will ignore the actual iteration and jump on the next iteration. (this is the else block)`,
      );
    }

    console.log(`Any part of 'for' can be skipped.
      Initialization (especially if its defined already);
      Condition (if its always true then its an infinite loop);
      Step (We can add it in the code block too);
      \n\
      Added a break keyword which means: if a condition is true, we break out from the loop completely and won't iterate forward.
      \n\
      With the keyword of 'labelName: for ()...)
        { ... }
      ' => we can break out from multiple nested loops.
    `);
    break;
  }
}
