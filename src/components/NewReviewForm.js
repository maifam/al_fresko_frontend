import React, {useState} from 'react'

function NewReviewForm({ user, restaurantId, onAddReview, setReviewClick}) {

    const [content, setContent] = useState('');

    function handleSubmitReview(e){
        e.preventDefault();

        const newReview = {
            user_id: user.id,
            restaurant_id: restaurantId,
            likes: 1, 
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

    return (
        
        <div>
            
            <form onSubmit={handleSubmitReview}>
                <label>
                    Content: 
                    <textarea type='textarea' name='content' value={content} onChange={e => setContent(e.target.value)}/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        </div>
       
    );
}
    
export default NewReviewForm;