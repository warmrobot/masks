import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default [
{
  input: "./src/error.svelte",
  output: [
    {
      file: 'dist/bundle-dev-hydro.js',
      format: "iife",
      name: "App"
    }
  ],
  plugins: [resolve(), svelte({
    hydratable: true,
    dev: true
  })]
},
{
  input: "./src/removed-var/error.svelte",
  output: [
    {
      file: 'dist/bundle-removed-var.js',
      format: "iife",
      name: "App"
    }
  ],
  plugins: [resolve(), svelte({
    hydratable: true,
    dev: true
  })]
},
{
  input: "./src/error.svelte",
  output: [
    {
      file: 'dist/bundle-dev-no-hydro.js',
      format: "iife",
      name: "App"
    }
  ],
  plugins: [resolve(), svelte({
    dev: true
  })]
},
{
  input: "./src/error.svelte",
  output: [
    {
      file: 'dist/bundle-no-dev.js',
      format: "iife",
      name: "App"
    }
  ],
  plugins: [resolve(), svelte({
    hydratable: true,
  })]
},
{
  input: "./src/no-out/error.svelte",
  output: [
    {
      file: 'dist/bundle-no-out-animation.js',
      format: "iife",
      name: "App"
    }
  ],
  plugins: [resolve(), svelte({
    hydratable: true,
    dev: true
  })]
}
];
