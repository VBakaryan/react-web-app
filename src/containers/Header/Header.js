import React, {useEffect, useState} from 'react';

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
            <header id='app-header' className={`app-header ${isScrolled} ? 'app-header--scrolled' : ''}`}>Initial header</header>
        </div>
    )
}

export default Header;