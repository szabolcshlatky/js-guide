`use strict`;

export default function boolean() {
  /* Boolean */

  let isTrue = true;
  let isFalse = false;
  let Truthy = 1;
  let Falsy = 0;
  let trueString = `true`;
  let falseString = `false`;
  let emptyString = ``;
  let digitString = `0`;

  console.log(isTrue);
  console.log(isFalse);
  console.log(Truthy);
  console.log(Falsy);
  console.log(trueString);
  console.log(falseString);
  console.log(emptyString);
  console.log(digitString);

  /* Type conversion (truthy / falsy) */

  console.log(Boolean(Truthy));
  console.log(Boolean(Falsy));
  console.log(Boolean(Falsy - Truthy));
  console.log(Boolean(trueString));
  console.log(Boolean(falseString));
  console.log(Boolean(emptyString));
  console.log(Boolean(digitString));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));
  console.log(Boolean(Infinity));
  console.log(Boolean(-Infinity));
  console.log(Boolean({}));
  console.log(Boolean([]));

  /* Comparison operators */

  console.log(Truthy > Falsy);
  console.log(Truthy < Falsy);
  console.log(Truthy >= Falsy);
  console.log(Truthy <= Falsy);
  console.log(isTrue == trueString);
  console.log(isFalse == falseString);
  console.log(isTrue == isFalse);
  console.log(trueString != falseString);
  console.log(Falsy == 0);
  console.log(Falsy == digitString);
  console.log(undefined == `undefined`);
  console.log(null == `null`);
  console.log(null == 0);
  console.log(null == digitString);
  console.log(null == undefined);
  console.log(trueString == `true`);
  console.log(falseString == `False`);
  console.log(trueString > falseString);
  console.log(trueString < falseString);
  console.log(trueString <= `True`);
  console.log(falseString >= `False`);
  console.log(isTrue === trueString);
  console.log(isFalse !== falseString);
  console.log(Falsy === digitString);
  console.log(undefined === `undefined`);
  console.log(null === `null`);
  console.log(null === 0);
  console.log(null === digitString);
  console.log(null === undefined);
  console.log(null !== undefined);
}
