import React, {useState} from 'react';
import Restaurant from './Restaurant';
import Filter from './Filter';
import Search from './Search';
import { Card, Grid } from 'semantic-ui-react';

function RestaurantList({restaurants, currentUser}) {

    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('All')

    const filteredSearch = restaurants.filter((restaurant) => {
        return restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
    })

    const filteredSort = filteredSearch.sort((restaurantA, restaurantB) => {
        if (sortBy === 'low to high') {
            return restaurantA.money - restaurantB.money
        } else if (sortBy === 'high to low') {
            return restaurantB.money - restaurantA.money
        } else {
            return restaurants
        }
    })

    const restaurantsToDisplay = filteredSort.map(restaurant => {
        return <Restaurant key={restaurant.id} restaurant={restaurant} currentUser={currentUser}/>
    })
    return (
        <div>
            <div id='filter-bar'>
                <Filter setSortBy={setSortBy} />
            </div>
            <div id='search-bar'>
                <Search setSearch={setSearch}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div id='restaurant-list'>
                <Card.Group itemsPerRow={3}> {restaurantsToDisplay} </Card.Group> 
            </div>
            
        </div>
    );
}
    
export default RestaurantList;