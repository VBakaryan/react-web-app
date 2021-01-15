import React, {useState} from 'react';

import './Header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = (e) => {
        if (window.scrollY > 400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    
    const componentDidMount = () => {
        window.addEventListener('scroll', listenScrollEvent)
    }

    return (
        <div>
            <header id='app-header' className={isScrolled ? 'app-header--scrolled' : 'app-header'}>Initial header</header>
        </div>
    )
}

export default Header;