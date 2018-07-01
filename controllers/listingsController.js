const express = require('express')
const Community = require('../db/models/Community')
const Realtor = require('../db/models/Realtor')
const Listing = require('../db/models/Listing')
const router = express.Router({ mergeParams: true })


router.get('/', async (request, response) => {
    try {
        realtorId = request.params.realtorId
        communityId = request.params.communityId
        const realtor = await Realtor.findById(realtorId)
        const community = await realtor.communities.id(communityId)
        await response.json(community)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (request, response) => {
    try {
        const realtorId = request.params.realtorId
        const communityId = request.params.communityId
        const newListing = await Listing.create(request.body)
        const realtor = await Realtor.findById(realtorId)
        const community = await realtor.communities.id(communityId)
        community.listings.push(newListing)
        await realtor.save()
        response.json(community)
    }
    catch (err) {
        console.log(err)
    }
})

router.delete('/:listingId', async (request, response) => {
    console.log("Deleting:", request.params.communityId)
    try {
        const realtor = await Realtor.findById(request.params.realtorId)
        const community = realtor.communities.id(request.params.communityId)
        community.listings.id(request.params.listingId).remove()
        await realtor.save()
        response.json(community)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router