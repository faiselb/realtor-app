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

router.post('/', async (request, response) => {
    try {
        const realtor = await Realtor.findById(request.params.realtorId)
        const newCommunity = await Community.create(request.body)
        realtor.communities.push(newCommunity)
        await realtor.save()
        response.json(realtor)
    }
    catch (err) {
        console.log(err)
    }
})



router.delete('/:communityId', async (request, response) => {
    console.log("Deleting community:", request.params.communityId)
    try {
        const realtor = await Realtor.findById(request.params.realtorId)
        console.log("Got realtor:", realtor)
        const community = realtor.communities.id(request.params.communityId).remove()
        await realtor.save()
        console.log("Saved realtor after removing community")
        response.json(community)
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router