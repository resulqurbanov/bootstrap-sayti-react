import React from 'react'
import "./style.scss"
function Navbar() {
    return (
        <div class="esas">
        <nav>
            <a href="">Start Bootstrap</a>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Blog</a><i class="fa-solid fa-caret-down"></i></li>
                
                <li><a href="">Portfolio</a>   <i class="fa-solid fa-caret-down"></i></li>
             
            </ul>
            <i class="fa-solid fa-bars"></i>
        </nav>
        </div>
    )
}

export default Navbar