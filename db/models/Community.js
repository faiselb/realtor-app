const mongoose = require('mongoose')
const Schema = require('../schema')

const Community = mongoose.model('Community', Schema.CommunitySchema)

module.exports = Community