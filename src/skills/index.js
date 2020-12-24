const S = require('sanctuary')
const { shuffle } = require('helpers')
const { checkLength, makeTiers } = require('./helpers')

const makeList = ({ list }) =>
	(input = 4) =>
		S.pipe([
			shuffle,
			checkLength(input),
			S.map(makeTiers(input)),
			S.fromMaybe([]),
		])(list)

module.exports = {
	makeList,
}
