import React from 'react'

import './Layout.scss'

function Layout({ children }){
    return <div id="app-layout">
        <main id='app-main'>
            {children}
        </main>
    </div>
}

export default Layout