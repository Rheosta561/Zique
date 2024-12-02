import React from 'react'
import './Home.css'
import Header from './header/Header'
import BotPage from './bot/BotPage'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Explore from '../Explore/Explore'
const Home = () => {
  return (
    <div className='home' id="home">
      <Header/>
      <Explore/>
      {/* <BotPage/>
      <About/> */}
      <Contact/>
    </div>
  )
}

export default Home
