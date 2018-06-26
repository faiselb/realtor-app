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

router.post('/', (request, response) => {
    const newRealtorInfo = request.body
    newRealtor = Realtor.create(newRealtorInfo)
        .then(() => {
            response.json(newRealtor)
        })
        .catch((err) => {
            console.log(err)
        })
})



module.exports = router