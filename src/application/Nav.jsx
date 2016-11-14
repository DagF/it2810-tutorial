import React from 'react'
import {Link} from 'react-router'


const Nav = () => {
    return (<nav className="navbar">
        <Link id="shopButton" to="/">Home</Link>
        <Link id="shopButton" to="/pagetwo">Monkeys</Link>
    </nav>)
}

export default Nav
