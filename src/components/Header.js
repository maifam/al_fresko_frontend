import alfresko_logo from '../logo/alfresko_logo.png'
import NavBar from './NavBar'

function Header({currentUser, setCurrentUser}) {

    return (
        <div className='header-bar'>
            {/* <div className='logo'> */}
                {/* <h1> al 'freskō</h1> */}
                <img id='logo' src={alfresko_logo} alt=' logo'/>
            {/* </div> */}
            <div className='nav'>
                <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
        </div>
    );
}
    
export default Header;