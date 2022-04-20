import React from 'react'
import dog from "../images/cheemsInCircle.png"


export function AboutHeader(){
    return(
        <nav className='nav-header'>
            <ul className='nav-list'> 
                <li>
                    <img className = "nav-image" src={dog} alt="cheems"/>
                    <h2 className = "nav-title">Joshua Choi's Website</h2>
                </li>
                <li><h1>About</h1></li>
                <li><h1>Projects</h1></li>
                <li><h1>Contact</h1></li>
            </ul>
        </nav>
    );
}