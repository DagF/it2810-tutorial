import React from 'react'
import {Link} from 'react-router'


const Nav = () => {
    return (<nav className="navbar">
        <Link id="shopButton" to="/shop">Shop</Link>
        <Link id="homeButton" to="/">Home</Link>
    </nav>)
}

export default Nav
