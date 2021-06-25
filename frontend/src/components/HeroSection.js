import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import video from './videos/video-2.mp4'; 

function HeroSection() {
    return (
        <div className='hero-container'>
             <video src={video} autoPlay loop muted/>
             <p>what are you waiting?</p>
             <div className='hero-btns'>
                 <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                 GET START
                 </Button>

                 <Button className='btns' buttonStyle='btn--prymary' buttonSize='btn--large'>
                 WATCH TRAILER
                 <i className ='far fa-play-circle'/>
                 </Button>
             </div>
            
        </div>
    )
}

export default HeroSection
