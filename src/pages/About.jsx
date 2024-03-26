import React from 'react'
import ProfilePic from '../assets/profile-pic.png';

const About = () => {
  return (
    <div>
        <div className='wrapper'>
            <h2>Welcome to my portfolio!</h2>
            <div className='about-container'>
            <img src={ProfilePic} alt="profile picture" className='profile-pic'/>
            <h2>About Me</h2>
            <p>I am a full-stack developer who has a passion for turning a business's vision into a reality. <br />With more people online today, I think it is important that a business's
                    website reflects its values, mission, and services. Equally important is the functionality of a
                    business's website so that users and clients have a seamless experience while browsing. <br />I am excited
                    at the prospect of making your vision a reality. To view my past projects and the services
                    that I can offer to you and your business, navigate to portfolio section above!</p>
            </div>

        </div>

    </div>
  )
}

export default About