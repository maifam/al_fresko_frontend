import React, {useState} from 'react';
import {Rating, Comment, Button, Divider} from 'semantic-ui-react';

function Review({review, onDeleteReview,currentUser}) {

    const {likes, id, content, rating, user} = review

    const [editReview, setEditReview] = useState(false)
    const [editContent, setEditContent] = useState('')
    const [editRating, setEditRating] = useState('')
    const [currentContent, setCurrentContent] = useState(content)
    const [currentRating, setCurrentRating] = useState(rating)


    function handleDeleteClick(){
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'DELETE',
        })
        onDeleteReview(id)
    }

    function handleEditClick(){
        setEditReview(!editReview)
    }

    function handleSubmitReview(e){
        e.preventDefault();

        const editReview = {
            rating: parseInt(currentRating),
            content: editContent
        }

        fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editReview)
        })
        .then((r) => r.json())
        .then(data => {
            setCurrentContent(data.content)
            setCurrentRating(data.rating)
        })
        setEditReview(false)
    }
    
    return (
        <>

            {editReview ? ( 
                <>
                    {/* <img className="image" src={user.image} alt={user.name} /> */}
                    <form onSubmit={handleSubmitReview}>
                        <label>Edit your rating:</label>
                            <span className='star-rating'>
                                <Rating defaultRating={currentRating} maxRating={5} onRate={(e)=>setCurrentRating(e.target.ariaPosInSet)}/>
                            </span>
                        <br></br>
                        <br></br>
                        <label>
                            <h4>Edit your review:</h4>
                            <textarea type='textarea' name='content' placeholder={content} value={editContent} onChange={(e)=>setEditContent(e.target.value)}/>
                        </label>
                        <input type='submit' value='submit'/>
                    </form>
                </>) :  (

                    <Comment.Group>
                        <Divider horizontal></Divider>
                        <Comment>
                            <Comment.Avatar className="image" src={user.image_url} alt={user.name} />
                            <Comment.Content>

                                <Comment.Author>{user.username}</Comment.Author>
                                <Comment.Metadata>
                                    <Rating size='mini' defaultRating={currentRating} maxRating={5} disabled />
                                </Comment.Metadata>
                                <Comment.Text>{currentContent} </Comment.Text>
                                
                                {currentUser.id === review.user.id ? (<Button size='mini' icon='edit' basic color='white' onClick={handleEditClick}></Button>) : null }
                                {currentUser.id === review.user.id ? (<Button size='mini' icon='trash alternate' basic color='white' onClick={handleDeleteClick}></Button>) : null}
                                
                            </Comment.Content>

                        </Comment>
                        <Divider horizontal></Divider>
                    </Comment.Group>
                )}
        </> 
    );
}
    
export default Review;





