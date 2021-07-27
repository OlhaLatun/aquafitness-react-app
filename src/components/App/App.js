import React from 'react'
import Header from '../Header'
import Jumbotron from '../Jumbotron'
import Cards from '../Cards'
import MyCarousel from '../Carousel'
import Footer from '../Footer'
import Schedule from '../Schedule'
import Login from '../Login'
import UserPage from '../UserPage'
import AdminPage from '../AdminPage'
import firebase from 'firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const logOut = () => {
    firebase.auth().signOut()
      .then(() => console.log("User logged out"))
      .catch(e => console.log(e))
  }
  
    return (
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/user/"><UserPage userLoggedOut={logOut} /></Route>
          <Route path="/" exact>
            <React.Fragment>
              <Header />
              <Jumbotron />
              <Cards />
              <MyCarousel />
              <Schedule />
              <Footer />
            </React.Fragment>
          </Route>
          <Route path="/admin"><AdminPage /></Route>
        </Switch>
      </Router>
    )
}

export default App;

