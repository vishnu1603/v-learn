import React from 'react';
import { BrowserRouter, Routes, Route,Router ,Link} from "react-router-dom";
import './signup.css' ;

const Signup=()=>{
    return(
        <div id="contact">
                <form>
                    <h2>Create Account</h2>
                    <div>
                        First Name : <input type='text' placeholder='Enter Your First Name' required/>
                    </div><br/>
                    <div>
                        Last Name : <input type='text' placeholder='Enter Your Last Name' required/>
                    </div><br/>
                    <div>
                        Email : <input type='email' placeholder='Enter Your Email' required/>
                    </div><br/>
                    <div>
                        password : <input type='Password' placeholder='Enter Your Password' minLength='8' required/>
                    </div><br/>
                    <Link to="/home"><button>Sign up</button></Link>
                </form>
        </div>
    );
}

export default Signup ;



