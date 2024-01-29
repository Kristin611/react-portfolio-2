import React from 'react'
import GitPic from '../assets/github-mark-white.png'
import LinkedInImg from '../assets/LI-In-Bug.png'
import DEV from '../assets/dev-community-icon.png'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      
        <a href="https://github.com/Kristin611">
          <img src={GitPic} className='git-img' alt="github cat logo" />
        </a>
        <a href="https://www.linkedin.com/in/kristin-richie-a9963b60/">
          <img src={LinkedInImg} className='linked-img' alt="LinkedIn logo" />
        </a>
        <a href="https://dev.to/dashboard">
          <img src={DEV} className='dev-img' alt="DEV Community logo" />
        </a>
      
    </div>
  )
}

export default Footer