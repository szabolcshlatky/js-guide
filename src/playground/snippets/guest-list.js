`use strict`;

const s11 = $$(`.s11`);
s11.addEventListener(`click`, () => {

  var guestList = [`Nóra`, `Öreg`, `Kamásli`, `Hédi`, `Pisti`, `Leia`];
  var guestName = prompt(`What is your name?`);

  if (guestList.includes(guestName)) {
    alert(`Welcome ` + guestName + `!`);
  } else {
    alert(`Sorry, maybe next time.`);
  }

});