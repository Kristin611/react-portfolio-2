import React from 'react'
import ResumeK from '../assets/Richie_JSE_Resume.pdf'
// import Resume from '../assets/Richie_JSE_Resume.pdf'

const Resume = () => {
  return (
    <div>
      <div className='title-container'>
      <h2>Check out my skills and qualifications!</h2>
      <h3>View my <a href='https://docs.google.com/document/d/1DKFwZV9uz2h_KK16f7nOYCYnKu_4z2BnMWiR6No-mdQ/edit?usp=sharing' download='Kristin_Richie_Resume.pdf'>resume</a>.</h3>
      <h2>Below is a preview of my proficiencies.</h2>
      </div>
      <div className='title-2-container'>
      <h2>Front-End:</h2>
      <h2>Back-End:</h2>
      </div>
      <div className='list-container'>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Jinja</li>
        <li>Responsive Design</li>
      </ul>
      
      <ul>
        <li>APIs: REST & Query-based</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Insomnia/Postman</li>
        <li>MySQL & Sequelize</li>
        <li>MongoDB & Mongoose</li>
        <li>GraphQL & Apollo</li>
        <li>Flask</li>
        <li>SQLAlchemy</li>
      </ul>
      </div>



    </div>
  )
}

export default Resume