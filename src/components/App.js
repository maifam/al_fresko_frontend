// import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import RestaurantList from './RestaurantList'
import Profile from './Profile'
import Login from './Login'
import Register from './Register'
import RestaurantPage from './RestaurantPage'
import Home from './Home'

function App() {


  const [restaurants, setRestaurants] = useState([])
  const [currentUser, setCurrentUser] = useState(true)
  const [bookmarks, setBookmarks] = useState([])
  const [position, setPosition] = useState([40.745350, -73.986397])
  

  // real auth
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(r => r.json())
      .then(user=> {
        setCurrentUser(user)
      })
    }
  }, [])

  //fetch all restaurants
  useEffect (() => {
    fetch('http://localhost:3000/restaurants')
    .then(res => res.json())
    .then(data => setRestaurants(data))
  }, [])

  // console.log(currentUser)

  //fetch all bookmarks
  useEffect(() => {
    if (currentUser) {
    fetch('http://localhost:3000/bookmarks')
    .then(res => res.json())
    .then(data => {
      // let currentUserBookmark = data.filter(dt => dt.user_id === currentUser.id)
      // setBookmarks(currentUserBookmark)
      setBookmarks(data)
    })}
  }, [])

  function onAddBookmark(newBookmark){
    setBookmarks([...bookmarks, newBookmark])
  }

  function onRemoveBookmark(id){
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
      setBookmarks(updatedBookmarks)
  }
  

  return (
   
      <div className='App'>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>

        <Switch>

          <Route exact path="/">
            <Home restaurants={restaurants} position={position}/>
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
            {currentUser ? <Profile user={currentUser} 
                            setCurrentUser={setCurrentUser} 
                            bookmarks={bookmarks} 
                            onRemoveBookmark={onRemoveBookmark}/> 
            : <h1> Must be logged in </h1> }
          </Route>

          <Route exact path="/restaurants/:id">
            <RestaurantPage user={currentUser} bookmarks={bookmarks} setBookmarks={setBookmarks} onAddBookmark={onAddBookmark}/>
          </Route>

          <Route path="*">
            <h1>404 not found</h1>
          </Route>

        </Switch>
      </div>
    

    
  );
}

export default App;



/* <div className="App">
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
    </div> */