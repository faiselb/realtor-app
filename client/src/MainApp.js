import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListingsPage from './components/ListingsPage'
import CommunitiesList from './components/CommunitiesList'
import RealtorsPage from './components/RealtorsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'

class App extends Component {

  render() {
    return (

      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path='/realtors' component={RealtorsPage} />
            <Route exact path='/realtors/:realtorId/communities' component={CommunitiesList} />
            <Route exact path='/realtors/:realtorId/communities/:communityId/listings' component={ListingsPage} />
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}


export default App