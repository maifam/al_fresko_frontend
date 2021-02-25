import Review from './Review';
import NewReviewForm from './NewReviewForm';

function ReviewList({restaurantId, user, reviews, onAddReview, onDeleteReview}) {

    const reviewsToDisplay = reviews.map(review => {
        return <Review key={review.id} review={review} user={user} onDeleteReview={onDeleteReview}/>
        // console.log(review)
    })

    

    return (
        
        <div>
            {reviewsToDisplay}          

           <NewReviewForm restaurantId={restaurantId} user={user} onAddReview={onAddReview} />
        </div>
       
    );
}
    
export default ReviewList;