`use strict`;

export default function number() {
  /* Numbers & Floats */

  let yearOfBirth = 1993;
  let age = 30.5;
  let minus = -36703340741;
  let minusZero = -0;
  let plusZero = +0;

  let digitString = Number(`0`);
  let stringNumber = Number(`zero`);
  let trueNumber = Number(true);
  let falseNumber = Number(false);
  let nullNumber = Number(null);
  let undefinedNumber = Number(undefined);

  /* E.xponential constant */

  let million = 1e6;
  let threeBillion = 3e9;
  let milli = 2e-3;
  let macro = 5e-6;

  console.log(yearOfBirth);
  console.log(age);
  console.log(minus);
  console.log(minusZero);
  console.log(plusZero);
  console.log(million);
  console.log(threeBillion);
  console.log(milli);
  console.log(macro);

  /* Properties */

  const EPSILON = Number.EPSILON;
  const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  const MIN_VALUE = Number.MIN_VALUE;
  const MAX_VALUE = Number.MAX_VALUE;
  const NAN = Number.NaN;
  const POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;

  console.log(EPSILON);
  console.log(MIN_SAFE_INTEGER);
  console.log(MAX_SAFE_INTEGER);
  console.log(MIN_VALUE);
  console.log(MAX_VALUE);
  console.log(NAN);
  console.log(POSITIVE_INFINITY);
  console.log(NEGATIVE_INFINITY);

  /* Methods & Type Conversion & Coercion */

  console.log(MIN_VALUE.valueOf());
  console.log(MAX_VALUE.valueOf());

  console.log(threeBillion.toPrecision(4));
  console.log(million.toFixed(3));
  console.log(macro.toExponential(2));

  console.log(Number.isInteger(age));
  console.log(Number.isInteger(yearOfBirth));
  console.log(Number.isInteger(POSITIVE_INFINITY));
  console.log(Number.isInteger(NEGATIVE_INFINITY));
  console.log(Number.isInteger(minus));
  console.log(Number.isInteger(0));
  console.log(Number.isInteger(plusZero));
  console.log(Number.isInteger(minusZero));
  console.log(Number.isInteger(NaN));
  console.log(Number.isInteger(digitString));
  console.log(Number.isInteger(stringNumber));
  console.log(Number.isInteger(trueNumber));
  console.log(Number.isInteger(falseNumber));
  console.log(Number.isInteger(nullNumber));
  console.log(Number.isInteger(undefinedNumber));

  console.log(Number.isSafeInteger(age));
  console.log(Number.isSafeInteger(yearOfBirth));
  console.log(Number.isSafeInteger(POSITIVE_INFINITY));
  console.log(Number.isSafeInteger(NEGATIVE_INFINITY));
  console.log(Number.isSafeInteger(MAX_SAFE_INTEGER));
  console.log(Number.isSafeInteger(MIN_SAFE_INTEGER));
  console.log(Number.isSafeInteger(minus));
  console.log(Number.isSafeInteger(0));
  console.log(Number.isSafeInteger(plusZero));
  console.log(Number.isSafeInteger(minusZero));
  console.log(Number.isSafeInteger(NaN));
  console.log(Number.isSafeInteger(digitString));
  console.log(Number.isSafeInteger(stringNumber));
  console.log(Number.isSafeInteger(trueNumber));
  console.log(Number.isSafeInteger(falseNumber));
  console.log(Number.isSafeInteger(nullNumber));
  console.log(Number.isSafeInteger(undefinedNumber));

  console.log(Number.isFinite(POSITIVE_INFINITY));
  console.log(Number.isFinite(NEGATIVE_INFINITY));
  console.log(Number.isFinite(age));
  console.log(Number.isFinite(minus));
  console.log(Number.isFinite(0));
  console.log(Number.isFinite(plusZero));
  console.log(Number.isFinite(minusZero));
  console.log(Number.isFinite(NaN));
  console.log(Number.isFinite(digitString));
  console.log(Number.isFinite(stringNumber));
  console.log(Number.isFinite(trueNumber));
  console.log(Number.isFinite(falseNumber));
  console.log(Number.isFinite(nullNumber));
  console.log(Number.isFinite(undefinedNumber));

  console.log(Number.isNaN(age));
  console.log(Number.isNaN(yearOfBirth));
  console.log(Number.isNaN(POSITIVE_INFINITY));
  console.log(Number.isNaN(NEGATIVE_INFINITY));
  console.log(Number.isNaN(minus));
  console.log(Number.isNaN(0));
  console.log(Number.isNaN(plusZero));
  console.log(Number.isNaN(minusZero));
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(stringNumber));
  console.log(Number.isNaN(digitString));
  console.log(Number.isNaN(trueNumber));
  console.log(Number.isNaN(falseNumber));
  console.log(Number.isNaN(nullNumber));
  console.log(Number.isNaN(undefinedNumber));

  console.log(isNaN(age));
  console.log(isNaN(yearOfBirth));
  console.log(isNaN(POSITIVE_INFINITY));
  console.log(isNaN(NEGATIVE_INFINITY));
  console.log(isNaN(minus));
  console.log(isNaN(0));
  console.log(isNaN(plusZero));
  console.log(isNaN(minusZero));
  console.log(isNaN(NaN));
  console.log(isNaN(stringNumber));
  console.log(isNaN(digitString));
  console.log(isNaN(trueNumber));
  console.log(isNaN(falseNumber));
  console.log(isNaN(nullNumber));
  console.log(isNaN(undefinedNumber));

  console.log(digitString);
  console.log(stringNumber);
  console.log(trueNumber);
  console.log(falseNumber);
  console.log(nullNumber);
  console.log(undefinedNumber);

  console.log(parseFloat(digitString + stringNumber));
  console.log(parseFloat(stringNumber + digitString));

  console.log(parseInt(digitString + stringNumber));
  console.log(parseInt(stringNumber + digitString));
  console.log(parseInt(age + stringNumber, 2));
  console.log(parseInt(stringNumber + age, 2));
  console.log(parseInt(age + stringNumber, 16));
  console.log(parseInt(stringNumber + age, 16));
  console.log(parseInt(age + stringNumber, 8));
  console.log(parseInt(stringNumber + age, 8));

  console.log(yearOfBirth.toLocaleString());
  console.log(`decimal:`, yearOfBirth.toString());
  console.log(`binary:`, yearOfBirth.toString(2));
  console.log(`hex:`, yearOfBirth.toString(16));
  console.log(`octal:`, yearOfBirth.toString(8));

  /* Type Coercion */

  console.log(`9` - `5`);
  console.log(`19` - `13` + `17`);
  console.log(`19` - `13` + 17);
  console.log(`123` < 57);
  console.log(5 + 6 + `4` + 9 - 4 - 2);

  /* Math.object - Properties & Methods */

  const PI = Math.PI;
  const E = Math.E;
  const SQRT2 = Math.SQRT2;
  const SQRT1_2 = Math.SQRT1_2;
  const LN2 = Math.LN2;
  const LN10 = Math.LN10;
  const LOG2E = Math.LOG2E;
  const LOG10E = Math.LOG10E;

  console.log(PI);
  console.log(E);
  console.log(SQRT2);
  console.log(SQRT1_2);
  console.log(LN2);
  console.log(LN10);
  console.log(LOG2E);
  console.log(LOG10E);

  console.log(Math.abs(NEGATIVE_INFINITY));
  console.log(Math.ceil(PI));
  console.log(Math.floor(E));
  console.log(Math.pow(SQRT1_2, SQRT2));
  console.log(`Pseudo D6 roll:`, Math.round(Math.random() * 6 + 1));
  console.log(Math.min(LN2, LN10));
  console.log(Math.max(LOG2E, LOG10E));

  /* Arithmetic & Increment / Decrement operator */

  console.log(yearOfBirth ** (null - age));
  console.log(undefined + yearOfBirth);
  console.log(yearOfBirth / stringNumber);
  console.log(yearOfBirth / digitString);
  console.log(0 / 0);
  console.log(1 / 0);
  console.log(1 / -0);
  console.log(-1 / 0);
  console.log(-1 / -0);
  console.log(yearOfBirth % age);
  console.log(age++);
  console.log(age--);
  console.log(++age);
  console.log(--age);
  console.log((age += 2));
  console.log((age -= 2));
  console.log((age *= 2));
  console.log((age /= 2));

  /* BigInt DT */

  const bigInt = 9007199254740991n;
  const smallInt = BigInt(minus);

  /* Methods & Type conversion */

  console.log(bigInt);
  console.log(smallInt);
  console.log(bigInt.valueOf());
  console.log(smallInt.valueOf());
  console.log(bigInt.toString());
  console.log(smallInt.toString());
  console.log(bigInt.toLocaleString());
  console.log(smallInt.toLocaleString());
}
