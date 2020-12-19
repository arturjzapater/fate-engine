module.exports = {
	extends: 'pixie',
	rules: {
		'max-len': [ 'error', {
			ignoreUrls: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
		}],
		'newline-per-chained-call': 'error',
		'object-curly-newline': [ 'error', { consistent: true }],
		'object-property-newline': [ 'error', {
			allowAllPropertiesOnSameLine: true,
		}],
	},
}
