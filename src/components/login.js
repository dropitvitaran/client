import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import "./login.css"
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/home")
        }
    },[])

    async function login(){
        console.warn(email,password);
        let item = {email,password}
        let result = await fetch("api_url",{
            method:'POST',
            headers:{   
                "Content-Type":"application/json",
                "Accept":'applocation/json'
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/home")
    }

    return(
        <div className="loginPage">
            <div className="loginContainer">
                <h1>Login</h1>
                <div>
                    <label className="email">Email</label>
                    <br/>
                    <input className="input" id="email" v-model="email" type="email" placeholder="Your email address" onChange = {(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label className="password">Password</label>
                    <br/>
                    <input className="input" id="password" v-model="password" type="password" placeholder="Your Password" onChange = {(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="forgetPassword">
                <a href="#">Forget Password?</a>
                </div>
                <div className="login">
                    <button className="loginBtn" onClick={login}>
                        Log in
                    </button>
                </div>
                <div className="signUp">
                    <button className="signupBtn">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login
