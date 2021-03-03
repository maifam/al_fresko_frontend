import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom';

function Login({setCurrentUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        
        const loginObj = {
            username, 
            password
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginObj)
        })
        .then((r) => r.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            }else{
                const { user, token } = data;
                localStorage.setItem('token', token)
                setCurrentUser(user);
                history.push('/restaurants');
            }
        });
    }
    return (

        <div className='ui raised segment centered' style={{borderColor: '#4D7A48'}} >
            <div className='ui four column centered grid'>
                <div className='column'>   
                    <h2 className='login-title'>Welcome back!</h2>
                    <div className='ui form'>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="password"
                                    placeholder="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {errors.map(error => {
                                return <p key={error}>{errors}</p>
                            })}
                            <input className="ui basic button" type="submit" value="Login" />

                        </form>
                        <br></br>
                        <p>
                            Don't have an account? <Link to='/register'>Sign Up</Link>
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

        
       
    );
}
    
export default Login;

        // <div>
        //     <h2> Login </h2>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             username:
        //             <input type="text" 
        //                 name="username" 
        //                 value={username} 
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </label>
        //         <label>
        //             password:
        //             <input type="password" 
        //                 name="password" 
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </label>
        //         {errors.map(error => {
        //             return <p key={error}>{errors}</p>
        //         })}
        //         <input type="submit" value="Submit" />
        //     </form>
        //     <p>
        //         Don't have an account? <Link to='/register'>Sign Up</Link>
        //     </p>
           
        // </div>