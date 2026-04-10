// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/no-conflict-set-directives': 'error',
    },
  },
];
