import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import SubmitButton from './SubmitButton'


function RealtorEdit(props) {
        
    return (
        <div>
            <EditRealtorTitle>Edit Realtor Info</EditRealtorTitle>
            <form style={newFormStyle} onSubmit={props.updateRealtor}>
                <div><Button>Submit Updates</Button></div>
                <div>
                    <label htmlFor="name">Realtor Name</label>
                    <input onChange={props.handleRealtorChange} name="name" type="text" value={props.realtor.name} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input onChange={props.handleRealtorChange} name="address" type="text" value={props.realtor.address} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input onChange={props.handleRealtorChange} name="city" type="text" value={props.realtor.city} />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input onChange={props.handleRealtorChange} name="state" type="text" value={props.realtor.state} />
                </div>
            </form>
        </div>
    )

}
export default RealtorEdit

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

const EditRealtorTitle = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
`