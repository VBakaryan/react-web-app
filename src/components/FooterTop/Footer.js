import React from 'react'

import "./Footer.scss"
import FooterTopLogo from "../../assets/Icons/FooterTopLogo"
import FooterButton from "../../assets/Icons/FooterButton"


function FooterTop(){
    return(
        <div class="app-footer-top">
            <div class="app-footer-left">
                <FooterTopLogo />
                <p class="app-footer__top-column__left-column__text-content">
                    THINK OUT OF THE BOXY
                </p>
            </div>
            <FooterButton />
        </div>
    ) 
}

export default FooterTop;