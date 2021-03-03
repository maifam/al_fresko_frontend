import React, {useState} from 'react';
import Restaurant from './Restaurant';
import Filter from './Filter';
import Search from './Search';
import { Grid } from 'semantic-ui-react';

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
        <div className='restaurant-list'>
            
            <Filter setSortBy={setSortBy} />
            <Search setSearch={setSearch}/>
            <br></br>
            <br></br>
            <br></br>
            {restaurantsToDisplay}    
            
        </div>
    );
}
    
export default RestaurantList;