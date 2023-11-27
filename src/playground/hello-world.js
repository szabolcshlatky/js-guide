`use strict`;

const s1 = $$(`.s1`);
s1.addEventListener(`click`, () => {
  window.alert(`Hello World!`);

  var yourName = prompt(`What is your name?`);
  alert(`Greetings ` + yourName + `!`);
});