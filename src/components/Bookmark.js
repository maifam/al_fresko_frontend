import { useHistory} from 'react-router-dom'
import {Button, Icon, List, Image} from 'semantic-ui-react';

function Bookmark({bookmark, onRemoveBookmark, currentUser}) {

    const {id} = bookmark
    const history = useHistory();

    function handlePageClick(){
        history.push(`/restaurants/${bookmark.restaurant_id}`)
    }

    function handleRemoveBookmark(){
        
        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: 'DELETE',
        })
        onRemoveBookmark(id)
        alert('Bookmark removed!')
    }
   

    return (
        <List>
            <List.Item>
            <Image className="bookmark-img" onClick={handlePageClick} src={bookmark.restaurant.fd_img} alt={bookmark.restaurant.fd_img} />
            <List.Content>
                <List.Header id='bookmark-list-header' >{bookmark.restaurant.name}</List.Header>
                <List.Description>
                    <p>
                        {bookmark.restaurant.cuisine}
                    </p>
                    <br></br>
                    <p>
                        <Button  onClick={handleRemoveBookmark} size='tiny' icon basic color='teal'> 
                            <Icon name='bookmark'></Icon> Remove
                        </Button>
                    </p>
                </List.Description>
            </List.Content>
            </List.Item>
        </List>
       
       
    );
}
    
export default Bookmark;





{/* <div>
<br></br>
<img className="bookmark-img" onClick={handlePageClick} src={bookmark.restaurant.fd_img} alt={bookmark.restaurant.fd_img} />
<p>{bookmark.restaurant.name}</p>

<Button  onClick={handleRemoveBookmark} size='tiny' icon basic color='teal'> 
    <Icon name='bookmark'></Icon> Remove
</Button>
{/* <button onClick={handleRemoveBookmark}>Remove Bookmark</button> */}

{/* <br></br>
</div> */} 