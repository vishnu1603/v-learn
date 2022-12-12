import React from "react";
import { BrowserRouter, Routes, Route,Router ,Link} from "react-router-dom";
import './home.css' ;
import imge from './Screenshot_20221206_125821.png';
import cse from './Cse.png' ;
import it from './it.png' ;
import ece from './ece.png' ;
import eee from './eee.png' ;
import mech from './mech.png' ;
import civil from './civil.png' ;
import aids from './ai.png' ;
import aiml from './aiml.png' ;
import cyber from './cybersecurity1 (2).png' ;
import metro from './mechatronics.png' ;
import notes from './notes1.png' ;
import ques from './question.png' ;
import video from './video-lecture.png' ;
import placement from './promotion.png' ;
import email from './gmail.png' ;

function Home()
{
    return(
    <>
        <div class='logo'>
            <h1>V-Learn</h1>
            <div id="log">
                <Link to="/login"><a>Logout</a></Link>
            </div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#upload'>Upload</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#departments'>Departments</a></li>
            <li><a href='#con'>Contact</a></li>
        </ul>
        </div>
        <div id='home'>
            <div id='content'>
               <h2>Online Study Material</h2>
               <p>
                Subject-notes , previous year question<br/>
                papers , Tutorial videos , <br/>
                placement preparation contents and what not..!
                </p>
                <div id="btn">
                    <a href="#services">More details</a>
                </div>
            </div>
            <div id="image">
                <img src={imge} alt="Imge" />
            </div>  
        </div>
        <div id='upload'>
            <div id='content1'>
            <h2>UPLOAD FILES</h2>
            <p>
                Help us to Grow Bigger by Uploading Study Materials<br/>
                Which You Have Upload File is a completely free file sharing service<br/>
                that allows you to share files with end-to-end encryption<br/>
                a link that expires automatically.
            </p>
            <div>
                <button>Upload Here</button>
            </div>
            </div>
        </div>
        <div id="services">
            <div id="col">
            <h2>SERVICES</h2>
            <p>1. SUBJECT NOTES---Our notes are updated regularly. Dont miss to check this out.<br/>
            2. QUESTION PAPERS---Not satisfied with your performance? Try answering to previous year question papers!<br/>
            3. VIDEO LECTURES---We update dependencies to keep things fresh.<br/>
            4. PLACEMENT PREPARATION---You have to make your placements with love these days!</p>

            <div id="c1">
                <img class="ima1"src={notes} alt="STUDY"/>
                <a>Subject Notes</a>
            </div>
            <div id="c2">
                <img class="ima2"src={ques} alt="STUDY"/>
                <a>Question Papers</a>
            </div>
            <div id="c3">
                <img class="ima3"src={video} alt="STUDY"/>
                <a>Video Lectures</a>
            </div>
            <div id="c4">
                <img class="ima4"src={placement} alt="STUDY"/>
                <a>Placement Preparation</a>
            </div>
            </div>
        </div>
        <div id='departments'>
            <h2>DEPARTMENTS</h2>
                <p>All our study materials comes with unlimited disk space. Our support can be as quick as 15 minutes to get a response.</p>
                <div id="i1">
                <div class="card">
                    <img src={cse} alt="CSE"/>
                    <div class="info">
                        <a>CSE</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={it} alt="IT"/>
                    <div class="info">
                        <a>IT</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={ece} alt="ECE"/>
                    <div class="info">
                        <a>ECE</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={eee} alt="EEE"/>
                    <div class="info">
                        <a>EEE</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={mech} alt="MECH"/>
                    <div class="info">
                        <a>MECH</a>
                    </div> 
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={civil} alt="CIVIL"/>
                    <div class="info">
                        <a>CIVIL</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={aids} alt="AIDS"/>
                    <div class="info">
                       <a>AIDS</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={aiml} alt="AIML"/>
                    <div class="info">
                        <a>AIML</a>
                    </div> 
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={cyber} alt="CS"/>
                    <div class="info">
                        <a>CYBER SECURITY</a>
                    </div>
                </div>
                </div>
                <div id="i1">
                <div class="card">
                    <img src={metro} alt="mtro"/>
                    <div class="info">
                        <a>MECHATRONICS</a>
                    </div>   
                </div>
                </div>
        </div>
</>
    );
}

export default Home ;