module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "react/prop-types": 0,
  },
  overrides: [
    // typescript
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: ["*.test.js", "gatsby-node.js", "gatsby-config.js"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "react/prop-types": 0,
      },
    },

    // gatsby and eslint config files
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
