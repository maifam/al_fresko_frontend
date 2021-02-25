
import NavBar from './NavBar'

function Header({currentUser, setCurrentUser}) {

    return (
        <>
            <h1> al 'freskō</h1>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </>
    );
}
    
export default Header;