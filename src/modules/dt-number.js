export default function number() {
  /* Numbers & Floats */
  console.log(Number.prototype);
  let age = 30;
  let yearOfBirth = new Number(1993);
  let digitString = `0`;
  let phoneNumber = `36703340741`;
  let stringNumber = `zero`;

  console.log(`
    age = ${age};
    yearOfBirth = ${yearOfBirth};
    digitString = ${digitString};
    phoneNumber = ${phoneNumber};
    stringNumber = ${stringNumber};
  `);

  /* E.xponential constant */
  let billion = 1e9;
  let millions = 4.5e6;
  let milli = 2e-3;
  let macro = 5e-6;

  console.log(`
    1 billion (literally: 1 and 9 zeroes, or 1 * 109) = ${billion};
    4.5 millions ((same as 4_500_000), or 4.5 * 106) = ${millions};
    milli (0.002 or 2 * 10-3) = ${milli};
    0.000005 or 5 * 10-6 macro = ${macro};
  `);

  /* Properties */
  const EPSILON = Number.EPSILON; // Smallest interval between two representable numbers; approximately 2.2204460492503130808472633361816E-16.

  const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER; // -9007199254740991
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER; // 9007199254740991

  const MIN_VALUE = Number.MIN_VALUE; // Smallest representable number; approximately 5.0E-324.
  const MAX_VALUE = Number.MAX_VALUE; // Largest representable number; approximately 1.7976931348623157E+308.

  const NaN = Number.NaN; // Special "not a number" value. (NaN)
  const POSITIVE_INFINITY = Number.POSITIVE_INFINITY; // Special positive infinite value; returned on overflow. (1 / 0)
  const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY; // Special negative infinite value; returned on overflow. (1 / -0)

  /* Methods & Type conversion */
  console.log(`
    MIN_VALUE.valueOf() = ${MIN_VALUE.valueOf()};
    MAX_VALUE.valueOf() = ${MAX_VALUE.valueOf()};
    \n\
    yearOfBirth.toLocaleString() = ${yearOfBirth.toLocaleString()};
    (decimal)yearOfBirth.toString() = ${yearOfBirth.toString()};
    (binary)yearOfBirth.toString(2) = ${yearOfBirth.toString(2)};
    (hex)yearOfBirth.toString(16) = ${yearOfBirth.toString(16)};
    (octal)yearOfBirth.toString(8) = ${yearOfBirth.toString(8)};
    \n\
    EPSILON.toPrecision(4) = ${EPSILON.toPrecision(4)};
    EPSILON.toFixed(3) = ${EPSILON.toFixed(3)};
    EPSILON.toExponential(2) = ${EPSILON.toExponential(2)};
    \n\
    Number.isFinite(POSITIVE_INFINITY) = ${Number.isFinite(POSITIVE_INFINITY)};
    Number.isFinite(NEGATIVE_INFINITY) = ${Number.isFinite(NEGATIVE_INFINITY)};
    Number.isFinite(true) = ${Number.isFinite(true)};
    Number.isFinite(false) = ${Number.isFinite(false)};
    Number.isFinite(NaN) = ${Number.isFinite(NaN)};
    Number.isFinite(stringNumber) = ${Number.isFinite(stringNumber)};
    Number.isFinite(digitString) = ${Number.isFinite(digitString)};
    Number.isFinite(yearOfBirth) = ${Number.isFinite(yearOfBirth)};
    Number.isFinite(age) = ${Number.isFinite(age)};
    \n\
    Number.isNaN(NaN) = ${Number.isNaN(NaN)};
    Number.isNaN(stringNumber) = ${Number.isNaN(stringNumber)};
    Number.isNaN(digitString) = ${Number.isNaN(digitString)};
    Number.isNaN(yearOfBirth) = ${Number.isNaN(yearOfBirth)};
    Number.isNaN(true) = ${Number.isNaN(true)};
    Number.isNaN(false) = ${Number.isNaN(false)};
    \n\
    isNaN(NaN) = ${isNaN(NaN)};
    isNaN(stringNumber) = ${isNaN(stringNumber)};
    isNaN(digitString) = ${isNaN(digitString)};
    isNaN(yearOfBirth) = ${isNaN(yearOfBirth)};
    isNaN(true) = ${isNaN(true)};
    isNaN(false) = ${isNaN(false)};
    \n\
    Number.isInteger(age) = ${Number.isInteger(age)};
    Number.isInteger(yearOfBirth) = ${Number.isInteger(yearOfBirth)};
    Number.isInteger(POSITIVE_INFINITY) = ${Number.isInteger(POSITIVE_INFINITY)};
    Number.isInteger(NEGATIVE_INFINITY) = ${Number.isInteger(NEGATIVE_INFINITY)};
    Number.isInteger(NaN) = ${Number.isInteger(NaN)};
    Number.isInteger(stringNumber) = ${Number.isInteger(stringNumber)};
    Number.isInteger(digitString) = ${Number.isInteger(digitString)};
    Number.isInteger(true) = ${Number.isInteger(true)};
    Number.isInteger(false) = ${Number.isInteger(false)};
    \n\
    Number.isSafeInteger(age) = ${Number.isSafeInteger(age)};
    Number.isSafeInteger(yearOfBirth) = ${Number.isSafeInteger(yearOfBirth)};
    Number.isSafeInteger(POSITIVE_INFINITY) = ${Number.isSafeInteger(POSITIVE_INFINITY)};
    Number.isSafeInteger(NEGATIVE_INFINITY) = ${Number.isSafeInteger(NEGATIVE_INFINITY)};
    Number.isSafeInteger(NaN) = ${Number.isSafeInteger(NaN)};
    Number.isSafeInteger(stringNumber) = ${Number.isSafeInteger(stringNumber)};
    Number.isSafeInteger(digitString) = ${Number.isSafeInteger(digitString)};
    Number.isSafeInteger(true) = ${Number.isSafeInteger(true)};
    Number.isSafeInteger(false) = ${Number.isSafeInteger(false)};
    Number.isSafeInteger(MAX_SAFE_INTEGER) = ${Number.isSafeInteger(MAX_SAFE_INTEGER)};
    Number.isSafeInteger(MIN_SAFE_INTEGER) = ${Number.isSafeInteger(MIN_SAFE_INTEGER)};
    \n\
    parseFloat('zero' + '0') = ${parseFloat(digitString + stringNumber)};
    parseFloat('0' + 'zero') = ${parseFloat(stringNumber + digitString)};
    \n\
    parseInt('zero' + '0') = ${parseInt(digitString + stringNumber)};
    parseInt('0' + 'zero') = ${parseInt(stringNumber + digitString)};
    \n\
    parseInt(30 + 'zero', binary) = ${parseInt(age + stringNumber, 2)};
    parseInt('zero' + 30, binary) = ${parseInt(stringNumber + age, 2)};
    parseInt(30 + 'zero', hex) = ${parseInt(age + stringNumber, 16)};
    parseInt('zero' + 30, hex) = ${parseInt(stringNumber + age, 16)};
    parseInt(30 + 'zero', octal) = ${parseInt(age + stringNumber, 8)};
    parseInt('zero' + 30, octal) = ${parseInt(stringNumber + age, 8)};
    \n\
    Number(true) = ${Number(true)};
    Number(false) = ${Number(+false)};
    Number(null) = ${Number(null)};
    Number(undefined) = ${Number(undefined)};
    Number(stringNumber) = ${Number(stringNumber)};
    Number(digitString) = ${Number(digitString)};
    Number(phoneNumber) = ${Number(phoneNumber)};
  `);

  /* Math.object */
  console.log(Math);

  /* Properties */
  const PI = Math.PI; // Ratio of a circle's circumference to its diameter; approximately 3.14159.
  const E = Math.E; // Euler's constant and the base of natural logarithms; approximately 2.718.
  const SQRT2 = Math.SQRT2; // Square root of 2; approximately 1.414.
  const SQRT1_2 = Math.SQRT1_2; // Square root of ½; approximately 0.707.
  const LN2 = Math.LN2; // Natural logarithm of 2; approximately 0.693.
  const LN10 = Math.LN10; // Natural logarithm of 10; approximately 2.303.
  const LOG2E = Math.LOG2E; // Base-2 logarithm of E; approximately 1.443.
  const LOG10E = Math.LOG10E; // Base-10 logarithm of E; approximately 0.434.

  /* Methods */
  console.log(`
    Math.abs(-Infinity) = ${Math.abs(NEGATIVE_INFINITY)};
    Math.ceil(PI) = ${Math.ceil(PI)};
    Math.floor(E) = ${Math.floor(E)};
    Math.pow(SQRT1_2, SQRT2) = ${Math.pow(SQRT1_2, SQRT2)};
    Math.round(Math.random() * 6 + 1) = ${Math.round(Math.random() * 6 + 1)};
    Math.min(LN2, LN10) = ${Math.min(LN2, LN10)};
    Math.max(LOG2E, LOG10E) = ${Math.max(LOG2E, LOG10E)};
  `);

  /* Arithmetic & Increment / Decrement operator */
  console.log(`
    yearOfBirth**(null - age) (B.I.D.M.A.S.) = ${yearOfBirth ** (null - age)};
    \n\
    undefined + yearOfBirth = ${undefined + yearOfBirth};
    yearOfBirth / stringNumber = ${yearOfBirth / stringNumber};
    yearOfBirth / digitString = ${yearOfBirth / digitString};
    0 / 0 = ${0 / 0};
    1 / 0 = ${1 / 0};
    1 / -0 = ${1 / -0};
    -1 / 0 = ${-1 / 0};
    -1 / -0 = ${-1 / -0};
    \n\
    yearOfBirth % age (remainder) = ${yearOfBirth % age};
    \n\
    age++ (age = age + 1) = ${age++};
    age-- (age = age - 1) = ${age--};
    ++age (age = age + 1) = ${++age};
    --age (age = age - 1) = ${--age};
    \n\
    age += 2 (age = age + 2) = ${(age += 2)};
    age -= 2 (age = age - 2) = ${(age -= 2)};
    age *= 2 (age = age * 2) = ${(age *= 2)};
    age /= 2 (age = age / 2) = ${(age /= 2)};
  `);

  /* BigInt */
  console.log(BigInt.prototype);
  const bigInt = 9007199254740991n;
  const smallInt = BigInt(-9007199254740991n); // Type conversion too

  /* Methods & Type conversion */
  console.log(`
    bigInt.valueOf() = ${bigInt.valueOf()};
    smallInt.valueOf() = ${smallInt.valueOf()};
    \n\
    bigInt.toString() = ${bigInt.toString()};
    smallInt.toString() = ${smallInt.toString()};
    \n\
    bigInt.toLocaleString() = ${bigInt.toLocaleString()};
    smallInt.toLocaleString() = ${smallInt.toLocaleString()};
  `);
}
