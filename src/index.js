const S = require('sanctuary')

const { makePyramid } = require('skills')
const { makeStress } = require('stress')

const defSkills = require('data/skills.json')
const defTracks = require('data/stress.json')


const makeSkills = ({ skills = defSkills, stressTracks = defTracks } = {}) =>
	cap => {
		const skillList = makePyramid(cap)(skills)
		const stress = makeStress(stressTracks)(skillList)

		return S.unchecked.sequence(S.Maybe)({
			skills: skillList,
			stress,
		})
	}

module.exports = {
	skills: {
		default: makeSkills(),
		list: makeSkills,
	},
}
