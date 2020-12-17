module.exports = {
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier",
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    jest: true,
    "cypress/globals": true,
  },
  plugins: ["eslint-plugin-cypress", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.js",
          "**/_story.*",
          "**/__tests__/**.js",
          "**/*.test.js",
        ],
      },
    ],
  },
};
 