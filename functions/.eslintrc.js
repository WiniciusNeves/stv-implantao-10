module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google", // Isso é o que traz as regras chatas, mas vamos anular abaixo
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,

    // --- REGRAS DESATIVADAS (OFF) ---
    "indent": "off", // Desliga verificação de indentação
    "@typescript-eslint/indent": "off", // Garante que o TS também não reclame de indentação
    "object-curly-spacing": "off", // Desliga erro de espaço em chaves { }
    "operator-linebreak": "off", // Desliga erro de onde colocar ? e :
    "eol-last": "off", // Desliga erro de linha em branco no final
    "max-len": "off", // Desliga erro de linha muito comprida
    "valid-jsdoc": "off", // Desliga exigência de comentários JSDoc
    "require-jsdoc": "off", // Desliga exigência de documentação
    "spaced-comment": "off", // Desliga erro de espaço em comentários //
    "no-trailing-spaces": "off", // Desliga erro de espaço em branco no fim da linha
  },
};