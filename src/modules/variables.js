`use strict`;

export default function variables() {
  var declare;
  declare = undefined;

  var define = null;

  console.log(
    `Declaring var.iable (var declare)
    Assigning ('=' is the assignment operator) value (declare = undefined): \n`,
    declare,
    `\n\ Our data-type is undefined (default if we not assign value).
    Defining (declare & assign) var.iable (var define = null): \n`,
    define,
    `\n\ Our data-type is null (object explicitly set a var.iable with no value).
    With 'declare' and 'define' we retrieve (return) its value.`,
  );

  define = undefined;

  console.log(`Variables can't be redefined in the same scope but we can reassign it (define = undefined):`, define);

  /* SCOPING example */

  let globalScope = undefined;
  const blockScope = undefined;
  console.log(
    `Keywords let and const are not hoisted, so they cannot be used before they are declared
    (let globalScope = undefined): \n`,
    globalScope,
    `Constants cannot be reassigned.
    (const blockScope = undefined): \n`,
    blockScope,
  );

  {
    var define = null;
    globalScope = null;
    const blockScope = null;

    console.log(
      `Inside the code block: (
        var define = null;
        globalScope = null;
        const blockScope = null;):
      `,
      define,
      globalScope,
      blockScope,
    );

    {
      var localScope = undefined;

      console.log(
        `If we retrieve a value in a code block it will check the closest parent's (blockScope) value where it was defined. ('null' from one block above and not 'undefined' from the global object.):`,
        blockScope,
      );
    }
  }
  console.log(
    `Var is scopeLess so we can access it from outside the code block
    (localScope): \n`,
    localScope,
    `\n\ We reassigned the value of the globalScope inside the code block
    (globalScope): \n`,
    globalScope,
    `\n\ We can't access the blockScope from outside the code block so we get back the globalScope's value
    (blockScope): \n`,
    blockScope,
  );
}
