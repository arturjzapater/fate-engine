const S = require('sanctuary')
const { shuffle } = require('helpers')
const { checkLength, makeTiers } = require('./helpers')

const makePyramidList = (tiers) => S.compose(S.map(shuffle))(checkLength(tiers))

const makePyramid = (tiers = 4) =>
	S.compose(S.map(makeTiers(tiers)))(makePyramidList(tiers))

module.exports = {
	makePyramid,
	makePyramidList,
}
