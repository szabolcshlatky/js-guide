`use strict`;

export default function datatypeof() {
  const automatic = undefined;
  const nullObject = null;

  const positive = Infinity;
  const negative = -Infinity;
  const nan = NaN;
  const float = 3.14;
  const zero = 0;

  const bigInt = 9007199254740991n;
  const smallInt = -9007199254740991n;

  const string = '0';
  const str = 'string';
  const tempStrLit = `Template ${str} literal`;

  const True = true;
  const False = false;

  const name = Symbol(`©貂`);

  const array = [`object type`, `can contain every DT as element`, `can hold the same element multiple times`];

  const arrBuffer = new ArrayBuffer(16);
  const dataView = new DataView(arrBuffer);

  const set = new Set([`object type`, `can contain every DT as element`, `can hold the same element only once`]);

  const weakSet = new WeakSet();

  let wS1 = { a: `garbage collection` };
  let wS2 = { b: `weak references` };
  let wS3 = { c: `only objects` };
  let wS4 = { d: `can't iterate on it` };

  weakSet.add(wS1).add(wS2).add(wS3).add(wS4);

  const objectLiteral = {
    key: `only string and symbol keys`,
    key2: name,
  };

  const map = new Map([
    [`key`, `value`],
    [`any data-type key`, `value`],
  ]);

  const weakMap = new WeakMap([
    [{}, `non-iterable`],
    [{}, `garbage`],
  ]);

  const specObjFuncExp = function (parameter) {
    console.log(
      `
      ${typeof automatic}\n
      ${typeof nullObject}\n
      \n\
      ${typeof positive}\n
      ${typeof negative}\n
      ${typeof nan}\n
      ${typeof float}\n
      ${typeof zero}\n
      \n\
      ${typeof bigInt}\n
      ${typeof smallInt}\n
      \n\
      ${typeof string}\n
      ${typeof str}\n
      ${typeof tempStrLit}\n
      \n\
      ${typeof True}\n
      ${typeof False}\n
      \n\
      ${typeof name}\n
      \n\
      ${typeof specObjFuncExp}\n
      \n\
      ${typeof array}\n
      ${typeof arrBuffer}\n
      ${typeof dataView}\n
      ${typeof set}\n
      ${typeof weakSet}\n
      \n\
      ${typeof objectLiteral}\n
      ${typeof map}\n
      ${typeof weakMap}\n
      `,
    );

    return typeof parameter;
  };

  const callInvoke = specObjFuncExp(`argument`);
  console.log(callInvoke);

  /* Primitive */

  let primitive_1 = null;
  let primitive_2 = primitive_1;

  console.log(`primitive_1: ${primitive_1}`, `primitive_2 copied the 'null' value: ${primitive_2}`);

  primitive_1 = undefined;

  console.log(
    `primitive_1 (${primitive_1}) won't change the original 'null' copy for the primitive_2, so it stays null: ${primitive_2}`,
  );

  /* Reference */

  const reference_1 = {
    primitive_1,
    primitive_2,
  };

  const reference_2 = reference_1;
  console.log(
    `reference_2 (${reference_2}) copied reference_1 (${reference_1}) object typed variable's pointer to the stack not the value itself.`,
  );

  reference_1.primitive_1 = null;
  console.log(
    `This changed both ${reference_1.primitive_1} and ${reference_2.primitive_2} to 'null', because the value is changed in the heap. If we update one, it updates all and doesn't matter that if we would change the value at 'reference_2' either... same result.`,
  );
}
