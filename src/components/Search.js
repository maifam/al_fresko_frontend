function Search({setSearch}) {

    return (
        <div className="ui search" style={{float: 'right'}}>
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="search by cuisine" onChange={(e) => {setSearch(e.target.value)}}/>
                    <i className="search icon"></i>
            </div>
                <div className="results"></div>
        </div>
    );
}
    
export default Search;

// <form>
//     <input
//     type="text"
//     placeholder="Search by cuisine..."
//     onChange={(e)=> setSearch(e.target.value)}
//     />
// </form>