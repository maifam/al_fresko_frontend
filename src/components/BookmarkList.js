import Bookmark from './Bookmark';

function BookmarkList({bookmarks, onRemoveBookmark, currentUser}) {

    const bookmarksToDisplay = bookmarks.map(bookmark => {
        return <Bookmark key={bookmark.id} bookmark={bookmark} onRemoveBookmark={onRemoveBookmark} currentUser={currentUser}/>
    })

    return (
        
        <div>
            <h3> BookmarkList </h3>
            {bookmarksToDisplay}
        </div>
       
    );
}
    
export default BookmarkList;