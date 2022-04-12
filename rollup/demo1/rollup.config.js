import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: ["./src/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "es",
    name: "experience",
  },
  plugins: [resolve(), commonjs(), babel(), json()],
  external: ["the-answer"], // 某些库保持外部引用状态，来告诉rollup.js哪些是外部的类库。

};
