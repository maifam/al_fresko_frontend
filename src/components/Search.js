function Search({setSearch}) {

    return (
        
        <form>
            <input
            type="text"
            placeholder="Search by cuisine..."
            onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    );
}
    
export default Search;