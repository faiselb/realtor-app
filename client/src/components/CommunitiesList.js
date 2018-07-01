import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import RealtorDetail from './RealtorDetail'
import RealtorEdit from './RealtorEdit'
import NewCommunityForm from './NewCommunityForm'
import GoTrashcan from 'react-icons/lib/go/trashcan'
import { PageBottom } from './Styles'

class CommunitiesList extends Component {
    state = {
        realtor: {
            communities: []
        },
        community: {
            communityName: '',
            zipCode: ''
        },
        editFormShowing: false,
        addFormShowing: false
    }

    componentWillMount = () => {
        this.getAllCommunities()
    }

    
    handleRealtorChange = (event) => {
        event.preventDefault()
        const realtor = { ...this.state.realtor }
        realtor[event.target.name] = event.target.value
        console.log("Updated Realtor:", realtor)
        this.setState({ realtor })
    }

    handleCommunityChange = (event) => {
        event.preventDefault()
        const community = { ...this.state.community }
        community[event.target.name] = event.target.value
        this.setState({ community })
    }

    
    getAllCommunities = async () => {
        try {
            console.log('getting communities')
            const realtorId = this.props.match.params.realtorId
            const response = await axios.get(`/api/realtors/${realtorId}/communities`)
            this.setState({ realtor: response.data })
        }
        catch (err) {
            console.log(`Catch errror ----- ${err}`)
        }
    }

    updateRealtor = async (event) => {
        event.preventDefault()
        try {

            console.log("this is updating to this realtor:", this.state.realtor.name)
            const response = await axios.patch(`/api/realtors/${this.state.realtor._id}`, this.state.realtor)
            console.log(`STATE________${this.state.editFormShowing}`)
            this.setState({
                realtor: response.data,
                editFormShowing: false
            })
        } catch (err) {
            console.log(err)
        }
    }

    createNewCommunity = async (event) => {
        event.preventDefault()
        const payload = {
            communityName: this.state.community.communityName,
            zipCode: this.state.community.zipCode
        }
        const blankForm = {
            communityName: '',
            zipCode: ''
        }
        await axios.post(`/api/realtors/${this.state.realtor._id}/communities`, payload)
        await this.getAllCommunities()
        this.setState({
            addFormShowing: false,
            community: blankForm
        })
    }

    deleteCommunity = async (community) => {
        try {
            axios.delete(`/api/realtors/${this.state.realtor._id}/communities/${community._id}`)
            window.location.reload()

           
        }
        catch (err) {
            console.log(err)
        }
    }

   
    toggleEditForm = () => {
        const editFormShowing = !this.state.editFormShowing
        this.setState({
            addFormShowing: false,
            editFormShowing
        })
    }

    toggleAddCommunityForm = () => {
        const addFormShowing = !this.state.addFormShowing
        this.setState({
            editFormShowing: false,
            addFormShowing
        })
    }

    render() {

        
        const realtor = this.state.realtor
        
        return (
            <RealtorShowCommunityList>

            <h4> Realtor's Communities</h4>
                <RealtorDetailContainer>
                    
                    <RealtorDetail
                        realtor={this.state.realtor}
                    />

                    
                </RealtorDetailContainer>
                <ButtonHolder>
                    <Button onClick={this.toggleEditForm}>
                        Edit Realtor Info
                    </Button>
                    <div>
                        {
                            <Link to={`/realtors`}>
                                <Button>
                                    Back To All Realtors
                        </Button>
                            </Link >
                        }
                    </div>
                </ButtonHolder>

                <div>
                    {
                        this.state.editFormShowing ?
                            <div>
                                <RealtorEdit
                                    updateRealtor={this.updateRealtor}
                                    realtor={this.state.realtor}
                                    handleRealtorChange={this.handleRealtorChange}
                                    editFormShowing={this.editFormShowing} />
                            </div>
                            : null
                    }
                </div>

                <Button onClick={this.toggleAddCommunityForm}>
                    Add Community
                </Button>

                <div>
                    {
                        this.state.addFormShowing ?
                            <div>
                                <NewCommunityForm
                                    createNewCommunity={this.createNewCommunity}
                                    community={this.state.community}
                                    handleCommunityChange={this.handleCommunityChange}
                                    addFormShowing={this.addFormShowing}
                                />
                            </div>
                            : null
                    }
                </div>

                <div ClassName= 'section-community'>
                    {
                        realtor.communities.map((community, index) => {
                            return (<div className='CommunityContainer' key={index}>

                                <Link to={`/realtors/${realtor._id}/communities/${community._id}/listings`}>
                                    <CommunityContainer>
                                     <div className = 'bounding-box'>
                                        <CommunityNameColor>{community.communityName}</CommunityNameColor>
                                     </div>
                                    </CommunityContainer>
                                </Link>
                                
                                <TrashIcon type="submit" onClick={() => this.deleteCommunity(community)}><GoTrashcan /> </TrashIcon>

                            </div>)
                        })
                    }
                   
                </div>
                <PageBottom></PageBottom>


            </RealtorShowCommunityList >
        )
    }
}

export default CommunitiesList

// ======== STYLED COMPONENTS ==========

const ButtonHolder = styled.div`
    display: flex;
`

const Button = styled.button`
    border-radius: 5px;
    background-color: #05B8CC;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
    `

const CommunityContainer = styled.div`
    border: 5px #545454 solid; 
    width: 200px; 
    height: 200px;
    margin: 20px 20px 8px 10px;
    padding: 20px 10px 10px 10px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-image: url(Atlanta.jpg);
    background-size: contain;
    &:hover {
        border: 8px #05B8CC solid;
        color: #000000;
    }
    
    `

const CommunityNameColor = styled.div`
    color: #000000;
    background: url('Atlanta.jpg') no-repeat;
    text-transform: uppercase;
    font-size: 20px;
    @media (max-width: 700px) {
        width: 100px;
        height: 100px;
        padding: 5px;
        margin: 25px 10px 0px 10px;
        font-size: 12px;
        }
`

const TrashIcon = styled.div`
    font-size: 20px;
    color: #000000;
    width: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    &:hover {
        color: #000000;
}
`
const RealtorShowCommunityList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RealtorDetailContainer = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: row;
    @media (max-width: 700px) {

    flex-direction: column;
}
`