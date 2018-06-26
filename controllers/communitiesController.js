const express = require('express')
const Community = require('../db/models/Community')
const Realtor = require('../db/models/Realtor')
const router = express.Router({ mergeParams: true })


module.exports = router