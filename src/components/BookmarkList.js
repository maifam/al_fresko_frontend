import Bookmark from './Bookmark';
import {Label} from 'semantic-ui-react';

function BookmarkList({bookmarks, onRemoveBookmark, currentUser}) {

    const bookmarksToDisplay = bookmarks.map(bookmark => {
        return <Bookmark key={bookmark.id} bookmark={bookmark} onRemoveBookmark={onRemoveBookmark} currentUser={currentUser}/>
    })

    return (
        
        <div className='bookmark-list'>
            <Label color='teal' ribbon size='large'>
                your bookmarks
            </Label>
            <br></br>
            {bookmarksToDisplay}
        </div>
       
    );
}
    
export default BookmarkList;