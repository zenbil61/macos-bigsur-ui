import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
//import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";

import scss from "rollup-plugin-scss";
import { getFiles } from "./scripts/buildUtils";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const globals = {
  ...packageJson.devDependencies,
};

export default {
  input: "components/index.tsx",
  // chunk codes
  //input: [
  //  "components/index.tsx",
  //  ...getFiles("./components", extensions, exludedExtension),
  //],
  output: [
    {
      // dir:"dist", // for chunk
      name:"macosBigsurUi",
      file: "dist/index.js",
      format: "umd", // commonJS
      sourcemap: true,
      //external: ["**/*.test.*"],
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
    scss({
      output: true,
      output: "./dist/bundle.css",
      sourceMap: true,
      failOnError: true,
      outputStyle: "compressed",
      //include: ["/**/*.scss"],
      include: ["**/*.scss"],
      prefix: `
          @import './styles/globals';
        `,
    }),
    commonjs({
      exclude: ["node_modules", "dist", "esm", "lib"],
      ignoreGlobal: true,
    }),
  ],
  external: Object.keys(globals),
};

// Other useful plugins you might want to add are:
// @rollup/plugin-images - import image files into your components
// @rollup/plugin-json - import JSON files into your components
// rollup-plugin-terser - minify the Rollup bundle
