`use strict`;

export default function number() {
  /* Numbers & Floats */
  let yearOfBirth = 1993;
  let age = 30.5;
  let minus = -36703340741;
  let minusZero = -0;
  let plusZero = +0;

  /* E.xponential constant */
  let million = 1e6;
  let threeBillion = 3e9;
  let milli = 2e-3;
  let macro = 5e-6;

  console.log(
    `Number (let yearOfBirth = 1993): \n`,
    yearOfBirth,
    `\n\ Float (let age = 30.5): \n`,
    age,
    `\n\ Exponential constant (let million = 1e6): \n`,
    million,
    `\n\ Exponential constant (let threeBillion = 3e9): \n`,
    threeBillion,
    `\n\ Exponential constant (let milli = 2e-3): \n`,
    milli,
    `\n\ Exponential constant (let macro = 5e-6): \n`,
    macro,
  );

  /* Properties */
  const EPSILON = Number.EPSILON;
  const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  const MIN_VALUE = Number.MIN_VALUE;
  const MAX_VALUE = Number.MAX_VALUE;
  const NaN = Number.NaN;
  const POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;

  console.log(
    `Number.properties: \n`,
    `Smallest interval between two representable numbers; approximately 2.2204460492503130808472633361816E-16 (EPSILON): \n`,
    EPSILON,
    `\n\ Largest representable number; approximately 1.7976931348623157E+308 (MAX_VALUE): \n`,
    MAX_VALUE,
    `\n\ Smallest representable number; approximately 5.0E-324 (MIN_VALUE): \n`,
    MIN_VALUE,
    `\n\ 9007199254740991 (MAX_SAFE_INTEGER): \n`,
    MAX_SAFE_INTEGER,
    `\n\ -9007199254740991 (MIN_SAFE_INTEGER): \n`,
    MIN_SAFE_INTEGER,
    `\n\ Special "not a number" value. (NaN): \n`,
    NaN,
    `\n\ Special positive infinite value; returned on overflow. (1 / 0): \n`,
    POSITIVE_INFINITY,
    `\n\ Special negative infinite value; returned on overflow. (1 / -0): \n`,
    NEGATIVE_INFINITY,
  );

  /* Methods & Type Conversion & Coercion */
  let digitString = Number(`0`);
  let stringNumber = Number(`zero`);
  let trueNumber = Number(true);
  let falseNumber = Number(false);
  let nullNumber = Number(null);
  let undefinedNumber = Number(undefined);

  /* Methods */
  console.log(
    `Number.methods(): \n`,
    `MIN_VALUE.valueOf(): \n`,
    MIN_VALUE.valueOf(),
    `\n\ MAX_VALUE.valueOf(): \n`,
    MAX_VALUE.valueOf(),
  );

  console.log(
    `threeBillion.toPrecision(4): \n`,
    threeBillion.toPrecision(4),
    `\n\ million.toFixed(3): \n`,
    million.toFixed(3),
    `\n\ macro.toExponential(2): \n`,
    macro.toExponential(2),
  );

  console.log(
    `Number.isInteger(age): \n`,
    Number.isInteger(age),
    `\n\ Number.isInteger(yearOfBirth): \n`,
    Number.isInteger(yearOfBirth),
    `\n\ Number.isInteger(POSITIVE_INFINITY): \n`,
    Number.isInteger(POSITIVE_INFINITY),
    `\n\ Number.isInteger(NEGATIVE_INFINITY): \n`,
    Number.isInteger(NEGATIVE_INFINITY),
    `\n\ Number.isInteger(minus): \n`,
    Number.isInteger(minus),
    `\n\ Number.isInteger(0): \n`,
    Number.isInteger(0),
    `\n\ Number.isInteger(plusZero): \n`,
    Number.isInteger(plusZero),
    `\n\ Number.isInteger(minusZero): \n`,
    Number.isInteger(minusZero),
    `\n\ Number.isInteger(NaN): \n`,
    Number.isInteger(NaN),
    `\n\ Number.isInteger(digitString): \n`,
    Number.isInteger(digitString),
    `\n\ Number.isInteger(stringNumber): \n`,
    Number.isInteger(stringNumber),
    `\n\ Number.isInteger(trueNumber): \n`,
    Number.isInteger(trueNumber),
    `\n\ Number.isInteger(falseNumber): \n`,
    Number.isInteger(falseNumber),
    `\n\ Number.isInteger(nullNumber): \n`,
    Number.isInteger(nullNumber),
    `\n\ Number.isInteger(undefinedNumber): \n`,
    Number.isInteger(undefinedNumber),
  );

  console.log(
    `Number.isSafeInteger(age): \n`,
    Number.isSafeInteger(age),
    `\n\ Number.isSafeInteger(yearOfBirth): \n`,
    Number.isSafeInteger(yearOfBirth),
    `\n\ Number.isSafeInteger(POSITIVE_INFINITY): \n`,
    Number.isSafeInteger(POSITIVE_INFINITY),
    `\n\ Number.isSafeInteger(NEGATIVE_INFINITY): \n`,
    Number.isSafeInteger(NEGATIVE_INFINITY),
    `\n\ Number.isSafeInteger(MAX_SAFE_INTEGER): \n`,
    Number.isSafeInteger(MAX_SAFE_INTEGER),
    `\n\ Number.isSafeInteger(MIN_SAFE_INTEGER): \n`,
    Number.isSafeInteger(MIN_SAFE_INTEGER),
    `\n\ Number.isSafeInteger(minus): \n`,
    Number.isSafeInteger(minus),
    `\n\ Number.isSafeInteger(0): \n`,
    Number.isSafeInteger(0),
    `\n\ Number.isSafeInteger(plusZero): \n`,
    Number.isSafeInteger(plusZero),
    `\n\ Number.isSafeInteger(minusZero): \n`,
    Number.isSafeInteger(minusZero),
    `\n\ Number.isSafeInteger(NaN): \n`,
    Number.isSafeInteger(NaN),
    `\n\ Number.isSafeInteger(digitString): \n`,
    Number.isSafeInteger(digitString),
    `\n\ Number.isSafeInteger(stringNumber): \n`,
    Number.isSafeInteger(stringNumber),
    `\n\ Number.isSafeInteger(trueNumber): \n`,
    Number.isSafeInteger(trueNumber),
    `\n\ Number.isSafeInteger(falseNumber): \n`,
    Number.isSafeInteger(falseNumber),
    `\n\ Number.isSafeInteger(nullNumber): \n`,
    Number.isSafeInteger(nullNumber),
    `\n\ Number.isSafeInteger(undefinedNumber): \n`,
    Number.isSafeInteger(undefinedNumber),
  );

  console.log(
    `Number.isFinite(POSITIVE_INFINITY): \n`,
    Number.isFinite(POSITIVE_INFINITY),
    `\n\ Number.isFinite(NEGATIVE_INFINITY): \n`,
    Number.isFinite(NEGATIVE_INFINITY),
    `\n\ Number.isFinite(age): \n`,
    Number.isFinite(age),
    `\n\ Number.isFinite(minus): \n`,
    Number.isFinite(minus),
    `\n\ Number.isFinite(0): \n`,
    Number.isFinite(0),
    `\n\ Number.isFinite(plusZero): \n`,
    Number.isFinite(plusZero),
    `\n\ Number.isFinite(minusZero): \n`,
    Number.isFinite(minusZero),
    `\n\ Number.isFinite(NaN): \n`,
    Number.isFinite(NaN),
    `\n\ Number.isFinite(digitString): \n`,
    Number.isFinite(digitString),
    `\n\ Number.isFinite(stringNumber): \n`,
    Number.isFinite(stringNumber),
    `\n\ Number.isFinite(trueNumber): \n`,
    Number.isFinite(trueNumber),
    `\n\ Number.isFinite(falseNumber): \n`,
    Number.isFinite(falseNumber),
    `\n\ Number.isFinite(nullNumber): \n`,
    Number.isFinite(nullNumber),
    `\n\ Number.isFinite(undefinedNumber): \n`,
    Number.isFinite(undefinedNumber),
  );

  console.log(
    `Number.isNaN(age): \n`,
    Number.isNaN(age),
    `\n\ Number.isNaN(yearOfBirth): \n`,
    Number.isNaN(yearOfBirth),
    `\n\ Number.isNaN(POSITIVE_INFINITY): \n`,
    Number.isNaN(POSITIVE_INFINITY),
    `\n\ Number.isNaN(NEGATIVE_INFINITY): \n`,
    Number.isNaN(NEGATIVE_INFINITY),
    `\n\ Number.isNaN(minus): \n`,
    Number.isNaN(minus),
    `\n\ Number.isNaN(0): \n`,
    Number.isNaN(0),
    `\n\ Number.isNaN(plusZero): \n`,
    Number.isNaN(plusZero),
    `\n\ Number.isNaN(minusZero): \n`,
    Number.isNaN(minusZero),
    `\n\ Number.isNaN(NaN): \n`,
    Number.isNaN(NaN),
    `\n\ Number.isNaN(stringNumber): \n`,
    Number.isNaN(stringNumber),
    `\n\ Number.isNaN(digitString): \n`,
    Number.isNaN(digitString),
    `\n\ Number.isNaN(trueNumber): \n`,
    Number.isNaN(trueNumber),
    `\n\ Number.isNaN(falseNumber): \n`,
    Number.isNaN(falseNumber),
    `\n\ Number.isNaN(nullNumber): \n`,
    Number.isNaN(nullNumber),
    `\n\ Number.isNaN(undefinedNumber): \n`,
    Number.isNaN(undefinedNumber),
  );

  console.log(
    `isNaN(age): \n`,
    isNaN(age),
    `\n\ isNaN(yearOfBirth): \n`,
    isNaN(yearOfBirth),
    `\n\ isNaN(POSITIVE_INFINITY): \n`,
    isNaN(POSITIVE_INFINITY),
    `\n\ isNaN(NEGATIVE_INFINITY): \n`,
    isNaN(NEGATIVE_INFINITY),
    `\n\ isNaN(minus): \n`,
    isNaN(minus),
    `\n\ isNaN(0): \n`,
    isNaN(0),
    `\n\ isNaN(plusZero): \n`,
    isNaN(plusZero),
    `\n\ isNaN(minusZero): \n`,
    isNaN(minusZero),
    `\n\ isNaN(NaN): \n`,
    isNaN(NaN),
    `\n\ isNaN(stringNumber): \n`,
    isNaN(stringNumber),
    `\n\ isNaN(digitString): \n`,
    isNaN(digitString),
    `\n\ isNaN(trueNumber): \n`,
    isNaN(trueNumber),
    `\n\ isNaN(falseNumber): \n`,
    isNaN(falseNumber),
    `\n\ isNaN(nullNumber): \n`,
    isNaN(nullNumber),
    `\n\ isNaN(undefinedNumber): \n`,
    isNaN(undefinedNumber),
  );

  console.log(
    `\n\ Type converted digit string (let digitString = '0'): \n`,
    digitString,
    `\n\ Type converted string (let stringNumber = 'zero'): \n`,
    stringNumber,
    `\n\ Type converted boolean (let trueNumber = true): \n`,
    trueNumber,
    `\n\ Type converted boolean (let falseNumber = false): \n`,
    falseNumber,
    `\n\ Type converted null (let nullNumber = null): \n`,
    nullNumber,
    `\n\ Type converted undefined (let undefinedNumber = undefined): \n`,
    undefinedNumber,
  );

  console.log(
    `parseFloat('zero' + '0'): \n`,
    parseFloat(digitString + stringNumber),
    `\n\ parseFloat('0' + 'zero'): \n`,
    parseFloat(stringNumber + digitString),
  );

  console.log(
    `parseInt('zero' + '0'): \n`,
    parseInt(digitString + stringNumber),
    `\n\ parseInt('0' + 'zero'): \n`,
    parseInt(stringNumber + digitString),
    `\n\ parseInt(30 + 'zero', binary): \n`,
    parseInt(age + stringNumber, 2),
    `\n\ parseInt('zero' + 30, binary): \n`,
    parseInt(stringNumber + age, 2),
    `\n\ parseInt(30 + 'zero', hex): \n`,
    parseInt(age + stringNumber, 16),
    `\n\ parseInt('zero' + 30, hex): \n`,
    parseInt(stringNumber + age, 16),
    `\n\ parseInt(30 + 'zero', octal): \n`,
    parseInt(age + stringNumber, 8),
    `\n\ parseInt('zero' + 30, octal): \n`,
    parseInt(stringNumber + age, 8),
  );

  console.log(
    `\n\ yearOfBirth.toLocaleString(): \n`,
    yearOfBirth.toLocaleString(),
    `\n\ (decimal)yearOfBirth.toString(): \n`,
    yearOfBirth.toString(),
    `\n\ (binary)yearOfBirth.toString(2): \n`,
    yearOfBirth.toString(2),
    `\n\ (hex)yearOfBirth.toString(16): \n`,
    yearOfBirth.toString(16),
    `\n\ (octal)yearOfBirth.toString(8): \n`,
    yearOfBirth.toString(8),
  );

  /* Type Coercion */
  console.log('9' - '5');
  console.log('19' - '13' + '17');
  console.log('19' - '13' + 17);
  console.log('123' < 57);
  console.log(5 + 6 + '4' + 9 - 4 - 2);

  /* Math.object - Properties & Methods */
  const PI = Math.PI;
  const E = Math.E;
  const SQRT2 = Math.SQRT2;
  const SQRT1_2 = Math.SQRT1_2;
  const LN2 = Math.LN2;
  const LN10 = Math.LN10;
  const LOG2E = Math.LOG2E;
  const LOG10E = Math.LOG10E;

  console.log(
    `Ratio of a circle's circumference to its diameter; approximately 3.14159 (Math.PI): \n`,
    PI,
    `\n\ Euler's constant and the base of natural logarithms; approximately 2.718 (Math.E): \n`,
    E,
    `\n\ Square root of 2; approximately 1.414 (Math.SQRT2): \n`,
    SQRT2,
    `\n\ Square root of ½; approximately 0.707 (Math.SQRT1_2): \n`,
    SQRT1_2,
    `\n\ Natural logarithm of 2; approximately 0.693 (Math.LN2): \n`,
    LN2,
    `\n\ Natural logarithm of 10; approximately 2.303 (Math.LN10): \n`,
    LN10,
    `\n\ Base-2 logarithm of E; approximately 1.443 (Math.LOG2E): \n`,
    LOG2E,
    `\n\ Base-10 logarithm of E; approximately 0.434 (Math.LOG10E): \n`,
    LOG10E,
  );

  console.log(
    `Math.abs(-Infinity): \n`,
    Math.abs(NEGATIVE_INFINITY),
    `\n\ Math.ceil(PI): \n`,
    Math.ceil(PI),
    `\n\ Math.floor(E): \n`,
    Math.floor(E),
    `\n\ Math.pow(SQRT1_2, SQRT2): \n`,
    Math.pow(SQRT1_2, SQRT2),
    `\n\ Pseudo D6 roll - Math.round(Math.random() * 6 + 1): \n`,
    Math.round(Math.random() * 6 + 1),
    `\n\ Math.min(LN2, LN10): \n`,
    Math.min(LN2, LN10),
    `\n\ Math.max(LOG2E, LOG10E): \n`,
    Math.max(LOG2E, LOG10E),
  );

  /* Arithmetic & Increment / Decrement operator */
  console.log(
    `(B.I.D.M.A.S.) yearOfBirth**(null - age): \n`,
    yearOfBirth ** (null - age),
    `\n\ undefined + yearOfBirth: \n`,
    undefined + yearOfBirth,
    `\n\ yearOfBirth / stringNumber: \n`,
    yearOfBirth / stringNumber,
    `\n\ yearOfBirth / digitString: \n`,
    yearOfBirth / digitString,
    `\n\ 0 / 0: \n`,
    0 / 0,
    `\n\ 1 / 0: \n`,
    1 / 0,
    `\n\ 1 / -0: \n`,
    1 / -0,
    `\n\ -1 / 0: \n`,
    -1 / 0,
    `\n\ -1 / -0: \n`,
    -1 / -0,
    `\n\ (remainder) yearOfBirth % age: \n`,
    yearOfBirth % age,
    `\n\ age++ (age = age + 1): \n`,
    age++,
    `\n\ age-- (age = age - 1): \n`,
    age--,
    `\n\ ++age (age = age + 1): \n`,
    ++age,
    `\n\ --age (age = age - 1): \n`,
    --age,
    `\n\ age += 2 (age = age + 2): \n`,
    (age += 2),
    `\n\ age -= 2 (age = age - 2): \n`,
    (age -= 2),
    `\n\ age *= 2 (age = age * 2): \n`,
    (age *= 2),
    `\n\ age /= 2 (age = age / 2): \n`,
    (age /= 2),
  );

  /* BigInt DT */
  const bigInt = 9007199254740991n;
  const smallInt = BigInt(minus); // Type conversion too

  /* Methods & Type conversion */
  console.log(
    `After max safe integer (or min safe integer if its minus) (let bigInt = 9007199254740991n): \n`,
    bigInt,
    `\n\ Type conversion smallInt (let smallInt = BigInt(-9007199254740991n)): \n`,
    smallInt,
    `\n\ bigInt.valueOf(): \n`,
    bigInt.valueOf(),
    `\n\ smallInt.valueOf(): \n`,
    smallInt.valueOf(),
    `\n\ bigInt.toString(): \n`,
    bigInt.toString(),
    `\n\ smallInt.toString(): \n`,
    smallInt.toString(),
    `\n\ bigInt.toLocaleString(): \n`,
    bigInt.toLocaleString(),
    `\n\ smallInt.toLocaleString(): \n`,
    smallInt.toLocaleString(),
  );
}
