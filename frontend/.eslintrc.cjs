module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:all', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'multiline-comment-style': 'off',
		'capitalized-comments': 'off',
		'sort-keys': 'off',
		'func-style': 'off',
		'no-ternary': 'off',
		'sort-imports': 'off',
		'no-inline-comments': 'off',
		'line-comment-position': 'off',
		'no-console': 'off',
		'max-lines': 'off',
		'max-statements': 'off',
		'max-lines-per-function': 'off',
		'no-await-in-loop': 'off',
		'id-length': 'off',
		'no-negated-condition': 'off',
		'no-warning-comments': 'off',
		'no-plusplus': 'off',
		'no-return-await': 'off',
		'class-methods-use-this': 'off',
		'no-magic-numbers': 'off',
		'one-var': 'off',
		'no-underscore-dangle': 'off',
		'new-cap': 'off'
	}
}
