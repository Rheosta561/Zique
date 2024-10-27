import React from 'react'
import './Home.css'
import Header from './header/Header'
import BotPage from './bot/BotPage'
import About from '../About/About'
import Contact from '../Contact/Contact'
const Home = () => {
  return (
    <div className='home' id="home">
      <Header/>
      <BotPage/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
