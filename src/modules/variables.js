`use strict`;

export default function variables() {
  /* Variable declaration */

  var declare;
  declare = undefined;

  var define = null;

  console.log(declare);
  console.log(define);

  define = undefined;

  console.log(define);

  /* Scopes */

  let globalScope = undefined;
  const blockScope = undefined;

  console.log(globalScope);
  console.log(blockScope);

  {
    var define = null;
    globalScope = null;
    const blockScope = null;

    console.log(define);
    console.log(globalScope);
    console.log(blockScope);

    {
      var localScope = undefined;
      console.log(blockScope);
    }
  }

  console.log(localScope);
  console.log(globalScope);
  console.log(blockScope);
}
