import BookmarkList from './BookmarkList';

function Profile({user, bookmarks, onRemoveBookmark}) {

    const myBookmarks = bookmarks.filter(bookmark => {
        if (bookmark.user_id == user.id) {
            return true
        }else {
            return null
        }
    })
  

    console.log(user)

    return (
        
        <div>
            <h2> Profile </h2>
            <img className="image" src={user.image} alt={user.username} />
            <p>{user.name}</p> 
            <BookmarkList bookmarks={myBookmarks} onRemoveBookmark={onRemoveBookmark}/>
           
        </div>
       
    );
}
    
export default Profile;

// bookmarks={user.bookmarks}