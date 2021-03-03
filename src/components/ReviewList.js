import React, {useState} from 'react'
import Review from './Review';
import NewReviewForm from './NewReviewForm';
import {Header, Divider, Comment, Button} from 'semantic-ui-react';


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
        
        <Comment.Group>
            <Header as='h2' id='reviews-list' dividing>
                Reviews 
            </Header>
            {reviewsToDisplay}

        <Divider horizontal />

        <Button basic color='white' onClick={handleReviewClick}>Leave a Review</Button>
        {reviewClick ? <NewReviewForm restaurantId={restaurantId} currentUser={user} setReviewClick={setReviewClick} onAddReview={onAddReview}/>: null}
    </Comment.Group>
       
    );
}
    
export default ReviewList;


{/* <div>
<h3>Reviews</h3>
{reviewsToDisplay}          
<button onClick={handleReviewClick}>Leave a Review</button>
{reviewClick ? (
    <NewReviewForm restaurantId={restaurantId} currentUser={user} setReviewClick={setReviewClick} onAddReview={onAddReview} />
): null}
</div> */}