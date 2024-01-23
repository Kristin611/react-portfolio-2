import React from 'react'
import ProfilePic from '../assets/crazy-cat.jpeg';

const About = () => {
  return (
    <div>
        <div className='wrapper'>
            <h2>About Me</h2>
            <div className='about-container'>
            <img src={ProfilePic} alt="profile picture" className='profile-pic'/>
            <p>I am a full-stack developer!</p>
            </div>

        </div>

    </div>
  )
}

export default About