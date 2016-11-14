import React, {PropTypes} from 'react'
import Header from './Header'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'

import './Application.scss'

import DevTools from '../dev-tools/DevTools'


const Application = ({children}) => {
    return (<div className="root">
        <Header/>
        <Nav/>
        <Content children={children}/>
        <DevTools/>
        <Footer/>
    </div>)
}


export default Application