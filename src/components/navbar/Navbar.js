import React from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom';
import Button from '../button/Button'
const Navbar = () => {
  function togglemenu() {
    document.getElementById("navMenu").classList.toggle("active");
}
const navigate = useNavigate();
const handleFormClick = () => {
  navigate('/register');
};
const handleHomeClick = () => {
  navigate('/');
  window.location.hash = '#home';  // Adds the hash after navigating to the home path
};
const handleAboutClick = () => {
  navigate('/');
  window.location.hash = '#about';  // Adds the hash after navigating to the home path
};
const handleContactClick = () => {
  navigate('/');
  window.location.hash = '#contact';  // Adds the hash after navigating to the home path
};
  return (
    <div className='navbar'>

        <div className='left'>
        <div onClick={handleContactClick} className='item1'>Contact</div>
        </div>
        <div className='mid'>
            <div className='logo'></div>
        </div>
        <div className='right'>
            <div onClick={handleHomeClick} className='item1'> Home</div>
            <div onClick={handleAboutClick}className='item2'> About</div>
            <Button text = 'Early Access' onClick={handleFormClick} />
        </div>
        <div className='hamb'> 
        <Button text = 'Early Access' onClick={handleFormClick}/>
        <div className='toggler' onClick={togglemenu}>
        <div class="nav-menu" id="navMenu">
            <div onClick={handleHomeClick} >Home</div>
            <div onClick={handleAboutClick} >About</div>
            <div onClick={handleContactClick} >Contact</div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
