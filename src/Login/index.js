import React, {useState} from "react";
import './Login.css'
import { loginApi } from "../App/AppUI";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        console.log("Email: " + email)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        console.log("Password: " + password)
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const credentials = {
            email: email,
            password: password
        }
        
        loginApi(credentials)
        
        // try {
            //     const response = await props.api.post('http://localhost:3000/auth/sign_in', { email, password })
            //     const { user, token } = response.data;
            //     console.log(response)
            //     console.log('Logged in user ' + user);
        //     console.log('AuthToken', token);
        // } catch (error) {
        //     console.log(error)
        //     console.log('Login failed');
        // }

        

        // props.setIsLoggedIn(true)
    }

    return (
        <form>
            <div className="loginContainer">
                    <div className="emailContainer">
                        <label>Email </label>
                        <input className="formInput" type="text" onChange={handleEmailChange}></input>
                    </div>
                    
                    <div className="passContainer">
                        <label>Password </label>
                        <input className="formInput" type="text" onChange={handlePasswordChange}></input>
                    </div>

                    
                    <button type="submit" onClick={handleLogin}>Login</button>
 
            </div>
        </form>
    )
}

export { Login }