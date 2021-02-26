import Bookmark from './Bookmark';

function BookmarkList({bookmarks, onRemoveBookmark}) {

    console.log(bookmarks)
    const bookmarksToDisplay = bookmarks.map(bookmark => {
        return <Bookmark key={bookmark.id} bookmark={bookmark} onRemoveBookmark={onRemoveBookmark}/>
    })

    return (
        
        <div>
            <h3> BookmarkList </h3>
            {bookmarksToDisplay}
        </div>
       
    );
}
    
export default BookmarkList;