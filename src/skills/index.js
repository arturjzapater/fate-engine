const S = require('sanctuary')
const { shuffle } = require('helpers')
const { checkLength, makeTiers } = require('./helpers')

const makeList = ({ list, ladder }) =>
	(input = 4) =>
		S.pipe([
			shuffle,
			checkLength(input),
			S.map(makeTiers(ladder, input)),
			S.map(Object.fromEntries),
			S.fromMaybe({}),
		])(list)

module.exports = {
	makeList,
}
