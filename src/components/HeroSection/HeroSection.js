import React from "react";
import './HeroSection.css'
import heroImage from './Iamge.png'
function HeroSection() {
    return (
        <div className="hero-bg-container">
            <div className="container">
            <div className="row  p-4">
                    <div className="col-12 col-sm-6 col-md-6 d-flex flex-column justify-content-center">
                            <div className="btn-hero-network">
                                <button className="btn hero-network-btn1">NetBook Community</button>
                            </div>
                            <div>
                                <h1 className="hero-head">Your Solutions For Community</h1>
                            <p className="hero-sub-head">More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                            </div>
                            <div>
                                <button className="btn btn-primary about-me p-3">About More</button>
                                <button className="btn invite-btn">Invite Friend</button>
                            </div>
                    </div>
            
//         {<div className="col-12 col-sm-6 col-md-6">
//                     <img src = {heroImage} className="hero-image w-100"/>
//                 </div>}

            </div>
        </div>
        </div>
    )
}

export default HeroSection ;
