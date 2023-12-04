`use strict`;

export default function functions() {
  /* Functions declaration */

  function declaration(/* Parameters */) {
    console.log(`empty function declaration (hoisted)`);
  }

  declaration(/* Arguments */);

  /* Function expression, Parameters & Arguments, return keyword */

  const expression = function (parameter1, parameter2 = `default value`) {
    console.log(`function expression (not hoisted)`);
    return parameter1 ?? parameter2;
  };

  const defaultValues = expression();
  const passed2Arguments = expression(`argument1`, `argument2`);
  const using1stArgument = expression(`argument1`);
  const using2ndArgument = expression(null, `argument2`);
  const use2ndArgWrong = expression(``, `argument2`);

  console.log(defaultValues);
  console.log(passed2Arguments);
  console.log(using1stArgument);
  console.log(using2ndArgument);
  console.log(use2ndArgWrong);

  /* Immediately Invoked Function Expression (IIFE) */

  const iife = (function () {
    console.log(`Immediately Invoked Function Expression (IIFE)`);
  })();

  /* Arrow function */

  const arrow = () => console.log(`arrow function (not hoisted)`);
  arrow();

  /* Callback function */

  const callback = (callbackFunction, okCallbackParameter, cancelCallbackParameter) => {
    callbackFunction();

    const isConfirmed = confirm(callbackFunction);

    if (isConfirmed) {
      okCallbackParameter();
    } else {
      cancelCallbackParameter();
    }
  };

  callback(
    () => confirm(`The parameter values (arguments) of 'callback' are functions`),
    () => prompt(`We invoked 'okCallbackParameter' in 'callback'`),
    () => alert(`We called 'cancelCallbackParameter' in 'callback'`),
  );

  /* Closures */

  const closure = () => {
    let num = 0;

    return () => {
      return ++num;
    };
  };

  const add = closure();
  add();
  add();
  add();
  add();
  console.log(add);

  /* Recursion */

  const recursion = (n) => {
    if (n === 1) {
      return 1;
    }

    return n * recursion(n - 1);
  };

  recursion(5);

  /* Rest operator */

  const restOperator = (...restParameters) => {
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
