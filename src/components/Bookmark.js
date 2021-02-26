import { useHistory} from 'react-router-dom'

function Bookmark({bookmark, onRemoveBookmark}) {

    const history = useHistory();

    function handlePageClick(){
        history.push(`/restaurants/${bookmark.restaurant_id}`)
    }

    function handleRemoveBookmark(){
        fetch(`http://localhost:3000/bookmarks/${bookmark.id}`, {
            method: 'DELETE',
        })
        onRemoveBookmark(bookmark.id)
    }

    return (
        
        <div>
            <br></br>
            <img className="image" onClick={handlePageClick} src={bookmark.restaurant.fd_img} alt={bookmark.restaurant.fd_img} />
            <p>{bookmark.restaurant.name}</p>
            <button onClick={handleRemoveBookmark}>Remove Bookmark</button>
            <br></br>
        </div>
       
    );
}
    
export default Bookmark;