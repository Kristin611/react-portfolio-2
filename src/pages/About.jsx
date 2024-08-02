import React from 'react'
import ProfilePic from '../assets/Kristin_2.jpg';

const About = () => {
  return (
    <div>
        <div className='wrapper'>
            <h2>Welcome to my portfolio!</h2>
            <div className='about-container'>
            <img src={ProfilePic} alt="profile picture" className='profile-pic'/>
            <h2>About Me</h2>
            <p>I am a dynamic and motivated junior software developer.</p> 
              Possessing over 5 years of experience in teaching and curriculum development, I excel in effectively communicating complex concepts, fostering collaborative environments, and leading teams toward achieving common goals. My background in academia and teaching has honed my problem-solving and critical thinking abilities, which I now apply to tackle software development challenges with precision and innovation. 
              I am eager to leverage my diverse skill set and passion for web development in order to contribute to an agile software development team. 
              <p>As a woman who is a sociologist entering the software development field, I believe I possess a unique opportunity to contribute meaningfully to my local community. My passion for understanding societal dynamics, particularly their impact on women and girls, fuels my commitment to inspiring them. Encouraging women and girls to actively participate as contributors, innovators, and leaders in the continually evolving landscape of technology holds deep personal significance for me.</p>

              <p>To view my past and current projects, navigate to the "Portfolio" section above!</p>
            </div>

        </div>

    </div>
  )
}

export default About