import globals from "globals";
import html from "@html-eslint/eslint-plugin";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const htmlRules = {
    ...html.configs["flat/recommended"].rules,
    "@html-eslint/attrs-newline": ["error", {
        "closeStyle": "newline",
        "ifAttrsMoreThan": 1,
    }],
}

/** @type {import('eslint').Linter.Config[]} */
export default [
    // HTML
    { 
        ...html.configs["flat/recommended"], 
        files: ["src/**/*.html"], 
        rules: htmlRules,
    },

    // JS/TS
    { 
        ...pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        files: ["src/**/*.{js,mjs,cjs,ts}"]
    },
    
    {
        languageOptions: {
            globals: globals.browser,
        }
    },
];
