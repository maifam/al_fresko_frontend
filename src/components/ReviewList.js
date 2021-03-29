import React, {useState} from 'react'
import Review from './Review';
import NewReviewForm from './NewReviewForm';
import {Grid,  Label, Button, Divider} from 'semantic-ui-react';


function ReviewList({restaurantId, user, reviews, onAddReview, onDeleteReview}) {

    const [reviewClick, setReviewClick] = useState(false)

    const reviewsToDisplay = reviews.map(review => {
        return <Review key={review.id} review={review} currentUser={user} onDeleteReview={onDeleteReview}/>
    })

    function handleReviewClick(){
        setReviewClick(!reviewClick)
    }
    

    return (
        <div className='reviews-list'>
            <Grid >
                <Grid.Column>
                
                    <Label as='a' color='teal' ribbon id='reviews-ribbon'>
                        Reviews
                    </Label>
                        <span>{reviewsToDisplay}</span>

                    <Divider horizontal />

                <div id='review-button'>

                    <Button basic color='teal' onClick={handleReviewClick}>Leave a Review</Button>
                    {reviewClick ? <NewReviewForm restaurantId={restaurantId} currentUser={user} setReviewClick={setReviewClick} onAddReview={onAddReview}/>: null}
                
                </div>
                </Grid.Column>
            </Grid>
        </div>
        
       
       
    );
}
    
export default ReviewList;
