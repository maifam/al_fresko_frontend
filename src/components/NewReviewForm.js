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



{/* <div>
    <br></br>
    <form onSubmit={handleSubmitReview}>
        <label>Rate this restaurant:
            1<input type='radio' label='1' checked={rating === 1} value='1' onChange={(e) => setRating(1)}/>
            2<input type='radio' label='2' checked={rating === 2} value='1' onChange={(e) => setRating(2)}/>
            3<input type='radio' label='3' checked={rating === 3} value='1' onChange={(e) => setRating(3)}/>
            4<input type='radio' label='4' checked={rating === 4} value='1' onChange={(e) => setRating(4)}/>
            5<input type='radio' label='5' checked={rating === 5} value='1' onChange={(e) => setRating(5)}/>
        </label>
        <br></br>
        <br></br>
        <label>
            Content: 
            <textarea type='textarea' name='content' value={content} onChange={e => setContent(e.target.value)}/>
        </label>
        <input type='submit' value='submit'/>
    </form>
</div> */}