import React from 'react';

import FooterTopLogo from "../../assets/Icons/FooterTopLogo";
import Button from "../Button/Button";

import "./FooterTop.scss"

function FooterTop(){
    return(
        <div className="app-footer-top">
            <div className="app-footer-top__left">
                <FooterTopLogo />
                <p className="app-footer-top__text">
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