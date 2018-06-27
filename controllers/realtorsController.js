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

router.delete('/:realtorId', async (request, response) => {
    try {
        await Realtor.findByIdAndRemove(request.params.realtorId)
        response.send('completed delete')
    }
    catch (err) {
        console.log(err)
    }
})

router.patch('/:realtorId', async (request, response) => {
    try {

        const updatedRealtorInfo = await Realtor.findByIdAndUpdate(request.params.realtorId, request.body, { new: true })
        response.json(updatedRealtorInfo)
    }
    catch (err) {
        console.log(err)
        response.sendStatus(500)

    }
})


module.exports = router