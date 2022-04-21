import React from 'react'
import dog from "../images/cheemsInCircle.png"

import { Link } from 'react-router-dom';


export function AboutHeader(){
    return(
        <nav className='nav-header'>
            <ul className='nav-list'> 
                <li>
                    <Link to="/"><img className = "nav-image" src={dog} alt="cheems"/></Link>   
                    <h2 className = "nav-title">Joshua Choi's Website</h2>
                </li>
                <li><h1><Link to="/about">About</Link></h1></li>
                <li><h1><Link to="/projects">Projects</Link></h1></li>
                <li><h1><Link to="/contact">Contact</Link></h1></li>
            </ul>
        </nav>
    );
}