import React from 'react';

import FooterTopLogo from "../../assets/Icons/FooterTopLogo";
import Button from "../../components/Button/Button";

import "./Footer.scss"

function FooterTop(){
    return(
        <div class="app-footer-top">
            <div class="app-footer-top__left">
                <FooterTopLogo />
                <p class="app-footer-top__text">
                    THINK OUT OF THE BOXY
                </p>
            </div>
            <Button className="app-footer-top__btn">
                Առաջարկ ունես
            </Button>
        </div>
    ) 
}

export default FooterTop;