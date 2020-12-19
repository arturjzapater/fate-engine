const S = require('sanctuary')
const { fromNullable, shuffle, summation } = require('helpers')
const skills = require('data/skills.json')

const parseInput = S.pipe([
	fromNullable,
	S.map(Number),
	S.fromMaybe(4),
])

const input = parseInput(process.argv[2])

const takeSummation = S.compose(S.take)(summation)

const makeList = S.pipe([
	shuffle,
	takeSummation(input),
])

console.log(makeList(skills))
