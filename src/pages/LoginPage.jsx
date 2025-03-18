import React, { useState } from 'react';
import { useStore } from '../store/useStore';

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [islogin, setIslogin] = useState(false);
    const login = useStore(state => state.login);
    const usernamelog =  useStore(state => state.username);
    const isLoggedIn = useStore(state => state.isLoggedIn);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'halo' && password ==='halo'){
            
            console.log(username);
            console.log(password);
           if(login(username, password))
           {
            alert('Login successful!');
            //isAuthenticated(true);
            console.log(username);
            console.log(password);
            console.log(login);
            console.log(usernamelog);
            console.log(isLoggedIn);
           }
         
        }
        
    }

    return(
        <div>
            <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
            </div>
           {/* <div>
            {isLoggedIn && <h1>Welcome, {usernamelog}!</h1>}
           </div> */}
        </div>
        
    )
}
export default LoginPage;