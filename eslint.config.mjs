import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["eslint.config.mjs"],
  },
  {
    files: ["**/*.{js,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-undef": "error",
      "no-duplicate-case": "error",
    },
  },
]);
