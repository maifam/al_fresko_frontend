function Filter({setSortBy}) {

    function handleChangeFilter(e) {
        setSortBy(e.target.value)
    }

    return (
        <>
            <div className="Filter">
                <select id="filter" className="ui selection dropdown" name="filter" onChange={handleChangeFilter} >
                    <option value="All">Sort by Price - All</option>
                    <option value="high to low">High to Low</option>
                    <option value="low to high">Low to High</option>
                </select>
            </div>
        </>
    );
}
    
export default Filter;