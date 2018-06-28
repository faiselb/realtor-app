import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';

class App extends Component {

  render() {
    const Header = styled.header`
    text-align: center;
    vertical-align:center;

    `return (

      <Router>
        <div className="App">
          <div className='App-header'></div>
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

export default App;