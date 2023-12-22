`use strict`;

import { $, $$, $$$ } from './pseudojQuery.js';

export const policyBtn = $$(`.policy-btn`);
export const policyDialog = $$(`.policy`);
export const policyCloseX = $$(`.policy__close`);

export const showPolicy = policyBtn.addEventListener(`click`, () => {
  policyDialog.showModal();
});

export const hidePolicy = policyCloseX.addEventListener(`click`, () => {
  policyDialog.close();
});

// OPTIONAL way that click anywhere the pop-up will be closed:
// popup.addEventListener('click', hidePopup);
