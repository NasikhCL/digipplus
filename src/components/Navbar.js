import React from "react";
import './css/navbar.css'
import { Link } from "react-router-dom";
export default function Navbar(){

    return(
        <div className="navbar">
            <nav>
                <img className="logo-img" src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png" alt="logo"/>
                <h2 className="app-title">Digipplus</h2>
                <ul>
                  <Link to="/"><li>HOME</li></Link>  
                  <Link to="/my-jobs"><li>My Jobs</li></Link>  
                  <Link to="/my-payment"><li>My Payments</li></Link>    
                </ul>
                <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
            </nav>
        </div>
    )
}