import React from 'react'
import { useHistory} from 'react-router-dom'

function Restaurant({restaurant, currentUser}) {

    const {id, name, cuisine, address, money, od_img1} = restaurant
    const history = useHistory()

    function handleShowDetails(){
        if (currentUser) {
            history.push(`/restaurants/${id}`)
        }else {
            alert('Please login to see more details!')
            history.push('/login')
        }
    }


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
                    <button onClick={handleShowDetails}>Show Details</button>
                </div>
            </div>
        </>
       
       );
    }
    
    export default Restaurant;


    // <Link to={`/login`}>Show Details</Link>

    // {currentUser ? (
    //     <Link to={`/restaurants/${id}`}>Show Details</Link>
    // ) : (
    //     <Link to={`/login`}>Show Details</Link>)}