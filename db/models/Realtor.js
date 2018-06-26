const mongoose = require('mongoose')
const Schema = require('../schema')

const Realtor = mongoose.model('Realtor', Schema.RealtorSchema)

module.exports = Realtor