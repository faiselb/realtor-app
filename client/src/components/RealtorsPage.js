import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'
import SubmitButton from './SubmitButton'
import GoTrashcan from 'react-icons/lib/go/trashcan'
import NewRealtor from './NewRealtor';
import { PageBottom } from './Styles'

class RealtorsPage extends Component {
    state = {
        realtors: [],
        realtor: {
            name: '',
            address: '',
            city: '',
            state: ''
        },
        addFormShowing: false
    }

    componentWillMount = () => {
        this.getAllRealtors()
    }

    toggleAddRealtorForm = () => {
        const addFormShowing = !this.state.addFormShowing
        this.setState({
            addFormShowing
        })
    }

    async getAllRealtors() {
        try {
            const response = await axios.get('/api/realtors')
            const realtors = response.data
            this.setState({ realtors: realtors })
        }

        catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const realtor = { ...this.state.realtor }
        realtor[event.target.name] = event.target.value
        this.setState({ realtor })
    }

    deleteRealtor = async (realtor) => {
        try {
            axios.delete(`/api/realtors/${realtor._id}`)
            const indexToDelete = this.state.realtors.indexOf(realtor)
            const newRealtors = [...this.state.realtors]
            newRealtors.splice(indexToDelete, 1)
            this.setState({ realtors: newRealtors })
        }
        catch (err) {
            console.log(err)
        }
    }

    createRealtor = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.realtor.name,
            address: this.state.realtor.address,
            city: this.state.realtor.city,
            state: this.state.realtor.state
        }
        const blankForm = {
            name: '',
            address: '',
            city: '',
            state: ''
        }

        await axios.post('/api/realtors', payload)
        await this.getAllRealtors()
        this.setState({ realtor: blankForm })
    }

    render() {

        const realtorsList = this.state.realtors.map((realtor, index) => {
            return (<RealtorContainer key={index}><Link to={`/realtors/${realtor._id}/communities`}><RealtorSpan>{realtor.name}</RealtorSpan></Link>
                <TrashSpan type="submit" onClick={() => this.deleteRealtor(realtor)}><GoTrashcan /> </TrashSpan>
                <CityState>{realtor.city}, {realtor.state}</CityState>
            </RealtorContainer>)
        })

        const newFormStyle = {

            width: 300,
            fontSize: 14,
            color: '#05B8CC',
            padding: '20px',

        }

        return (

            <RealtorList>
                <h4>Our Realtors</h4>
                <div>
                    {realtorsList}
                </div>
                <div>
                    <ToggleFormButton onClick={this.toggleAddRealtorForm}>
                        Sign Up
                </ToggleFormButton>

                    {
                        this.state.addFormShowing ?
                            <div>
                                <NewRealtor realtorsList={realtorsList} createRealtor={this.createRealtor}
                                    handleChange={this.handleChange} realtor={this.state.realtor} />

                            </div>
                            : null
                    }

                </div>

                <PageBottom></PageBottom>
            </RealtorList>
        )
    }
}

export default RealtorsPage