const express = require('express')
const Realtor = require('../db/models/Realtor')

const router = express.Router()


router.get('/', (request, response) => {
    Realtor.find({})
        .then((realtors) => {
            response.json(realtors)
        })
        .catch((err) => console.log(err))
})




module.exports = router