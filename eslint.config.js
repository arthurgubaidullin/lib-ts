import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/method-signature-style": "error",
      "require-await": "error",
      "arrow-body-style": ["error", "as-needed"],
    },
  },
  { ignores: ["**/dist/**", "**/.turbo/**", "**/node_modules/**"] },
];
