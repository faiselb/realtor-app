const express = require('express')
const Community = require('../db/models/Community')
const Realtor = require('../db/models/Realtor')
const Listing = require('../db/models/Listing')
const router = express.Router({ mergeParams: true })


module.exports = router