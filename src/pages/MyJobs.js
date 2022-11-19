import React from "react";
import Announcement from "../components/Announcement";

import './css/my-jobs.css'

export default function MyJobs(){
    return(
        <div className="my-jobs">
            <h2>Jobs</h2>
            <div className="my-jobs-container">
                <div className="jobs-status-details">
                    <div className="job-status"><h3>Solution Writing</h3></div>
                    <h3>FOR JOB APPLICATION</h3>
                    <div className="job-status current"><h3>SCREENING TASKS</h3></div>
                    <h3>APPLICATION STATUS</h3>
                    <div className="job-status"><h3>JOB APPLICATION STATUS</h3></div>
                </div>
                <div className="active-task">
                        <h3>K10 Maths Text Book Solution</h3>
                        <p>Intern Digipplus</p>
                </div>
                
            </div>
                <div className="announcement-box">
                
                    <Announcement />
                </div>
        </div>
    )
}