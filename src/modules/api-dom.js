import { remove } from 'lodash';

`use strict`;

export default function dom() {
  /* Document Object Model */

  console.log(document);
  console.log(document.documentElement);
  console.log(document.head);
  console.log(document.body);

  /* Pseudo jQuery */

  const $ = (id) => document.getElementById(id);
  const $$ = (query) => document.querySelector(query);
  const $$$ = (jquery) => document.querySelectorAll(jquery);

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
  console.log(document.getElementsByName(`name`));

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
  div1.innerHTML = `<h5>div1 made with createElement / innerHTML</h5>`;
  domSection.prepend(div1);

  const div2 = document.createElement(`div`);
  div2.innerText = `div2 made with createElement / innerText`;
  domSection.append(div2);

  const div3 = document.createElement(`div`);
  div3.textContent = `div3 made with createElement / textContent`;
  domSection.appendChild(div3);

  /* Iteration & Class */

  const divs = $$$(`div`);
  console.log(divs);

  divs.forEach((div) => {
    if (div.classList.contains(`dom`)) {
      div.classList.add(`dom`);
    } else if (!div.classList.contains(`dom`)) {
      div.classList.remove(`dom`);
    } else {
      div.classList.toggle(`dom`);
    }

    console.log(div.classList);
  });

  /* Attributes */
}
