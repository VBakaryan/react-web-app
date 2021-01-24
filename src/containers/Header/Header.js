import React, { useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import HeaderLogo from '../../assets/Icons/HeaderLogo';
import HeaderShoppingCart from '../../assets/Icons/HeaderShoppingCart';

import './Header.scss';

const Header = () => {
    
    const [headerBackround, setHeaderBackround] = useState(false)
        
    const scrollHeader = () => {
        if(window.scrollY > 20){
            setHeaderBackround(true)
        }else{
            setHeaderBackround(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader)
        return () => {
            window.removeEventListener("scroll", scrollHeader)
        }
    }, [])

    return (
        <div className={`app-header${headerBackround ? ' app-header--scroll' : ''}`}>
            <div className="app-header__login">
                <HeaderLogo />
            </div>
            <div className="app-header__right">
                <div className="app-header__right__shop-icon">
                    <HeaderShoppingCart />
                </div>
                <Button className="app-header__right__btn">
                    Մուտք
                </Button>
            </div>
        </div>
    )
}

export default Header;