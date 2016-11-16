import React from 'react'
import {Link} from 'react-router'

const Header = () => {
    return (
        <header className="navbar navbar-default navbar-static-top">
            <div className="container">

                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button type="button" className="navbar-toggle"
                            data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header
