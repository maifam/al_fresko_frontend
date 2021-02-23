import Review from './Review';
import NewReviewForm from './NewReviewForm';

function ReviewList({id, user, reviews}) {

    const reviewsToDisplay = reviews.map(review => {
        return <Review key={review.id} review={review} user={user}/>
        // console.log(review)
    })

    return (
        
        <div>
            {reviewsToDisplay}          

           <NewReviewForm/>
        </div>
       
    );
}
    
export default ReviewList;