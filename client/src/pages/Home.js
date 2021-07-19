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
                            <div>Saturday</div>
                            <div>August 28, 2021</div>
                        </div>
                        <div className="Home-info-container">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                            <h2>Location</h2>
                            <div>Lincoln Hills Golf Course</div>
                            <div>Lincoln, CA</div>
                        </div>
                        <div className="Home-info-container">
                            <i className="fas fa-dollar-sign fa-2x"></i>
                            <h2>Fee</h2>
                            <div>$100</div>
                            <div>Per Person*</div>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up" triggerOnce>
                    <Button buttonClick={buttonClick} className="Button Home-register" text="Register Now" />
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
                            <div>$100 per person</div>
                            <br />
                            <div>*includes: Breakfast, catered lunch,<br />green fee, cart, range balls, and water</div>
                        </div>
                    </div>
                    <div className="Home-detail bottom-small">
                        <i className="fas fa-hourglass-half fa-2x Home-detail-icon"></i>
                        <div className="Home-detail-time">
                            <h3>Time</h3>
                            <div>Check in starts at 7:30 AM</div>
                            <div>Shot Gun starts at 8:30 AM</div>
                        </div>
                    </div>
                    <div className="Home-detail bottom-small">
                        <i className="fas fa-trophy fa-2x Home-detail-icon"></i>
                        <div className="Home-detail-prizes">
                            <h3>Prizes</h3>
                            <div>Hole in one: placeholder</div>
                            <div>Lowest Score: placeholder</div>
                            <div>Sandy par: placeholder</div>
                        </div>
                    </div>
                    <div className="Home-detail bottom-small">
                        <i className="fas fa-mobile fa-2x Home-detail-icon"></i>
                        <h3>Contact</h3>
                        <div className="Home-bottom-contact">
                            Doc Chito and Willie <a href="tel:9168471716">(916) 847-1716</a>
                        </div>
                    </div>

                </div>
            </Fade>

        </div>
    )
}

export default Home
