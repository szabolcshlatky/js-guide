export default function functions() {
  /* Functions*/
  const func = new Function();
  console.log(func.prototype);

  /* Declaration */
  function declaration(/* Parameters */) {
    console.log(`empty function declaration (hoisted)`);
  }

  declaration(/* Arguments */);

  /* Expression, Parameters & Arguments, return keyword */
  const expression = function (parameter1, parameter2 = `default value`) {
    console.log(`function expression (not hoisted)
      parameter 1 (${parameter1})
      parameter 2 (${parameter2})
    `);
    console.log(
      `Without a (or with an empty) return keyword, the function will return 'undefined'. When the execution reaches the 'return', the function stops, and the value is returned to the calling code.
      Our return value is: parameter1 ?? parameter2`,
    );

    return parameter1 ?? parameter2;
  };

  const defaultValues = expression();
  const passed2Arguments = (`argument1`, `argument2`);
  const using1stArgument = `argument1`;
  const using2ndArgument = (null, `argument2`);
  const use2ndArgWrong = (``, `argument2`);

  console.log(defaultValues);
  console.log(passed2Arguments);
  console.log(using1stArgument);
  console.log(using2ndArgument);
  console.log(use2ndArgWrong);

  /* Arrow function */

  const arrow = () =>
    console.log(`arrow function:
    => When we have only one (no more, no less) parameter, we can leave the ().
    => When we have only one simple (return) line, we can leave the 'return' keyword with the {};
    => We can't use 'this' keyword in arrow functions.
    => We can't use 'new' keyword in arrow functions.
    => We can't use 'arguments' keyword in arrow functions.
    => We can't use 'yield' keyword in arrow functions.
    => We can't use 'super' keyword in arrow functions.
    => We can't use 'prototype' keyword in arrow functions.
    => We can't use 'new.target' keyword in arrow functions.
  `);

  arrow();
}
