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


module.exports = router