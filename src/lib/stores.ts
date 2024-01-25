import { readable, writable } from "svelte/store";


let initialState:boolean = false; 
export const globalStore = writable(initialState);
export const updateTransitionState = (newState:boolean) => {
    globalStore.update((state) => (newState));
};
export const readableTransitionState = {
    subscribe: globalStore.subscribe,
};

let initalTopbarName = "";
export const topbarName = writable(initalTopbarName);
export const updateTopbarName = (newName:string) => {
    topbarName.update((state) => (newName));
};
export const readableTopbarName = {
    subscribe: topbarName.subscribe,
};