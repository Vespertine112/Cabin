import * as server from "../entries/pages/about/_page.server.ts.js";

export const index = 3;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/about/_page.svelte.js"))
    .default);
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = [
  "_app/immutable/nodes/3.jR8GHPCe.js",
  "_app/immutable/chunks/scheduler.bALzG6-i.js",
  "_app/immutable/chunks/index.8Nsucz2u.js",
  "_app/immutable/chunks/index.V82jZZf0.js",
  "_app/immutable/chunks/tippy.esm.vXDZ6XwW.js",
  "_app/immutable/chunks/standards.jAja-OFF.js",
];
export const stylesheets = [
  "_app/immutable/assets/3.zDB21jJA.css",
  "_app/immutable/assets/material.k4BleN6d.css",
];
export const fonts = [];
