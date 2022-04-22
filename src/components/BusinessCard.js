import { borderRadius, flexbox, margin } from '@mui/system'
import React from 'react'
import josh from '../images/joshBusiness.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/Mail.jpg'

export function BusinessCard(){
    return(
        <div className='business-page-body'>
            <div className="business-card-container">
                <img src = {josh}></img>
            <div className="business-card-content">
                <div className='business-intro'> 
                    <h1>Joshua Choi</h1>
                    <h4 style={{color:"#F3BF99", marginTop:"-15px"}}>Software Engineer</h4>
                    <h5 style={{marginTop:"-12px"}}>Resume</h5>
                    <div style={{marginTop:"-16px"}}>
                        <button style={
                        {borderRadius:"5px",
                        width:"115px",
                        height:"34px",
                        margin:"10px",
                        border:"none",
                        padding:"0"}}>
                            <img src={mail}/>
                            Email</button>
                        
                        <button style={
                            {
                            borderRadius:"5px",
                            color:"white",
                            width:"115px",
                            height:"34px",
                            border:"none",
                            padding:"0",
                            background:"#5093E2"}}>
                            <img src={linkedin}></img>
                        Linkedin</button>
                    </div>    
                </div>
                <div style={{marginRight:"30px", marginLeft:"30px"}}>
                <h2>About</h2>
                <h5 style={{fontSize:"13px", marginTop:"-13px"}}>
                    I am a student at UCI passionate about programming.
                    I love to learn and grow as a developer, and I will never pass
                    on an opportunity to try new experiences.
                </h5>
                <h2>Interests</h2>
                <h5 style={{fontSize:"13px", marginTop:"-13px"}}>
                    Weight lifting, body-building, programming,
                    web development, game development, machine learning,
                    guitar, drums, and great food 
                </h5>
                </div>
                <h6 style={{fontSize:"5px"}}>lmao this took like 3 hours to make... please excuse the poorly aligned icon and text hehe</h6>
            </div>
        </div>
        </div>
    )  
}