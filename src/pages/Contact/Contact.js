import React from 'react'
import './Contatc.css'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const handleFeedClick = () => {
    navigate('/feedback');
  };
  return (
    
    <div className='contact' id="contact">
        <div className="text">
           <h1>Reach Out</h1>
           <h2 className='desc'>Got a question? A craving? Or just want to say hi? We’re all ears (and taste buds)! Drop us a message, and let’s get to know each other better. We promise to get back to you faster than you can say 'What’s for dinner?'
           <br/><br/>Tried Zico? Let us know if he nailed it or needs a little more spice!
           </h2>
           <Button text="Feedback" onClick = {handleFeedClick}/>
           <div className='mc'>
              <h2>Mail : meet@zique.co</h2>
              <h2>Call : +91 82091 84843</h2>
            </div>
           <div className='logos'>
            <a href = "https://www.instagram.com/ziquedine?igsh=MTMzdjVwejYyMno5dQ==" target='_blank'><div className='item1'></div></a>
            <div className='item2'> Check us out</div>
           </div>
        </div>
        <div className='main_image'></div>
    </div>
  )
}

export default Contact
