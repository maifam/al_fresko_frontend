import React, {useState} from 'react';
import {Button, Form, Rating} from 'semantic-ui-react';


function NewReviewForm({ currentUser, restaurantId, onAddReview, setReviewClick}) {

    const [content, setContent] = useState('');
    const [rating, setRating] = useState('')

    function handleSubmitReview(e){
        e.preventDefault();

        const newReview = {
            user_id: currentUser.id,
            restaurant_id: restaurantId,
            // likes: 1, 
            rating: parseInt(rating),
            content
        }

        fetch('http://localhost:3000/reviews', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then((r) => r.json())
        .then(data => {
            onAddReview(data)
        })
        setContent('')
        setReviewClick(false)
    }    

    function handleRateChange(e, { rating }) {
        e.preventDefault();
        setRating(rating);
    }

    return (
        
        <Form reply onSubmit={handleSubmitReview}>
            <p></p>
            <h4> Rate this restaurant: 
                <br></br>
                <Rating size='huge' maxRating={5} clearable value={rating} onRate={handleRateChange}/>
            </h4>
          <Form.TextArea size='small' value={content} onChange={e=> setContent(e.target.value)}  />
          <Button basic color='white' type='submit' content='Submit Review' labelPosition='left' icon='edit' />
        </Form>
       
    );
}
    
export default NewReviewForm;



