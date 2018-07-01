import React from 'react'
import styled from 'styled-components'

function NewCommunityForm(props) {
    return (
        <div>
            <h6>Please Enter Community Name and Zip Code</h6>
            <div>
                <form style={newFormStyle} onSubmit={props.createNewCommunity}>
                    <div>
                        <label htmlFor="communityName">Community Name</label>
                    </div>
                    <div>
                        <input onChange={props.handleCommunityChange} name="communityName" type="text" value={props.community.communityName} />
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code</label>
                    </div>
                    <div>
                        <input onChange={props.handleCommunityChange} name="zipCode" type="text" value={props.community.zipCode} />
                    </div>

                    <div>
                        <Button>Submit</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewCommunityForm


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