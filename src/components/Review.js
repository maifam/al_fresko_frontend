import React from 'react'

function Review({review}) {

    // const {name, image} = user
    const {likes, id, content, rating, user} = review

    console.log(user)

    return (
        
        <div>
            <h3> Review </h3>
            <img className="image" src={user.image} alt={user.name} />
            <p>{user.username}</p>
            <p>{content}</p>
            <p>{rating}</p>
           
           
        </div>
       
    );
}
    
export default Review;