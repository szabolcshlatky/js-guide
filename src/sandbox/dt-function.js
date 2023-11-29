`use strict`;

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

  /* Callback function */

  /* const callback = (callbackFunction, okCallbackParameter, cancelCallbackParameter) => {
    callbackFunction();

    const isConfirmed = confirm(callbackFunction);

    if (isConfirmed) {
      okCallbackParameter();
    } else {
      cancelCallbackParameter();
    }
  };

  callback(
    () => prompt(`The parameter values (arguments) of 'callback' are functions`),
    () => console.log(`We invoked 'okCallbackParameter' in 'callback'`),
    () => alert(`We called 'cancelCallbackParameter' in 'callback'`),
  ); */

  /* Rest operator */

  const restOperator = (...restParameters) => {
    console.log(
      `The rest of the parameters can be included in the function definition by using three dots …​ followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”
    \n\
    We can choose to get the first parameters as variables, and gather only the rest. (parameter1, parameter2, rest...)`,
      restParameters,
    );

    let elements = [];
    for (let parameter of restParameters) {
      elements += parameter;
    }

    return elements + elements;
  };

  const sumArrays = restOperator(1, 3, 5, 7, 9, 2, 4, 6, 8);
  console.log(sumArrays);

  /* Spread operator */

  const spreadOperator = (...spreadSyntax) => {
    console.log(`
      Spread syntax …​ allows an iterable, such as an array or string, to be expanded in places where zero or more arguments are expected.
      \n\
      When …​array is used in the function call, it “expands” an iterable object array into the list of arguments.
    `);

    let result = 1;
    for (let parameter of spreadSyntax) {
      result *= parameter;
    }

    return result;
  };

  const spreadArray = [1, 2, 3, 4];
  const spreadResult = spreadOperator(...spreadArray, ...[5, 6, 7, 8]);

  console.log(spreadResult);

  /* arguments variable */

  const argumentsVar = function (parameter1, parameter2) {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }

    console.log(`
      In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code. But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods.
    `);

    return parameter1 ** parameter2;
  };

  const exp1 = argumentsVar();
  console.log(exp1);
  const exp2 = argumentsVar(2, 4);
  console.log(exp2);
  const exp3 = argumentsVar([5, 6], [7, 8]);
  console.log(exp3);
  const exp4 = argumentsVar(2, 4, 6, 8);
  console.log(exp4);
}
