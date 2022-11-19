import React from "react";


import './css/my-payment.css'

export default function MyPayment(){
    return(
        <div className="my-payment">
            <h2>PAYMENT NAVIGATION</h2>
            <div className="my-payment-container">
                <div className="payment-status-details">
                    <div className="payment-status current"><h3>INVOICE</h3></div>
                    <div className="payment-status"><h3>MY BANK DETAILS</h3></div>
                </div>
                <div className="invoice">
                        <p><span>Payment Date:<b>Oct 25, 2022, 11:07 AM</b></span></p>
                        <p><span>Payment Amount:<b> &#8377; 2200</b></span> </p>
                        <p><b>Payment Made For Project:</b></p>
                        <p>K10 Maths Text Book Solution</p>
                        <p>K10 Maths Text Book Solution</p>
                </div>
                <div className="earning-details">
                    <h2>Lifetime Earning</h2>
                    <h3>&#8377; 3150</h3>
                    <h2>This Month Earning</h2>
                    <h3>&#8377; 0</h3>

                </div>
                
            </div>
        </div>
    )
}