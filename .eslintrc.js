module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:vue-scoped-css/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'import/order': 'off',
        'vue/no-v-html': 'off',
        'vue/no-unused-components': 'off',
        'no-unused-vars': 1,
        'no-undef': 2,
        'prefer-const': 2,
        'no-console': 0,
        'standard/computed-property-even-spacing': 'off',
        'object-shorthand': 'off',
        'vue-scoped-css/enforce-style-type': 'warn',
    },
}
