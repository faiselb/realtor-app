const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const ListingSchema = new Schema(
    {
        listingAddress: String,
        bedrooms: String,
        bathrooms: String,
        listingPrice: String,
        yearbuilt:String,
        listingdescription: String,
    },
    {
        timestamps: {}
    }
)

module.exports = {
    ListingSchema
}
