import React, {useEffect, useState} from 'react';

import Button from '../../components/Button/Button';
import HeaderComponent from '../../components/Header/HeaderComponent/HeaderComponent';
import HeaderIcon from '../../components/Header/HeaderIcon/HeaderIcon';
import HeaderShoppingCart from '../../components/Header/HeaderShoppingCart/HeaderShoppingCart';

import './Header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = (e) => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div>
            <HeaderComponent isScrolled={isScrolled}>
                <div className="app-header--icon">
                    <HeaderIcon />
                </div>
                <div className="app-header--shopping-cart">
                    <HeaderShoppingCart />
                </div>
                <Button className="app-header--btn"> Մուտք </Button>
            </HeaderComponent>
        </div>
    )
}

export default Header;