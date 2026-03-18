module.exports = {
  root: true,
  parser: "astro-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "prettier" // Prettierと統合
  ],
  plugins: ["astro"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser"
    },
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ]
    }
  ]
};
