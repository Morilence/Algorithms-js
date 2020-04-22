module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        "indent": ["error", 4],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "array-bracket-spacing": ["error", "never"],
        "no-constant-condition": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
