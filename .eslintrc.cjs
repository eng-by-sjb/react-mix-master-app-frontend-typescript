module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    // "@typescript-eslint/no-meaningless-void-operator": "warn",
    // "@typescript-eslint/no-confusing-void-expression": "error",
    // "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/consistent-type-definitions": [1, "type"],
  },
};
