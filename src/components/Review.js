import React from 'react'

function Review({review, onDeleteReview}) {

    // const {name, image} = user
    const {likes, id, content, rating, user} = review

    function handleDeleteClick(){
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'DELETE',
        })
        onDeleteReview(id)
    }

    function handleEditClick(){
        
    }

    console.log(user)
    return (
        
        <div>
            <h3> Review </h3>
            <img className="image" src={user.image} alt={user.name} />
            <p>{user.username}</p>
            <p>{content}</p>
            <p>{rating}</p>
            <button onClick={handleDeleteClick}>Delete</button>
            {user ? (<button > Edit</button>) : null }
           
           
        </div>
       
    );
}
    
export default Review;