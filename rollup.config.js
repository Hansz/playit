import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.js",
    output: [
      {
        format: "esm",
        file: "dist/library.mjs",
      },
      {
        format: "cjs",
        file: "dist/library.js",
      },
    ],
    plugins: [peerDepsExternal(), scss(), image(), svg()],
  },
];
