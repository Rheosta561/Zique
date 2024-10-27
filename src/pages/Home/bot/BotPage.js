import React from 'react'
import './BotPage.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
const BotPage = () => {
  const navigate = useNavigate();
  const handleBotClick = () => {
    navigate('/bot');
  };
  return (
    <div className='botpage'>
        <div className='text'>
            <h1>AI Bot</h1>
            <h2>Meet Zico, Your Answer To
            "What Should I Eat?"</h2>
            <p>Zico is your virtual dining assistant, ready to help you find the perfect dish at any restaurant. Just tell Zico what you're in the mood for or if you have specific cravings, and it will generate a personalized menu based on your palate profile. Whether you're unsure of what to eat or have dietary restrictions, Zico is here to make your dining experience smooth, quick, and tailored to your taste.</p>
            <Button text='Hit Up, Zico' onClick={handleBotClick}/>
        </div>
        <div className='image'>
            <div className='img_container'></div>
        </div>
      
    </div>
  )
}

export default BotPage
