import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"
function Navbar() {
    return (
        <div class="esas">
        <nav>
            <a href="">Start Bootstrap</a>
            <ul>
                <li><NavLink to={"/"} href="">Home</NavLink></li>
                <li><NavLink to={"/About"} href="">About</NavLink></li>
                <li><NavLink href="">Contact</NavLink></li>
                <li><NavLink href="">Pricing</NavLink></li>
                <li><NavLink href="">FAQ</NavLink></li>
                <li><NavLink href="">Blog</NavLink><i class="fa-solid fa-caret-down"></i></li>
                <li><NavLink href="">Portfolio</NavLink>   <i class="fa-solid fa-caret-down"></i></li>
             
            </ul>
            <i class="fa-solid fa-bars"></i>
        </nav>
        </div>
    )
}

export default Navbar