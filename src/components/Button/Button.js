import React from 'react'

import './Button.scss'

function Button({children,}) {
    return <button className='app-button'>{children}</button>
}

export default Button