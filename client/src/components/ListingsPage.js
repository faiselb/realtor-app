import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NewListingForm from './NewListingForm'
import GoTrashcan from 'react-icons/lib/go/trashcan'
import { PageBottom } from './Styles'

class ListingsPage extends Component {
    state = {
        community: {},
        listing: {

            listingAddress: '',
            bedrooms: '',
            bathrooms: '',
            listingPrice: '',
            yearbuilt: '',
            listingphoto_url: '',
            listingdescription: ''

        }
    }

    componentWillMount = () => {
        this.getAllListings()
    }

    getAllListings = async () => {
        try {
            const realtorId = this.props.match.params.realtorId
            const communityId = this.props.match.params.communityId
            const response = await axios.get(`/api/realtors/${realtorId}/communities/${communityId}/listings`)
            this.setState({ community: response.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    handleListingChange = (event) => {
        event.preventDefault()
        const listing = { ...this.state.listing }
        listing[event.target.name] = event.target.value
        this.setState({
            listing
        })

    }

    createNewListing = async (event) => {
        event.preventDefault()
        const realtorId = this.props.match.params.realtorId
        const communityId = this.props.match.params.communityId

        const payload = {
            listingAddress: this.state.listing.listingAddress,
            bedrooms: this.state.listing.bedrooms,
            bathrooms: this.state.bathrooms,
            listingPrice: this.state.listing.listingPrice,
            yearbuilt: this.state.listing.yearbuilt,
            listingphoto_url: this.state.listing.listingphoto_url,
            listingdescription: this.state.listing.listingdescription,
        }

        const blankForm = {

            listingAddress: '',
            bedrooms: '',
            bathrooms: '',
            listingPrice: '',
            yearbuilt: '',
            listingphoto_url: '',
            listingdescription: ''
        }
        await axios.post(`/api/realtors/${realtorId}/communities/${communityId}/listings`, payload)
        await this.getAllListings()
        this.setState({
            addFormShowing: false,
            listing: blankForm
        })
    }

    deleteListing = async (listing) => {
        try {
            const realtorId = this.props.match.params.realtorId
            const communityId = this.props.match.params.communityId
            axios.delete(`/api/realtors/${realtorId}/communities/${communityId}/listings/${listing._id}`)
            window.location.reload()
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

        let listingsList = []
        if (this.state.community && this.state.community.listings) {
            listingsList = this.state.community.listings.map((listing, index) => {
                return <div>
                    <Listing key={index}>
                        < div className='bounding-secondbox'>
                            <div><BoldSpan>Listing Address:</BoldSpan>{listing.listingAddress}</div>
                            <div><BoldSpan>Listing Price:</BoldSpan>{listing.listingPrice}</div>
                            <div><BoldSpan>Number of Bedrooms:</BoldSpan>{listing.bedrooms}</div>
                            <div><BoldSpan>Year Built:</BoldSpan>{listing.yearbuilt}</div>
                            <div><BoldSpan>Short Decription:</BoldSpan>{listing.listingdescription}</div>
                        </div>

                    </Listing>
                    <TrashIcon type="submit" onClick={() => this.deleteListing(listing)}><GoTrashcan /> </TrashIcon>
                </div>
            })
        }

        return (
            <ListingsListContainer>

                <h4>Communities Listings</h4>

                <CommunityTitle><BoldSpan>Community: </BoldSpan>{this.state.community.communityName}</CommunityTitle>
                <zipCode><BoldSpan>Zip Code: </BoldSpan>{this.state.community.zipCode}</zipCode>
                <ListingList>
                    {listingsList}

                </ListingList>
                <Link to={`/realtors/${this.props.match.params.realtorId}/communities`}>
                    <Button>
                        Back to Communities
                    </Button>
                </Link >
                <NewListingForm
                    createNewListing={this.createNewListing}
                    handleListingChange={this.handleListingChange}
                    listing={this.state.listing}
                />

                <PageBottom></PageBottom>

            </ListingsListContainer>
        )
    }
}

export default ListingsPage

const ListingList = styled.div`
    background-color: #f4f4f4;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    @media (max-width: 400px) {
        padding: 0 16px;
        
    }
`

const Listing = styled.div`
    
    border: 5px #545454 solid;  
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    width: 320px; 
    height: 320px;
    margin: 20px 20px 20px 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px; 
    &:hover {
        border: 8px #000000 solid; 
       
    }
    @media (max-width: 700px) {
    width: 320px;
    height: 320px;
    margin: 25px 10px 0px 10px;
}
`

const Button = styled.button`
border-radius: 5px;
background-color: #05B8CC;
color: #ffffff;
border-radius: 5px;
padding: 5px;
margin: 8px;
`
const CommunityTitle = styled.h5`
    padding-left: 20px;
`

const zipCode = styled.div`
    font-size: 20px;
    padding-left: 20px;
`

const BoldSpan = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #05B8CC;
`

const TrashIcon = styled.div`
    font-size: 16px;
    padding-bottom: 10px;
    color: #000000;
    width: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    &:hover {
        color: #571B0D;
}
`

const ListingsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`