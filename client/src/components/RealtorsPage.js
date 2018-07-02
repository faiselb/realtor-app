import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
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

        return (

            <RealtorList>
                <h4>Realtors</h4>
                <div>
                    {realtorsList}
                </div>
                <div>
                    <ToggleFormButton onClick={this.toggleAddRealtorForm}>
                        Sign Up
                    </ToggleFormButton>

                </div>
                <div>
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

const TrashSpan = styled.span`
   
    font-size: 20px;
    color: #000000;
    
    &:hover {
        color: #571B0D;
    }
    `
const RealtorSpan = styled.span`
    color: #05B8CC;
    &:hover {
        color: #571B0D;
    }
    `

const RealtorContainer = styled.div`
    padding: 15px 10px 0px 10px;
    font-size: 20px;
`
const CityState = styled.div`
    color: #343a40;
    font-size: 12px;
`
const ToggleFormButton = styled.div`
    border-radius: 8px;
    background-color: #05B8CC;
    color: #ffffff;
    border-radius: 8px;
    padding: 5px;
    margin: 8px;
    width: 150px;
    text-align: center;
`

const RealtorList = styled.div`
    padding-bottom: 100px;
    display: flex; 
    flex-direction: column;
    align-items: center;
`