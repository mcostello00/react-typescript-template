module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx|jsx)$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
  },
};
