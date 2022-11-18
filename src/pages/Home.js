import React from "react";
import Announcement from "../components/Announcement";
import WorkAction from "../components/WorkAction";
import Internship from "../components/Internship";

import './css/home.css'
export default function Home (){
    return(
        <div className="home-page">
            <div className="logo">
                <img  src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png" alt="logo"/>
            </div>
            <h1 className="welcome">Welcome to Digipplus</h1>
            <Announcement />
            <WorkAction />
            <Internship />
        </div>
    )
}