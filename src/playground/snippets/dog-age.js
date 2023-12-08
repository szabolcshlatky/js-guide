`use strict`;

const s7 = $$(`.s7`);
s7.addEventListener(`click`, () => {

  var dogAge = prompt(`How old is your dog?`);
  var humanAge = (dogAge - 2) * 4 + 21;
  alert(`Your dog is ` + humanAge + ` years old in human years.`);

});