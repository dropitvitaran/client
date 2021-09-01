import React, { useEffect, useState } from "react";
import "./signup.css";

function SignUp(){

    const [userInfo, setUserInfo]=useState({
        email: "",
        password: "",
        verifypassword:""
    })

    function change(event,para){
        setUserInfo((previousValue)=>{
            return{
                ...previousValue,
                [para]:event.target.value
            }
        })
    }

    return(
        <div className="signupPage">
            <div className="signupContainer">
                <h1>SignUp</h1>
                <div>
                    <label className="email">Email</label>
                    <br/>
                    <input id="email" v-model="email" text="email" placeholder="Your email address" value={userInfo.email} 
                    onChange={(event)=>{change(event,"email")}}
                    >
                    </input>
                </div>
                <div>
                    <label className="password">Password</label>
                    <br/>
                    <input id="password" v-model="password" type="password" placeholder="Your Password" value={userInfo.password} onChange={(event)=>{change(event,"password")}}></input>
                </div>
                <div>
                    <label className="verifypassword">Confirm Password</label>
                    <br/>
                    <input id="password" v-model="password" type="password" placeholder="Confirm Your Password" value={userInfo.verifypassword} onChange={(event)=>{change(event,"verifypassword")}}></input>
                </div>
                <div className="signUp">
                    <button className="signupBtn">
                        SignUp
                    </button>
                    <p>Already have an account? <a href="">LogIn</a></p>
                </div>
            </div>
        </div>
    );
}


export default SignUp