const S = require('sanctuary')
const {
	makeBoxes,
	makeObject,
	parseConsequences,
	parseTracks,
} = require('./helpers')

const makeTrack = ({ track, skill }) =>
	S.pipe([
		S.find(([ _, list ]) => list.includes(skill)),
		S.maybe_(() => makeObject(2))(makeBoxes),
		x => [ track, x ],
	])

const parseStress = tracks =>
	list => {
		const data = tracks.map(x => makeTrack(x)(list))
		return {
			tracks: parseTracks(data),
			consequences: parseConsequences(data),
		}
	}

const makeStress = tracks => S.map(parseStress(tracks))

module.exports = {
	makeStress,
}
