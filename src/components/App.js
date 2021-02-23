import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import Search from './Search'
import RestaurantList from './RestaurantList'
import Profile from './Profile'
import Login from './Login'
import Register from './Register'
import RestaurantPage from './RestaurantPage'

function App() {




  return (
    <>
      <div>
        <Header/>
        <Filter />
        <Search />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantList />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/restaurants/:id">
            <RestaurantPage />
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