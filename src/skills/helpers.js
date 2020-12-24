const S = require('sanctuary')
const { summation } = require('helpers')

const dropSummation = S.compose(S.drop)(summation)

const makeRow = num => S.pipe([
	dropSummation(num),
	S.chain(S.take(num + 1)),
	S.fromMaybe([]),
])

const checkLength = num =>
list =>
summation(num) > list.length
? S.Nothing
: S.Just(list)

const makeTiers = (cap) =>
	skillList =>
		Array.from(
			{ length: cap },
			(_, i) => [ cap - i, makeRow(i)(skillList) ]
		)

module.exports = {
	checkLength,
	makeTiers,
}
