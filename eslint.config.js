"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = __importDefault(require("@eslint/js"));
const globals_1 = __importDefault(require("globals"));
const eslint_plugin_react_hooks_1 = __importDefault(require("eslint-plugin-react-hooks"));
const eslint_plugin_react_refresh_1 = __importDefault(require("eslint-plugin-react-refresh"));
exports.default = [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals_1.default.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            'react-hooks': eslint_plugin_react_hooks_1.default,
            'react-refresh': eslint_plugin_react_refresh_1.default,
        },
        rules: Object.assign(Object.assign(Object.assign({}, js_1.default.configs.recommended.rules), eslint_plugin_react_hooks_1.default.configs.recommended.rules), { 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], 'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ] }),
    },
];
