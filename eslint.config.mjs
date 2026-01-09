// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "warn",
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
    ignores: ["node_modules/**/*", ".nuxt/**/*", ".output/**/*", "dist/**/*"],
  },
  eslintConfigPrettier
);
