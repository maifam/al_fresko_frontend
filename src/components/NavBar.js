
import {Link, useHistory} from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';


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
                <Button as={Link} to='/' circular icon basic color='teal'> 
                    <Icon name='map'></Icon> 
                </Button>

                <Button as={Link} to='/restaurants' circular icon basic color='teal'> 
                    <Icon name='utensils'></Icon> Browse Restaurants
                </Button>

                {currentUser ? 
                 (<>
                    <Button as={Link} to='/profile' circular icon basic color='teal'> 
                        <Icon name='user'></Icon> Profile
                    </Button>

                    <Button onClick={logout}  circular icon basic color='teal'> 
                        <Icon name='sign out'></Icon> Logout
                    </Button>


                 </>) : 
                 (<>

                    <Button as={Link} to='/login' circular icon basic color='teal'> 
                        <Icon name='sign in'></Icon> Login
                    </Button>
                    <Button as={Link} to='/register' circular icon basic color='teal'> 
                        <Icon name='signup'></Icon> Register
                    </Button>

                 </>
                 )}
            </nav>
        </>
    );
}
    
export default NavBar;
