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
    
    // function handleRateChange(e, {currentRating}) {
    //     e.preventDefault();
    //     setEditRating(currentRating);
    // }
   
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





{/* <>

{editReview ? ( 
    <>
        <img className="image" src={user.image} alt={user.name} />
        <form onSubmit={handleSubmitReview}>
            <label>Rate this restaurant:
                1<input type='radio' label='1' checked={editRating=== 1} value='1' onChange={(e) => setEditRating(1)}/>
                2<input type='radio' label='2' checked={editRating=== 2} value='2' onChange={(e) => setEditRating(2)}/>
                3<input type='radio' label='3' checked={editRating=== 3} value='3' onChange={(e) => setEditRating(3)}/>
                4<input type='radio' label='4' checked={editRating=== 4} value='4' onChange={(e) => setEditRating(4)}/>
                5<input type='radio' label='5' checked={editRating=== 5} value='5' onChange={(e) => setEditRating(5)}/>
            </label>
            <br></br>
            <br></br>
            <label>
                Content: 
                <textarea type='textarea' name='content' placeholder={content} value={editContent} onChange={(e)=>setEditContent(e.target.value)}/>
            </label>
            <input type='submit' value='submit'/>
        </form>
    </>) :  (
    <div>
        <img className="image" src={user.image} alt={user.name} />
        <p>{user.username}</p>
        <p>{currentContent}</p>
        <p>{currentRating}</p>
        
        {currentUser.id === review.user.id ? (<button onClick={handleDeleteClick}>Delete</button>) : null}
        
        {currentUser.id === review.user.id ? (<button onClick={handleEditClick}>  Edit</button>) : null }
    </div>)}
</>  */}
