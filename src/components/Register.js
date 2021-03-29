import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'


function Register({setCurrentUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        // const registerObj = {
        //     username, 
        //     password, 
        //     name, 
        //     image
        // }

        const formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        formData.append('name', name)
        formData.append('user_image', image)
        
        console.log(image)
        console.log(formData)
        
        fetch('https://enigmatic-island-27273.herokuapp.com/signup', {
            method: 'POST', 
            body: formData,
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(registerObj)
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
        <div className='ui raised segment centered' style={{borderColor: '#71ACB2'}} >
            <div className='ui four column centered grid'>
                <div className='column'>   
                    <h2 className='login-title'>Welcome to al 'freskō!</h2>
                    <div className='ui form'>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="file"
                                    name='user_image'
                                    placeholder='image'
                                    accept='image/png, image/jpeg, image/jpg'
                                    multiple={false}
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            {errors.map(error => {
                                return <p key={error}>{errors}</p>
                            })}
                            <input className="ui basic button" type="submit" value="Register" />
                        </form>
                        <br></br>
                        <p>
                            Already have an account? <Link to='/login'>Login</Link>
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    export default Register;