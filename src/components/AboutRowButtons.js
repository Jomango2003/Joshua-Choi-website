import React from 'react'
import dog1 from '../images/corndoggg.png'
import dog2 from '../images/sideyeapp.png'
import dog3 from '../images/goodboyside.png'


export function AboutRowButtons(){
    return(
        <div className='about-row-dogs'>
            <DogButton />
            <DogButton2 />
            <DogButton3 />
        </div>
    );
}

function DogButton(){
    return(
        <div className = "button-on-image">
            <button>About</button>
            <img src={dog1} alt="corn dog"/>
        </div>
    );
}
function DogButton2(){
    return(
        <div className = "button-on-image">
            <button>Projects</button>
            <img src={dog2} alt="side eye"/>
        </div>
    );
}
function DogButton3(){
    return(
        <div className = "button-on-image">
            <button>Contact</button>
            <img src={dog3} alt="good boi"/>
        </div>
    );
}