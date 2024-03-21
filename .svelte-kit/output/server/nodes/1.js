export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.n3ALjfJQ.js",
  "_app/immutable/chunks/scheduler.bALzG6-i.js",
  "_app/immutable/chunks/index.8Nsucz2u.js",
  "_app/immutable/chunks/stores.x-NXWZ0A.js",
  "_app/immutable/chunks/entry.X1EgrqFR.js",
  "_app/immutable/chunks/index.YeiUgQ2E.js",
];
export const stylesheets = [];
export const fonts = [];
