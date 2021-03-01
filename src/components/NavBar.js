import Login from './Login'
import Profile from './Profile'
import {NavLink, useHistory} from 'react-router-dom'


function NavBar({currentUser, setCurrentUser}) {

    const history = useHistory();

    function logout(){
        localStorage.removeItem('token');
        setCurrentUser(null);
        history.push('/')
    }

    return (
        <>
            
            <nav>
                <NavLink to='/restaurants' exact className='linkButton'>Restaurants</NavLink>
                {currentUser ? 
                 (<>
                    <NavLink to='/profile' exact className='linkButton'>Profile</NavLink>
                    <button className="button" onClick={logout}>logout</button> 

                 </>) : 
                 (<>

                    <NavLink to='/login' exact className='linkButton'>Login</NavLink>
                    <NavLink to='/register' exact className='linkButton'>Register</NavLink>

                 </>
                 )}
            </nav>
        </>
    );
}
    
export default NavBar;