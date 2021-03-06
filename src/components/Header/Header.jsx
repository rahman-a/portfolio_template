import React from 'react'
import {wrapper} from './Header.module.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className="container">
            <div className={wrapper}>
                <Logo/>
                <Navbar/>
            </div>
        </div>
        
        
    )
}

export default Header
