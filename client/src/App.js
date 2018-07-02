import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ListingsPage from './components/ListingsPage'
import CommunitiesList from './components/CommunitiesList'
import RealtorsPage from './components/RealtorsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'

class App extends Component {

  render() {
    console.log(this.props);
    return (

      <Router>
        <div className="App">
          <div className="page-flex">
            <div className="page-content">
              <Route exact path="/" component={Landing} />
              <div className='App-header'>
                <ul>
                  <li><Link to={`/`}>Home</Link></li>
                  <li><Link to={`/realtors`}>Realtors</Link></li>
                </ul>
              </div>
              <div className="container">
                <Route exact path='/realtors' component={RealtorsPage} />
                <Route exact path='/realtors/:realtorId/communities' component={CommunitiesList} />
                <Route exact path='/realtors/:realtorId/communities/:communityId/listings' component={ListingsPage} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>

    );
  }
}


export default App