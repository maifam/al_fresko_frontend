import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Home({restaurants, position}) {

    // const restaurantMarkers = restaurants.map(restaurant => {
    //     return restaurant.position
    // })
    // console.log(restaurants[0].position)
    // console.log(restaurantMarkers)
    // const position = [40.7584, -73.98329]
   
    // const history = useHistory();


    return (
        <div className='map-container'>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={true} 
                style={{height:500, width: 900}}>
                <TileLayer
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurants.map((restaurant) => (
                    <Marker key={restaurant.id} position={restaurant.position} >
                        <Popup>
                            <img className='rest-map-img'  src={restaurant.fd_img}/>
                            <p><Link to={`/restaurants/${restaurant.id}`}><strong>{restaurant.name}</strong></Link></p>
                            {/* <p><strong>{restaurant.name}</strong></p> */}
                            <p>{restaurant.cuisine}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Home;