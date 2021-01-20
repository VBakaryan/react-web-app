import React from 'react';

import './HeaderComponent.scss'

const HeaderComponent = ({isScrolled, children}) => {
    return (
        <div>
            <header id='app-header' className={`app-header ${isScrolled} ? 'app-header--scrolled' : ''}`}>{children}</header>
        </div>
    )
}

export default HeaderComponent;