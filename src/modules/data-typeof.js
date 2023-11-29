`use strict`;

export default function datatypeof() {
  const automatic = undefined;
  console.log(automatic, typeof automatic);

  const nullObject = null;
  console.log(nullObject, typeof nullObject);

  const number = NaN;
  const Num = new Number();
  console.log(number, typeof number);
  console.log(Num, typeof Num);

  const bigint = BigInt(0n);
  const bigInt = BigInt.prototype;
  console.log(bigint, typeof bigint);
  console.log(bigInt, typeof bigInt);

  const mathObject = Math;
  console.log(mathObject, typeof mathObject);

  const string = `${'' + ''}`;
  const str = new String();
  console.log(string, typeof string);
  console.log(str, typeof str);

  const symbol = Symbol();
  const sym = Symbol.prototype;
  console.log(symbol, typeof symbol);
  console.log(sym, typeof sym);

  const regex = new RegExp();
  console.log(regex, typeof regex);

  const boolean = true || false;
  const bool = new Boolean();
  console.log(boolean, typeof boolean);
  console.log(bool, typeof bool);

  const date = new Date();
  console.log(date, typeof date);

  const func = new Function();
  console.log(func, typeof func);

  const array = new Array();
  console.log(array, typeof array);

  const set = new Set();
  console.log(set, typeof set);

  const weakSet = new WeakSet();
  console.log(weakSet, typeof weakSet);

  const object = new Object();
  console.log(object, typeof object);

  const map = new Map();
  console.log(map, typeof map);

  const weakMap = new WeakMap();
  console.log(weakMap, typeof weakMap);

  /* Primitive */

  let primitive_1 = undefined;
  let primitive_2 = primitive_1;

  console.log(
    `let primitive_1: \n`,
    primitive_1,
    `\n\ primitive_2 copied the 'undefined' value (let primitive_2 = primitive_1): \n`,
    primitive_2,
  );

  primitive_1 = null;
  console.log(
    `primitive_1 = null: \n`,
    primitive_1,
    `\n\ primitive_1 won't change the original 'undefined' copy for the primitive_2, so it stays undefined: \n`,
    primitive_2,
  );

  /* Reference */

  const reference_1 = {
    primitive_1,
    primitive_2,
  };

  const reference_2 = reference_1;

  console.log(
    `const reference_1 = {primitive_1, primitive_2}: \n`,
    reference_1,
    `\n\ const reference_2 = reference_1: \n\ `,
    reference_2,
    `reference_2 copied reference_1 object typed variable's pointer to the stack not the value itself.`,
  );

  reference_1.primitive_2 = null;
  console.log(
    `reference_1.primitive_2 = null: \n`,
    reference_1,
    `\n\ reference_1.primitive_2 changed the original 'undefined' copy for the reference_2, so its also changed to null: \n`,
    reference_2,
    `\n\ If we update one, it updates all and doesn't matter that if we would change the value at 'reference_2' either... same result because of the HEAP.`,
  );
}
