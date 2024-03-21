import { w as writable } from "./index.js";
let initialState = false;
const globalStore = writable(initialState);
({
  subscribe: globalStore.subscribe,
});
let initalTopbarName = "";
const topbarName = writable(initalTopbarName);
const updateTopbarName = (newName) => {
  topbarName.update((state) => newName);
};
const readableTopbarName = {
  subscribe: topbarName.subscribe,
};
export { readableTopbarName as r, updateTopbarName as u };
