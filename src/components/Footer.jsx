import React from 'react'
import GitPic from '../assets/github-mark-white.png'
import LinkedInImg from '../assets/LI-In-Bug.png'

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <a href="https://github.com/Kristin611">
          <img src={GitPic} className='git-img' alt="github cat logo" />
        </a>
        <a href="https://www.linkedin.com/in/kristin-richie-a9963b60/">
          <img src={LinkedInImg} className='linked-img' alt="linkedIn logo" />
        </a>
      </div>
    </div>
  )
}

export default Footer