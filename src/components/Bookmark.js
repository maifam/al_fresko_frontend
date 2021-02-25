function Bookmark({bookmark}) {

  console.log(bookmark.restaurant.name)

    return (
        
        <div>
            <p>{bookmark.restaurant.name}</p>
        </div>
       
    );
}
    
export default Bookmark;