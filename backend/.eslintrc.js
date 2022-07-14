module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'eslint:all',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
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
		'new-cap': 'off',
		'no-useless-constructor': 'off',
		'no-return-await': 'off',
		'class-methods-use-this': 'off',
		'no-magic-numbers': 'off'
	}
}
