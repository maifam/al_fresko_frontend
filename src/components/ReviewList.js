import React, {useState} from 'react'
import Review from './Review';
import NewReviewForm from './NewReviewForm';

function ReviewList({restaurantId, user, reviews, onAddReview, onDeleteReview}) {

    const [reviewClick, setReviewClick] = useState(false)

    const reviewsToDisplay = reviews.map(review => {
        return <Review key={review.id} review={review} currentUser={user} onDeleteReview={onDeleteReview}/>
        // console.log(review)
    })

    function handleReviewClick(){
        setReviewClick(!reviewClick)
    }
    

    return (
        
        <div>
            <h3>Reviews</h3>
            {reviewsToDisplay}          
            <button onClick={handleReviewClick}>Leave a Review</button>
            {reviewClick ? (
                <NewReviewForm restaurantId={restaurantId} currentUser={user} setReviewClick={setReviewClick} onAddReview={onAddReview} />
            ): null}
        </div>
       
    );
}
    
export default ReviewList;