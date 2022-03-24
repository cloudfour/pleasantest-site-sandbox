import resolve from "@rollup/plugin-node-resolve";
import multiInput from "rollup-plugin-multi-input";

export default {
  input: ["src/**/*.js"],
  output: {
    format: "esm",
    dir: "dist",
  },
  plugins: [resolve(), multiInput()],
};
