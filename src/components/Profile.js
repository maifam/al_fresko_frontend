import BookmarkList from './BookmarkList';

function Profile({user}) {

  

    console.log(user)

    return (
        
        <div>
            <h2> Profile </h2>
            <img className="image" src={user.image} alt={user.username} />
            <p>{user.name}</p> 
            <BookmarkList bookmarks={user.bookmarks}/>
           
        </div>
       
    );
}
    
export default Profile;