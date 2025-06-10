import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
// import { Linter } from 'eslint'

export default [
    stylistic.configs.recommended,
    pluginJs.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        files: [
            "**/*.{js,ts}",
        ],
    },
    {
        ignores: ["dist/"],
    },
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["eslint.config.ts", "__fixtures__/*.ts", "__tests__/*.ts"],
                    defaultProject: "tsconfig.json",
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/indent": ["error", 4],
        },
    },
]; // satisfies Linter.Config[]
