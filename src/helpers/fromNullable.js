const S = require('sanctuary')

module.exports = x => x == null
	? S.Nothing
	: S.Just(x)
