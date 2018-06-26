const mongoose = require('mongoose')
const Schema = require('../schema')

const Listing = mongoose.model('Listing', Schema.ListingSchema)

module.exports = Listing