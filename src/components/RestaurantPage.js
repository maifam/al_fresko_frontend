import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ReviewList from './ReviewList';



function RestaurantPage({user}) {

    const [restaurant, setRestaurant] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviews, setReviews] = useState([])

    const { id } = useParams(); //useParams for restaurant:id

//fetch for one restaurant 
    useEffect(() => {
        fetch(`http://localhost:3000/restaurants/${id}`)
          .then((r) => r.json())
          .then((restaurant) => {
            setRestaurant(restaurant);
            setIsLoaded(true);
          });
    }, [id]);

// fetch for all reviews
    useEffect (() => {
        fetch(`http://localhost:3000/reviews`)
        .then(r=>r.json())
        .then(reviewsArr => setReviews(reviewsArr))
      }, [])

    
    const filteredReviews = reviews.filter(review=> {
        if(review.restaurant_id == id){
            return true
        } else {
            return null
        }
    })

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, cuisine, address, website, hours, setup, covid, menu, phone, money, od_img1, od_img2, fd_img } = restaurant;
    

    return (
        
        <div>
            <h2> {name} </h2>
            <img className="image" src={od_img2} alt={name} />
            <img className="image" src={od_img1} alt={name} />
            <img className="image" src={fd_img} alt={name} />
            <div>
                <p>{cuisine}</p>
                <p>{money}</p>
                <p>{address}</p>
                <p>{hours}</p>
                <p>{setup}</p>
                <p> Phone: {phone} </p>
                <p>COVID Precautions: {covid}</p>
                <p><a href={website} target='_blank'>Visit Website</a></p>
                <p><a href={menu} target='_blank'>View Menu</a></p>
                
            </div>

            <ReviewList id={id} reviews={filteredReviews} user={user}/>

        </div>
       
    );
}
    
export default RestaurantPage;