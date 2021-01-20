import React from 'react';

import './Button.scss';

function Button({ children, className }) {
    return <button className={`app-button ${className}`}>{children}</button>
}

export default Button;