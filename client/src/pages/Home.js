import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import Button from '../components/uiElements/Button'

import './_Home.scss'
import golfBall from '../images/golfball.png'

function Home() {
    const history = useHistory();

    useEffect(() => {
        document.body.style.background = "url('/homeBackground.jpg')";
        document.body.style.backgroundSize = "cover";
    })

    const buttonClick = () => {
        history.push('/register');
    }

    return (
        <div className="Home">
            <div className="Home-top">
                <Fade direction="down" triggerOnce>
                    <div className="Home-top-logo">
                        <h1 className="Home-top-logo-title">UERM 87
                            <br /> Foundation
                        </h1>
                        <img src={golfBall} alt="golf-ball" className="Home-top-golf"></img>
                    </div>
                    <h2>Fundraising Golf Tournament</h2>
                    <h3>To benefit the health and charitable projects of the UERM87 Foundation Inc.</h3>
                    <div className="Home-info">
                        <div className="Home-info-container">
                            <i className="fas fa-calendar-alt fa-2x"></i>
                            <h2>Date</h2>
                            <p>Saturday
                                <br />
                                August 28, 2021
                            </p>
                        </div>
                        <div className="Home-info-container">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                            <h2>Location</h2>
                            <p>Lincoln Hills Golf Course
                                <br />
                                Lincoln, CA
                            </p>
                        </div>
                        <div className="Home-info-container">
                            <i className="fas fa-dollar-sign fa-2x"></i>
                            <h2>Fee</h2>
                            <p>$100
                                <br />
                                Per Person*
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up" triggerOnce>
                    <Button buttonClick={buttonClick} className="Button Home-register" text="Register by Aug 13!" />
                    <div className="Home-details">Details</div>
                    <i className="fas fa-chevron-down fa-3x Home-down"></i>
                </Fade>
            </div>
            <Fade direction="up" triggerOnce>
                <div className="Home-bottom">
                    <div className="Home-detail">
                        <i className="fas fa-info fa-3x Home-detail-icon"></i>
                        <div className="Home-detail-info">
                            <h3>Tournament Fee</h3>
                            <p>$100 per person</p>
                            <br />
                            <p>*Includes: Breakfast, catered lunch,<br />green fee, cart, range balls, and water</p>
                        </div>
                    </div>
                    <div className="Home-detail-row">
                        <div className="Home-detail bottom-small">
                            <i className="fas fa-hourglass-half fa-2x Home-detail-icon"></i>
                            <div className="Home-detail-time">
                                <h3>Time</h3>
                                <p>Check in starts at 7:30 AM
                                    <br />
                                    Shotgun starts at 8:30 AM</p>
                            </div>
                        </div>
                        <div className="Home-detail bottom-small">
                            <i className="fas fa-trophy fa-2x Home-detail-icon"></i>
                            <div className="Home-detail-prizes">
                                <h3>Awards</h3>
                                <p>Hole in one
                                    <br />
                                    Highest Score
                                    <br />
                                    Lowest Score
                                    <br />
                                    Sandy Par
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Home-detail bottom-med">
                        <i className="fas fa-hand-holding-usd fa-2x Home-detail-icon"></i>
                        <h3>Donation</h3>
                        <div className="Home-bottom-contact">
                            Call the number below for donations or sponsorship contributions. All fees, contributions, and donations are tax deductible as UERM87Foundation is a nonprofit 501c3 corporation.
                        </div>
                    </div>
                    <div className="Home-detail bottom-med">
                        <i className="fas fa-mobile fa-2x Home-detail-icon"></i>
                        <h3>Contact</h3>
                        <div className="Home-bottom-contact">
                            Doc Chito or Willie
                            <br />
                            <a href="tel:9168471716">(916) 847-1716</a>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default Home
