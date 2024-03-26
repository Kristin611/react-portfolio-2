import React from 'react'
import ResumeK from '../assets/Richie_JSE_Resume.pdf'

const Resume = () => {
  return (
    <div>
      <div className='title-container'>
      <h2>Check out my skills and qualifications!</h2>
      <h3>Download my <a href={ResumeK} download='Kristin_Richie_Resume.pdf'>resume</a>.</h3>
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
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Responsive Design</li>
      </ul>
      
      <ul>
        <li>APIs: REST & Query-based</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Insomnia</li>
        <li>MySQL & Sequelize</li>
        <li>MongoDB & Mongoose</li>
        <li>GraphQL & Apollo</li>
      </ul>
      </div>



    </div>
  )
}

export default Resume