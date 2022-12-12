import React from 'react';
import { BrowserRouter, Routes, Route,Router ,Link} from "react-router-dom";
import './forgot.css';

function Forgotpassword()
{
  return(
    <>
      <div id="logo">
            <h1>V-Learn</h1>
      </div>
      <div id="container">
      <h2>Forgot Password</h2>
      <form>
        <div class="pad">
          Email : <input type="email" placeholder="Enter Your Email" required/>
        </div><br/>
        <div>
          Create Password : <input type="password" placeholder="Enter New Password" minlength="8" required/>
        </div><br/>
        <div>
          Confirm Password : <input type="password" placeholder='Confirm Password' minLength={8} required/>
        </div><br/>
        <div>
           <Link to="/home"><button>Login</button></Link>
        </div>
      </form>
      </div>
    </>
  );
}

export default Forgotpassword;