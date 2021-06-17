import React, { Component } from 'react'
import Header from '../Header'
import Jumbotron from '../Jumbotron'
import Cards from '../Cards'
import MyCarousel from '../Carousel'
import Footer from '../Footer'
import Schedule from '../Schedule'
import Login from '../Login'
import UserPage from '../UserPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  state = {
    isLoggedIn: false
  }

  loginPage = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/user/"><UserPage /></Route>
          {/* <Route path="/admin"><AdminPage /></Route> */}
          <Route path="/" exact>
            <React.Fragment>
              <Header />
              <Jumbotron />
              <Cards />
              <MyCarousel />
              <Schedule onLoginClick={this.loginPage} />
              <Footer />
            </React.Fragment>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

