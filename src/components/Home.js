import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Home({restaurants, position, currentUser}) {


    return (
        <div className='map-container'>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={true} 
                style={{height:600, width: 950}}>
                <TileLayer
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurants.map((restaurant) => (
                    <Marker key={restaurant.id} position={restaurant.position} >
                        <Popup>
                            <img className='rest-map-img'  src={restaurant.fd_img} />
            
                            <p> 
                                {currentUser ? 
                                    <Link to={`/restaurants/${restaurant.id}`} ><strong>{restaurant.name}</strong></Link> 
                                :   <Link to={`/login`}><strong>{restaurant.name}</strong></Link>} 
                            </p>
                            <p><em>{restaurant.address}</em></p>
                            <p>{restaurant.cuisine}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Home;