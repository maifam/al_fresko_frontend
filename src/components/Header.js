import alfresko_logo from '../logo/alfresko_logo.png'
import NavBar from './NavBar'

function Header({currentUser, setCurrentUser}) {

    return (
        <div className='header-bar'>
            <img id='logo-img' src={alfresko_logo} alt='logo'/>

            <div className='nav'>
                <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
        </div>
    );
}
    
export default Header;