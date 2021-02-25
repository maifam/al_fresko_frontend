import Bookmark from './Bookmark';

function BookmarkList({bookmarks}) {

    console.log(bookmarks)
    const bookmarksToDisplay = bookmarks.map(bm => {
        return <Bookmark key={bm.id} bookmark={bm}/>
    })

    return (
        
        <div>
            <h3> BookmarkList </h3>
            {bookmarksToDisplay}
        </div>
       
    );
}
    
export default BookmarkList;