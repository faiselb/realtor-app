import React from 'react'
import '../App.css'
import styled from 'styled-components'


const RealtorDetail = (props) => {

    return (
            <RealtorDiv>
                <NameDiv>{props.realtor.name}</NameDiv>
                <div>{props.realtor.description}</div>
                <BoldDiv>Address:</BoldDiv>
                <div>{props.realtor.address}</div>
                <div>{props.realtor.city}, {props.realtor.state}</div>
            </RealtorDiv>

    );
}

export default RealtorDetail

const RealtorDiv = styled.div`
    
    color: #05B8CC;
    border-radius: 5px;
    margin: 0;
    
    max-width: 350px;
    margin-bottom: 20px;
`
const NameDiv = styled.div`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 20px;
`
const BoldDiv = styled.div`
    font-weight: bold;
`