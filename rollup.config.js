import typescript from "@wessberg/rollup-plugin-ts";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";

export default {
  plugins: [
    json(),
    resolve(),
    typescript(),
    commonjs({ include: /node_modules/ }),
  ],
};
