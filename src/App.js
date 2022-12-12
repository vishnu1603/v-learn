import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Login from "./ReactProject/login";
import Signup from "./ReactProject/signup";
import Home from "./ReactProject/home";
import Forgotpassword from "./ReactProject/forgot";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="forgot" element={<Forgotpassword/>}/>
            <Route path="*" element={<Signup/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App ;
