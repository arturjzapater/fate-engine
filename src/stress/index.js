const S = require('sanctuary')
const {
	makeBoxes,
	makeObject,
	parseConsequences,
	parseStress,
} = require('./helpers')

const makeTrack = ({ track, skill }) =>
	S.pipe([
		S.find(([ _, list ]) => list.includes(skill)),
		S.maybe_(() => makeObject(2))(makeBoxes),
		x => [ track, x ],
	])

const makeStress = tracks =>
	list => {
		const data = tracks.map(x => makeTrack(x)(list))
		return {
			tracks: parseStress(data),
			consequences: parseConsequences(data),
		}
	}

module.exports = {
	makeStress,
	makeTrack,
	parseConsequences,
	parseStress,
}
