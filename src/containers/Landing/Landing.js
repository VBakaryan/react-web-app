import React from 'react';

import Button from '../../components/Button/Button'
import landingImg from '../../assets/landing/landing.png'

import './Landing.scss'

const Landing = () => {
    return (
        <div className="app-landing">
            <div className="app-landing--img">
                <img src={landingImg} alt="landing-img"></img>
            </div>
            <div className="app-landing-text-main">
                <div className="app-landing--h1">
                    <h1 className="app-landing--text">
                        Ապահովում ենք երջանկություն <br></br>և լավ տրամադրություն<br></br>
                        բոլորին և ամենուր
                    </h1>
                    <Button className="app-landing--btn"> Ստանալ </Button>
                </div>
            </div>
        </div>
    )
};

export default Landing;