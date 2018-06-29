import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'

class Landing extends Component {
    render() {
        return (

            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Welcome Atlanta Realtors!</h1>
                                <p className="lead">
                                    {' '}
                                    Share Your Info and Advertise Your Listings!
                                </p>
                                <hr />
                                <Link to="/realtors" className="btn btn-lg btn-info mr-2">
                                    Sign Up
                                 </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;



const BackgroundDiv = styled.div`
    height: 800px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center; 
`


const SplashText = styled.div`
    color: #FFFFFF;
    &:hover {
        color: #0000FF;
    }
`