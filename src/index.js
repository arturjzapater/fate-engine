const util = require('util')

const { makeList } = require('skills')
const { makeStress } = require('stress')

const skills = require('data/skills.json')
const tracks = require('data/stress.json')
// const ladder = require('data/ladder.json')

const input = process.argv[2] ? +process.argv[2] : undefined

const list = makeList({ list: skills })
const stress = makeStress(tracks)

const skillList = list(input)

const result = {
	skills: skillList,
	stress: stress(skillList),
}

console.log(util.inspect(result, { depth: null, colors: true }))
