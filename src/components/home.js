import React, { useEffect, useState } from "react";
import "./home.scss"

function Home(){
    return (
        <div className="homePageBox">
            <h1>Drop it home page material</h1>
            <div className="homeContainer">
                <a href="/login">
                    <button>Login</button>
                </a>
                <br/>
                <a href="/signup">
                    <button>Signup</button>
                </a>
            </div>
        </div>
    );
}

export default Home