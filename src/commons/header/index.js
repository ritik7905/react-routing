import React from 'react'
import { NavLink } from 'react-router-dom'

// styles
import "./style.css"

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className="lists">
                    <li><NavLink to={"/"} className={(props) => props.isActive ? "active" : null}>Home</NavLink></li>
                    <li><NavLink to={"/about"} className={(props) => props.isActive ? "active" : ""}>About</NavLink></li>
                    <li><NavLink to={"/blogs"} className={(props) => props.isActive ? "active" : ""}>Blogs</NavLink></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header