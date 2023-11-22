export default function boolean() {
  /* Boolean */
  console.log(Boolean.prototype);
  let isTrue = true;
  let isFalse = new Boolean(false);
  let Truthy = 1;
  let Falsy = 0;
  let trueString = `true`;
  let falseString = `false`;
  let emptyString = ``;
  let digitString = `0`;

  console.log(`
    isTrue = ${isTrue};
    isFalse = ${isFalse};
    Truthy = ${Truthy};
    Falsy = ${Falsy};
    trueString = ${trueString};
    falseString = ${falseString};
    emptyString = ${emptyString};
    digitString = ${digitString};
  `);

  /* Type conversion (truthy / falsy) */

  console.log(`
    Boolean(Truthy) = ${Boolean(Truthy)};
    Boolean(Falsy) = ${Boolean(Falsy)};
    Boolean(Falsy - Truthy) = ${Boolean(Falsy - Truthy)};
    Boolean(trueString) = ${Boolean(trueString)};
    Boolean(falseString) = ${Boolean(falseString)};
    Boolean(emptyString) = ${Boolean(emptyString)};
    Boolean(digitString) = ${Boolean(digitString)};
    Boolean(null) = ${Boolean(null)};
    Boolean(undefined) = ${Boolean(undefined)};
  `);

  /* Comparison operators */

  console.log(`
    Truthy > Falsy = ${Truthy > Falsy};
    Truthy < Falsy = ${Truthy < Falsy};
    Truthy >= Falsy = ${Truthy >= Falsy};
    Truthy <= Falsy = ${Truthy <= Falsy};
    \n\
    isTrue == trueString = ${isTrue == trueString};
    isFalse == falseString = ${isFalse == falseString};
    isTrue == isFalse = ${isTrue == isFalse};
    trueString != falseString = ${trueString != falseString};
    Falsy == 0 = ${Falsy == 0};
    Falsy == digitString = ${Falsy == digitString};
    undefined == 'undefined' = ${undefined == `undefined`};
    null == 'null' = ${null == `null`};
    null == 0 = ${null == 0};
    null == digitString = ${null == digitString};
    null == undefined = ${null == undefined};
    \n\
    trueString == 'true' = ${trueString == `true`};
    falseString == 'False' (case sensitivity) = ${falseString == `False`};
    trueString > falseString ('t' comes later than 'f') = ${trueString > falseString};
    trueString < falseString = ${trueString < falseString};
    trueString <= 'True' (lowercase letter is stronger) = ${trueString <= `True`};
    falseString >= 'False' = ${falseString >= `False`};
    \n\
    isTrue === trueString = ${isTrue === trueString};
    isFalse !== falseString = ${isFalse !== falseString};
    Falsy === digitString = ${Falsy === digitString};
    undefined === 'undefined' = ${undefined === `undefined`};
    null === 'null' = ${null === `null`};
    null === 0 = ${null === 0};
    null === digitString = ${null === digitString};
    null === undefined = ${null === undefined};
    null !== undefined = ${null !== undefined};
  `);
}
