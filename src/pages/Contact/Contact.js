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
        <div className="ctext">
           <h1>Reach Out</h1>
           <h2 className='desc'>Got a question? A craving? Or just want to say hi? We’re all ears (and taste buds)! Drop us a message, and let’s get to know each other better. We promise to get back to you faster than you can say 'What’s for dinner?'
           <br/><br/>Tried Zico? Let us know if he nailed it or needs a little more spice!
           </h2>
           <Button text="Feedback" onClick = {handleFeedClick}/>
           <div className='mc'>
              <h2> <a href='mailTo:meet@zique.co'>Mail : meet@zique.co</a></h2>
              <h2><a href=''></a>Call : +91 82091 84843</h2>
            </div>
            <a href = "https://www.instagram.com/ziquedine?igsh=MTMzdjVwejYyMno5dQ==" target='_blank'><div className='logos'>
            <div className='item1'></div>
            <div className='item2'> Check us out</div>
           </div>
           </a>
        </div>
        <div className='main_image'></div>
    </div>
  )
}

export default Contact
