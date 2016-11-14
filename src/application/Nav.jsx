import React from 'react'
import {Link} from 'react-router'


const Nav = () => {
    return (<nav>
        <ul className="nav navbar-nav navbar-right collapse navbar-collapse text-center">
            <li>
                <Link id="shopButton" to="/pagetwo">Monkeys</Link>
            </li>
        </ul>
    </nav>)
}

export default Nav
