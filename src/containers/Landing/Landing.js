import React from 'react';

import Button from '../../components/Button/Button';
import landingImg from '../../assets/landing/landing.png';

import './Landing.scss';

const Landing = () => {
    return (
        <div className="app-landing">
            <div className="app-landing__img">
                <img src={landingImg} alt="landing-img"></img>
            </div>
            <div className="app-landing__main-block">
                <div>
                    <h1 className="app-landing__main-block__text">
                        Ապահովում ենք երջանկություն <br></br>և լավ տրամադրություն<br></br>
                        բոլորին և ամենուր
                    </h1>
                    <Button className="app-landing__main-block__btn"> Ստանալ </Button>
                </div>
            </div>
        </div>
    )
};

export default Landing;