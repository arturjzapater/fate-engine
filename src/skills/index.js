const S = require('sanctuary')
const { shuffle, summation } = require('helpers')

const checkLength = num =>
	list =>
		summation(num) > list.length
			? S.Nothing
			: S.Just(list)

const dropSummation = S.compose(S.drop)(summation)

const makeRow = num => S.pipe([
	dropSummation(num),
	S.chain(S.take(num + 1)),
	S.fromMaybe([]),
])

const makeTiers = (ladder, cap) =>
	skillList =>
		Array.from(
			{ length: cap },
			(_, i) => [ ladder[cap - i], makeRow(i)(skillList) ]
		)

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
