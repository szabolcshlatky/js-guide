`use strict`;

import { $, $$, $$$ } from '../base/pseudojQuery.js';

export default function dom() {
  /* Document Object Model */

  console.log(document);
  console.log(document.URL);
  console.log(document.location);
  console.log(document.documentElement);
  console.log(document.head);
  console.log(document.body);

  /* DT - HTMLCollection */

  console.log(document.documentElement.firstElementChild);
  console.log(document.documentElement.lastElementChild);

  console.log(document.head.children);
  console.log(document.head.children.length);

  console.log(document.head.nextElementSibling);
  console.log(document.body.previousElementSibling);

  console.log(document.head.parentElement);
  console.log(document.body.parentElement === document.documentElement);

  /* DT - NodeList */

  console.log(document.documentElement.firstChild);
  console.log(document.documentElement.lastChild);

  console.log(document.head.nextSibling);
  console.log(document.body.previousSibling);

  console.log(document.head.childNodes.length);
  console.log(document.body.childNodes);

  console.log(document.head.parentNode);
  console.log(document.body.parentNode === document.documentElement);

  /* Quering */

  console.log(document.getElementsByClassName(`DOM`));
  console.log(document.getElementsByTagName(`*`).length);
  console.log(document.getElementsByName(`checkbox`));

  const aside = document.documentElement.lastElementChild.children[2].lastElementChild;
  console.log(aside);

  const main = $(`main`);
  console.log(main);

  const domSection = $$(`.dom`);
  console.log(domSection);

  const closest = domSection.closest(`section`);
  console.log(closest);

  /* Elements */

  const div1 = document.createElement(`div`);
  div1.innerHTML = `<h5>div1 / h5 made with createElement / innerHTML</h5>`;
  domSection.prepend(div1);

  $$(`h5`).insertAdjacentHTML(`beforebegin`, `<p>p made with insertAdjacentHTML(..., beforebegin)</p>`);
  $$(`h5`).insertAdjacentHTML(`afterbegin`, `<p>p made with insertAdjacentHTML(..., afterbegin)</p>`);
  $$(`h5`).insertAdjacentHTML(`beforeend`, `<p>p made with insertAdjacentHTML(..., beforeend)</p>`);
  $$(`h5`).insertAdjacentHTML(`afterend`, `<p>p made with insertAdjacentHTML(..., afterend)</p>`);

  const div2 = document.createElement(`div`);
  div2.innerText = `div2 made with createElement / innerText`;
  domSection.append(div2);

  const div3 = document.createElement(`div`);
  div3.textContent = `div3 made with createElement / textContent`;
  domSection.appendChild(div3);

  const div4 = document.createElement(`div`);
  div4.innerText = `div4 made with .before()`;
  div3.before(div4);

  const div5 = div3.cloneNode(true);
  div5.textContent = `div5 made with cloneNode / .after()`;
  div4.after(div5);

  console.log(div5);
  div5.remove();

  /* Attributes */

  const placeholderJPG = $$(`.placeholderJPG`);

  console.log(placeholderJPG.attributes);
  console.log(placeholderJPG.getAttribute(`src`));
  placeholderJPG.setAttribute(`title`, `Attribute 'title' added with JS`);
  console.log(placeholderJPG.hasAttribute(`title`));
  placeholderJPG.setAttribute(`alt`, `Attribute 'alt' overwritten with JS`);
  placeholderJPG.removeAttribute(`title`);

  /* Styles */

  const imgBox = $$(`.imgBox`);
  console.log(imgBox.style);
  imgBox.style.padding = `1em`;
  // imgBox.style.color = prompt(`Enter a color for the text of the image box`, `red`);
  imgBox.style.backgroundColor = `goldenrod`;

  /* Iteration & Class */

  for (let node of document.body.childNodes) {
    console.log(node);
  }

  const divs = $$$(`.dom div`);
  console.log(divs);

  divs.forEach((div) => {
    if (div.classList.contains(`dom`)) {
      div.classList.remove(`dom`);
    } else if (!div.classList.contains(`dom`)) {
      div.classList.add(`dom`);
    } else {
      div.classList.toggle(`dom`);
    }

    console.log(div.classList);
  });

  /* Events: copy, mouse */

  const button = $$(`.btn`);
  const bubble = $$(`.bubble`);

  const warning = (e) => {
    alert(`Warning!`);
    bubble.onclick = null;
  };

  bubble.onclick = warning;
  button.addEventListener(`click`, warning);

  button.addEventListener(`click`, (e) => {
    e.stopImmediatePropagation(button.removeEventListener(`click`, warning));
    console.log(e);
    console.log(e.target);
  });

  const customEvent = new Event(`customEvent`);
  button.addEventListener(customEvent, (e) => {
    console.log(e);
  });

  button.dispatchEvent(customEvent);

  $$(`.dom figcaption`).addEventListener(`copy`, (e) => {
    alert(`OI! My content is copyright`);
    e.target.remove();
  });

  div1.addEventListener(`mousemove`, (e) => {
    div1.textContent = `X: ${e.clientX} / Y: ${e.clientY}`;
  });

  div2.addEventListener(`mouseenter`, (e) => {
    div2.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
  });

  div3.addEventListener(`wheel`, (e) => {
    div3.textContent = `e.pageX: ${e.pageX} / e.pageY: ${e.pageY}`;
  });

  /* Forms & Keyboard events */

  const form = $$(`.form-events`);
  const checkbox = $(`checkbox`);

  const input = $(`input`);
  const inputPattern = /^[a-zA-Z]{6,12}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Input value: ', input.value);
    console.log('Checkbox checked: ', checkbox.checked);
    form.reset();
  });

  input.addEventListener('keypress', (e) => {
    console.log('Keypress event: ', e.key);
    if (!inputPattern.test(input.value)) {
      console.log('Invalid input');
      input.style.backgroundColor = 'red';
    } else {
      console.log('Valid input');
    }
  });

  input.addEventListener('keydown', (e) => {
    console.log('Keydown event: ', e.key);
  });

  input.addEventListener('keyup', (e) => {
    console.log('Keyup event: ', e.key);
    if (inputPattern.test(input.value)) {
      console.log('Valid input');
    } else {
      console.log('Invalid input');
      input.style.backgroundColor = 'red';
      input.resetInput();
    }
  });

  checkbox.addEventListener('change', () => {
    console.log('Checkbox state: ', checkbox.checked);
  });
}
