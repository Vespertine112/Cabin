export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/2.nKt92Hxa.js",
  "_app/immutable/chunks/scheduler.bALzG6-i.js",
  "_app/immutable/chunks/index.8Nsucz2u.js",
  "_app/immutable/chunks/stores.d2mhU7YY.js",
  "_app/immutable/chunks/index.YeiUgQ2E.js",
  "_app/immutable/chunks/index.V82jZZf0.js",
  "_app/immutable/chunks/tippy.esm.vXDZ6XwW.js",
];
export const stylesheets = [
  "_app/immutable/assets/2.6QLSxe3_.css",
  "_app/immutable/assets/material.k4BleN6d.css",
];
export const fonts = [];
