const express = require('express')
const Community = require('../db/models/Community')
const Realtor = require('../db/models/Realtor')
const router = express.Router({ mergeParams: true })


router.get('/', (request, response) => {
    const realtorId = request.params.realtorId
    Realtor.findById(realtorId)
        .then((realtor) => {
            response.json(realtor)
        })
        .catch((err) => {
            console.log(err)
        })
})



module.exports = router