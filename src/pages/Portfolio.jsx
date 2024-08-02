import React from 'react'
import Juicebox from '../assets/Juicebox.png'
import Grocerz from '../assets/Grocerz.png'
import Jate from '../assets/JATE.png'
import NoteTaker from '../assets/Notetaker.png'
import Planner from '../assets/Daily-Planner.png'
import myWeather from '../assets/myWeather.png'
import GitPic from '../assets/github-mark-white.png'
import Huddle from '../assets/Huddle.png'


const Portfolio = () => {
  return (
    <div>
        <div>
            <h2 className='proj-title'>Projects</h2>
            <div className='proj-container'>
                <div className='div-item'>
                    <a href="https://rocky-taiga-01843-d9e019c27e3f.herokuapp.com/">
                        <img src={Huddle} className='huddle' alt="homepage of Huddle, a student blog app" />
                        <figcaption>Huddle<a href="https://github.com/Kristin611/huddle"><img src={GitPic} className='git' alt="github-icon" /></a>

                        </figcaption>
                    </a>
                </div>
                <div className='div-item'>
                    <a href="https://pure-falls-37475-b827dca668fb.herokuapp.com/">
                        <img src={Juicebox} alt="homepage of Juicebox, a file sharing app for images" />
                        <figcaption>Juicebox <a href="https://github.com/Kristin611/juicebox"><img src={GitPic} className='git' alt="github-icon" /></a>

                        </figcaption>
                    </a>
                </div>
                <div className='div-item'>
                    <a href="https://kristin611.github.io/GrocerEZ/">
                        <img src={Grocerz} alt="homepage of Grocerz, a grocery planning app" />
                        <figcaption>GrocerEZ <a href="https://github.com/Kristin611/GrocerEZ"><img src={GitPic} className='git' alt="github-icon" /></a>

                        </figcaption>
                    </a>
                </div>
                <div className='div-item'>
                    <a href="https://rocky-fjord-99809-bcfef4594424.herokuapp.com/">
                        <img src={NoteTaker} alt="homepage of Note Taker, a note taking app" />
                        <figcaption>Note Taker <a href="https://github.com/Kristin611/Note-Taker"><img src={GitPic} className='git' alt="github-icon" /></a>
                            
                        </figcaption>
                    </a>
                </div>
                <div className='div-item'>
                    <a href="https://kristin611.github.io/daily-planner/">
                        <img src={Planner} alt="homepage of Daily Planner, a scheduling app" />
                        <figcaption>Daily Planner <a href="https://github.com/Kristin611/daily-planner"><img src={GitPic} className='git' alt="github-icon" /></a>

                        </figcaption>
                    </a>
                </div>
                <div className='div-item'>
                    <a href="https://kristin611.github.io/myWeather/">
                        <img src={myWeather} alt="homepage of myWeather, a weather application" />
                        <figcaption>myWeather <a href="https://github.com/Kristin611/myWeather"><img src={GitPic} className='git' alt="github-icon" /></a>

                        </figcaption>
                    </a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Portfolio