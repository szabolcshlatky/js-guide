`use strict`;

/* Pseudo jQuery */

export const $ = (id) => document.getElementById(id);
export const $$ = (query) => document.querySelector(query);
export const $$$ = (jquery) => document.querySelectorAll(jquery);
