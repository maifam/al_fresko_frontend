import Restaurant from './Restaurant'

function RestaurantList({restaurants}) {

    const restaurantsToDisplay = restaurants.map(restaurant => {
        return <Restaurant key={restaurant.id} restaurant={restaurant}/>
    })
    return (
        <>
            <h1> Restaurant List </h1>
            {restaurantsToDisplay}
        </>
    );
}
    
export default RestaurantList;