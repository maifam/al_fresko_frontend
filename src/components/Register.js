import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

function Register({setCurrentUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/signup', {
            method: 'POST', 
        })
        .then((r)=>r.json())
        .then((user) => {
            setCurrentUser(user);
            history.push('/restaurants');
        })
    }    
    
    
    return (
        
        <div>
            <h2> Register </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    name:
                    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
                <label>
                    username:
                    <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </label>
                <label>
                    password:
                    <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label>
                <label>
                    image:
                    <input type="text" name="image" value={image} onChange={(e)=> setImage(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>
               Already have an account? <Link to='/login'>Login</Link>
            </p>
           
        </div>
       
    );
}
    
export default Register;