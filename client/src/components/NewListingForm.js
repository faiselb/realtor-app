import React from 'react'
import styled from 'styled-components'

function NewListingForm(props) {
return (
    <div>
        <h6>Post Your New Listing</h6>
        <div>
            <form style={newFormStyle} onSubmit={props.createNewListing}>
                <div>
                    <label htmlFor="listingAddress">Address of Listing</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="listingAddress" type="text" value={props.listing.listingAddress} />
                </div>
                <div>
                    <label htmlFor="bedrooms">Number Of Bedrooms</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="bedrooms" type="text" value={props.listing.bedrooms} />
                </div>
                <div>
                    <label htmlFor="bathrooms">Number Of Bathrooms</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="bathrooms" type="text" value={props.listing.bathrooms} />
                </div>
                <div>
                    <label htmlFor="listingPrice">Listing Price</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="listingPrice" type="text" value={props.listing.listingPrice} />
                </div>
                <div>
                    <label htmlFor="yearbuilt">Year Built</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="yearbuilt" type="text" value={props.listing.yearbuilt} />
                </div>
                
                <div>
                    <label htmlFor="listingdescription">Enter Listing Description</label>
                </div>
                <div>
                    <input onChange={props.handleListingChange} name="listingdescription" type="text" value={props.listing.listingdescription} />
                </div>

                <div>
                    <Button>Submit</Button>
                </div>

            </form>
        </div>
    </div>
)
}

export default NewListingForm


const newFormStyle = {

width: 300,
fontSize: 14,
color: '#05B8CC',
padding: '20px',

}

const Button = styled.button`
border-radius: 5px;
background-color: #05B8CC;
color: #fff;
border-radius: 5px;
padding: 5px;
margin: 8px;
`