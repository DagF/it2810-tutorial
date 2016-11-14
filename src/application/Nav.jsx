import React from 'react'
import {Link} from 'react-router'


const Nav = () => {
    return (<nav className="navbar">
        <Link id="shopButton" to="/page1">Page1</Link>
    </nav>)
}

export default Nav
