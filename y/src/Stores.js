import { writable } from 'svelte/store';

export const indexStore = writable('NIFTY');
export const expiryDateStore = writable(null);
export const strikePriceStore = writable(null);