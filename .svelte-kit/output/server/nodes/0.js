export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/0.nGKbaLz5.js",
  "_app/immutable/chunks/scheduler.bALzG6-i.js",
  "_app/immutable/chunks/index.8Nsucz2u.js",
  "_app/immutable/chunks/each.uvXnbnhl.js",
  "_app/immutable/chunks/stores.x-NXWZ0A.js",
  "_app/immutable/chunks/entry.X1EgrqFR.js",
  "_app/immutable/chunks/index.YeiUgQ2E.js",
  "_app/immutable/chunks/index.V82jZZf0.js",
  "_app/immutable/chunks/stores.d2mhU7YY.js",
  "_app/immutable/chunks/tippy.esm.vXDZ6XwW.js",
];
export const stylesheets = ["_app/immutable/assets/0.2bwRv0S3.css"];
export const fonts = [];
