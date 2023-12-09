`use strict`;

export default function bom() {
  /* Output */

  alert(`Hello World`);
  prompt(`Alert box with text input field. Which returns with a string`);
  confirm(`Alert box text with 'OK' and 'cancel' buttons. This way returns true or false.`);

  console.clear();
  console.log(console);
  console.log(window);

  /* Browser Object Model */

  console.log(window.outerWidth);
  console.log(outerHeight);

  console.log(window.offsetParent);
  console.log(window.offsetTop);
  console.log(window.offsetLeft);
  console.log(window.offsetWidth);
  console.log(window.offsetHeight);
  window.scrollWidth = 256;
  window.scrollHeight = 256;
  console.log(window.scrollWidth);
  console.log(window.scrollHeight);
  window.scrollLeft = 0;
  window.scrollTop = 0;
  console.log(window.scrollLeft);
  console.log(window.scrollTop);

  console.log(window.getBoundingClientRect());
  console.log(window.pageXOffset);
  console.log(window.pageYOffset);
  scrollBy(0, 0);
  scrollTo(0, 0);

  window.scrollIntoView(top);
  window.scrollIntoView(false);
}
