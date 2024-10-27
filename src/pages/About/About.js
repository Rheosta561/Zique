import React from 'react'
import './About.css'
import Story from './story/Story'
import Work from './work/Work'
const About = () => {
  return (
    <div className='about' id="about">
        <Story/>
        <Work/>
    </div>
  )
}

export default About
