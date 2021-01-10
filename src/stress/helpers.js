const S = require('sanctuary')

const makeObject = (boxes, consequence = false) => ({
	boxes: Array.from({ length: boxes }, (_, i) => `[${i + 1}]`).join(''),
	consequence,
})

const makeBoxes = ([ level ]) =>
	level > 4
		? makeObject(4, true)
		: level > 2
		? makeObject(4)
		: makeObject(3)

const parseConsequences = S.pipe([
	S.filter(([ _, { consequence }]) => consequence),
	S.map(([ track ]) => `Mild (${track})`),
	S.concat([ 'Mild', 'Moderate', 'Severe' ]),
])

const parseTracks = S.map(([ track, { boxes }]) => [ track, boxes ])

module.exports = {
	makeBoxes,
	makeObject,
	parseConsequences,
	parseTracks,
}
