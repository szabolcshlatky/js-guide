export default function variables() {
  var declare; // declare variable
  declare = undefined; // assign value (undefined (automatic): For variables that have not yet been defined.)

  var define = null; // declare & assign = define (null (object): Explicitly set a variable with no value.)

  console.log(declare + 3, `Our data-type is ${undefined}`, define + 3, `Our data-type is ${null}`);

  define = undefined; // Re-assign with new value

  /* SCOPING example */

  var scopeLess = undefined;
  let globalScope = undefined; // global scope variable, cannot be redefined in the same scope.
  const blockScope = undefined; // let and const are not hoisted, so they cannot be used before they are declared.

  console.log(scopeLess, globalScope, blockScope); // Retrieves (return) value

  if (true) {
    globalScope = null;
    console.log(`Global variable inside: ${globalScope}`); // returns null

    const blockScope = null;
    console.log(`Can be redefine inside block, but cannot be access from global scope: ${blockScope}`); // returns null

    /* var define = null;
     * console.log(`Don NOT use var: ${scopeLess}`);
     * returns error */

    if (true) {
      console.log(`Inside nested code block: ${blockScope}`);

      let localScope = undefined;
      console.log(localScope); // returns undefined
    }
  }

  console.log(`Global scope and block scope outside: ${globalScope} ${blockScope}`); // returns null and undefined

  // console.log(localScope); // returns error
}
