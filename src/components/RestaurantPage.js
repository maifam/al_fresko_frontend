import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReviewList from './ReviewList';


function RestaurantPage({user, onAddBookmark}) {

    const [restaurant, setRestaurant] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [newBookmark, setNewBookmark] = useState(null) 

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

    function onAddReview(newReview) {
        setReviews([...reviews, newReview])
    }

    function onDeleteReview(id){
        const updatedReviews = reviews.filter((review) => review.id !== id);
        setReviews(updatedReviews)
    }

    function handleAddNewBookmark(e){
        e.preventDefault();
       
        const newBookmarkObj = {
            user_id: user.id,
            restaurant_id: id
        }

        fetch('http://localhost:3000/bookmarks', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newBookmarkObj)
        })
        .then(res => res.json())
        .then(data => onAddBookmark(data))
    }


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
                <button onClick={handleAddNewBookmark}>Bookmark</button>
                
            </div>

            <ReviewList restaurantId={id} reviews={filteredReviews} user={user} onAddReview={onAddReview} onDeleteReview={onDeleteReview}/>

        </div>
       
    );
}
    
export default RestaurantPage;