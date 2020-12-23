const { makeList } = require('skills')

const skills = require('data/skills.json')
const ladder = require('data/ladder.json')

const input = process.argv[2] ? +process.argv[2] : undefined

const list = makeList({ list: skills, ladder })

console.log(list(input))
