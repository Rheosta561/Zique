import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <div className='feedback'>
        <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSfmr20ROCyFHExyOREVcOCM5uQVI-EjVyPU2p4kpnaFHLMU6w/viewform?embedded=true' 
        allow="clipboard-write *"
        style={{ border: 'none' }}
        title="Chatbot"
      ></iframe>
      
    </div>
  )
}

export default Feedback
