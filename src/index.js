const util = require('util')
const S = require('sanctuary')

const { makePyramid } = require('skills')
const { makeStress } = require('stress')

const skills = require('data/skills.json')
const tracks = require('data/stress.json')
// const ladder = require('data/ladder.json')

const input = process.argv[2] ? +process.argv[2] : undefined

const list = makePyramid(input)(skills)
const stress = makeStress(tracks)(list)

const result = S.unchecked.sequence(S.Maybe)({
	skills: list,
	stress,
})

console.log(util.inspect(result, { depth: null, colors: true }))
