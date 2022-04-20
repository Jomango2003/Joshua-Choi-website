import React from 'react'
import josh from '../images/joshCheese.png'

export function AboutMain(){
    return (
        <div>
        <ul className="about-main-format">
            <li>
            <h1 className="intro-quote">Pursuing Passion through honest work</h1>
        <h3>Growing up feeling behind in life,
        I overcame my shortcomings through 
        hard work and dedication.</h3>
        <h3>Grateful for the internet and its resources, I am driven to help others 
        realize their potential through technology</h3>
            </li>
            <li>
            <img src={josh}></img>
            </li>
        </ul>
        </div>
    );
}