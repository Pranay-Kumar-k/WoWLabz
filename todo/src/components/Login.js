import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, google } from '../firebase'
import "./Login.css";
import authenticated from "./Auth";
 
function Login() {

    const history = useHistory()

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const login = e => {
        e.preventDefault();
        console.log('hello logged in')

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            authenticated.login(() => {
                history.push('/dashboard')
            })
        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            authenticated.login(() => {
                history.push('/dashboard')
            })
        })
        .catch(e => alert(e.message))
        
    }

    const googleSignUp =(e) => {
        e.preventDefault()
        auth.signInWithPopup(google).then(auth => {
            authenticated.login(() => {
                history.push("/dashboard")
            })
        })
        
    }

    const facebookSignUp = (e) => {
        e.preventDefault()

    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                    <button id="google" onClick={googleSignUp}><img src="https://dashboard.razorpay.com/img/google-icon.svg" alt="google"/>Sign In with Google</button>
                    <button id="google" onClick={facebookSignUp}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" width="20px" alt="facebook" />Sign In with facebook</button>
                </form>
                <p>
                    By signing-in you agree to Firebase's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice
                </p>
                <button onClick={register} className="login__registerButton">Create your Account</button>
            </div>
        </div>
    )
}

export default Login
