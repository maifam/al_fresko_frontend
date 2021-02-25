import Restaurant from './Restaurant'

function RestaurantList({restaurants, currentUser}) {

    const restaurantsToDisplay = restaurants.map(restaurant => {
        return <Restaurant key={restaurant.id} restaurant={restaurant} currentUser={currentUser}/>
    })
    return (
        <>
            <h1> Restaurant List </h1>
            {restaurantsToDisplay}
        </>
    );
}
    
export default RestaurantList;