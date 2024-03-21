import * as server from "../entries/pages/experience/_page.server.ts.js";

export const index = 4;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/experience/_page.svelte.js")
  ).default);
export { server };
export const server_id = "src/routes/experience/+page.server.ts";
export const imports = [
  "_app/immutable/nodes/4.NYQ615rv.js",
  "_app/immutable/chunks/scheduler.bALzG6-i.js",
  "_app/immutable/chunks/index.8Nsucz2u.js",
  "_app/immutable/chunks/each.uvXnbnhl.js",
  "_app/immutable/chunks/stores.d2mhU7YY.js",
  "_app/immutable/chunks/index.YeiUgQ2E.js",
  "_app/immutable/chunks/index.V82jZZf0.js",
  "_app/immutable/chunks/standards.jAja-OFF.js",
];
export const stylesheets = [
  "_app/immutable/assets/4.uIMLQtgu.css",
  "_app/immutable/assets/material.k4BleN6d.css",
];
export const fonts = [];
