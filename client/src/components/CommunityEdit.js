import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import SubmitButton from './SubmitButton'


function CommunityEdit(props) {
    
return (
    <div>
        <h6>Edit Community Info</h6>
        <form style={newFormStyle} onSubmit={props.updateCommunity}>
            <div>
                <label htmlFor="communityName">Community Name</label>
                <input onChange={props.handleCommunityChange} name="communityName" type="text" value={props.community.communityName} />
            </div>
            <div>
                <label htmlFor="zipCode"> Zip Code</label>
                <input onChange={props.handleCommunityChange} name="zipCode" type="text" value={props.community.zipCode />
            </div>
                
            <div>
                <Button>Submit</Button>
            </div>
        </form>
    </div>
)

}

export default CommunityEdit

const newFormStyle = {

width: 300,
fontSize: 14,
color: '#05B8CC',
padding: '20px',

}

const Button = styled.button`
border-radius: 5px;
background-color: #05B8CC;
color: #bfd964;
border-radius: 5px;
padding: 5px;
margin: 8px;
`