import React from 'react'
import SubmitButton from './SubmitButton'

function NewRaeltor(props) {
return (
    <div>

        <div>
            <form style={newFormStyle} onSubmit={props.createRealtor}>
                <div>
                    <label htmlFor="name"> Realtor Name</label>
                </div>
                <div>
                    <input className="form-input" onChange={props.handleChange} name="name" type="text" value={props.realtor.name} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                </div>
                <div>
                    <input onChange={props.handleChange} name="address" type="text" value={props.realtor.address} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                </div>
                <div>
                    <input onChange={props.handleChange} name="city" type="text" value={props.realtor.city} />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                </div>
                <div>
                    <input onChange={props.handleChange} name="state" type="text" value={props.realtor.state} />
                </div>
                <div>
                    <SubmitButton />
                </div>

            </form>
        </div>
    </div>
)
}

export default NewRaeltor


const newFormStyle = {

    width: 300,
    fontSize: 14,
    color: '#05B8CC',
    padding: '20px',

}