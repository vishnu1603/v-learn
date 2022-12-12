import React from 'react';
import { BrowserRouter, Routes, Route,Router ,Link} from "react-router-dom";
import Signup from './signup';
import './login.css';  

const Login=()=>{
    return(
        <>
        <div class='title'>
            <h1 id="tit">V - Learn</h1>
        </div>
        <div id="contact">
            <h2>Login</h2>
            <form>
                <div>
                    Email :<input type="email" placeholder='Enter Your Email' required/>
                </div><br/>
                <div>
                    Password :<input type="password" placeholder='Enter Your Password' required/>
                </div><br/>
                <div id='login'>
                <Link to="/home"><button>Login</button></Link>
                <span class='for'><Link to="/forgot"><a>Forgot Password ?</a></Link></span>
                </div><br/>
            </form>
            <div>
                Whether you doesn't have Account ?
             <Link to="/signup"><button>Signup</button></Link>
            </div>
        </div>
        </>
    );
};

export default Login ;