export default function dom() {
  console.log(document.URL);
  console.log(document.location);
  console.log(document);

  const $ = (id) => document.getElementById(id);
  const $$ = (query) => document.querySelector(query);
  const $$$ = (jquery) => document.querySelectorAll(jquery);
}
