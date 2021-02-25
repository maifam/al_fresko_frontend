import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import Search from './Search'
import RestaurantList from './RestaurantList'
import Profile from './Profile'
import Login from './Login'
import Register from './Register'
import RestaurantPage from './RestaurantPage'
import Home from './Home'

function App() {


  const [restaurants, setRestaurants] = useState([])
  const [currentUser, setCurrentUser] = useState()

  // fake auth
  useEffect(() => {
    fetch("http://localhost:3000/profile")
    .then(r => r.json())
    .then(data=> {
      setCurrentUser(data)
      console.log(data)
    })
  }, [])

  //fetch all restaurants
  useEffect (() => {
    fetch('http://localhost:3000/restaurants')
    .then(res => res.json())
    .then(data => setRestaurants(data))
  }, [])

  console.log(currentUser)


  return (
    <>
      <div>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Filter />
        <Search />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/restaurants">
            <RestaurantList currentUser={currentUser} restaurants={restaurants}/>
          </Route>

          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/profile">
            <Profile user={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/restaurants/:id">
            <RestaurantPage user={currentUser}/>
          </Route>

          <Route path="*">
            <h1>404 not found</h1>
          </Route>

        </Switch>
      </div>
    </>

    
  );
}

export default App;



{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}