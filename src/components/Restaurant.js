import React from 'react'
import {Link} from 'react-router-dom'

function Restaurant({restaurant, currentUser}) {

    const {id, name, cuisine, address, money, od_img1} = restaurant

    return (
        <>
            <div className='card'>
                <div className='card-info'> 
                    <img className="image" src={od_img1} alt={name} />
                    <br></br>
                    <h2> {name}</h2>
                    <p>{cuisine}</p>
                    <p>{money}</p>
                    <p>{address}</p>
                    <br></br>
                    {currentUser ? (
                        <Link to={`/restaurants/${id}`}>Show Details</Link>
                    ) : (
                        <Link to={`/login`}>Show Details</Link>
                    )}
                </div>
            </div>
        </>
       
    );
}
    
export default Restaurant;