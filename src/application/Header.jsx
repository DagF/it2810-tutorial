import React from 'react'
import Nav from './Nav.jsx'

const Header = () => {
    return (
        <header className="navbar navbar-default navbar-static-top">
            <div className="container">

                <div className="navbar-header">
                    <a href="index.html" className="navbar-brand">Blasting Off With Bootstrap</a>
                    <button type="button" className="navbar-toggle"
                            data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <Nav>
                </Nav>
            </div>
        </header>
    )
};

export default Header
