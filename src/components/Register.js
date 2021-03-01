import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

function Register({setCurrentUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        const registerObj = {
            username, 
            password, 
            name, 
            image
        }
        
        fetch('http://localhost:3000/signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerObj)
        })
        .then((r)=>r.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            }else {
                const {user, token} = data;
                localStorage.setItem('token', token)
                setCurrentUser(user);
                history.push('/restaurants');
            }
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
                {errors.map(error => {
                    return <p key={error}>{errors}</p>
                })}
                <input type="submit" value="Submit" />
            </form>
            <p>
               Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
       
    );
}
    
export default Register;