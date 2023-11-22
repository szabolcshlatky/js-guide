export default function loops() {
  /* While loop */
  let While = `while loop`;
  let i = 0;

  while (i < While.length) {
    console.log(While[i]);
    i++;
  }

  let doWhile = ` do while loop`;
  i = 0;

  /* do while loop */
  do {
    console.log(`A do while loop is good, when I want to run a code at least once...`, doWhile[i]);
    i++;
  } while (i < doWhile.length);

  /* For loop */
  let For = [`begin`, `condition`, `step`];

  for (let i = 0; i < For.length; i++) {
    console.log(For[i]);
  }

  for (let i = 0, b = 3; i < 5; i++, b += 10) {
    console.log(i, b);
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
