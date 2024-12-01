import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [showText, setShowText] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [isMobile, setIsMobile] = useState(false);  // New state for mobile detection

    const fullText =
        "Zique offers personalized food recommendations based on your unique tastes, making dining out easier and more enjoyable. Discover new meals or enjoy your favorites with tailored suggestions.";

    useEffect(() => {
        // Detect screen size and set mobile state
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); // Adjust this threshold for mobile devices
        };
        handleResize(); // Call initially to set the state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (showText && !isMobile) { // Only animate text on desktop
            let index = 0;
            const interval = setInterval(() => {
                if (index < fullText.length) {
                    setTypedText((prev) => prev + fullText[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 5); // Typing speed
            return () => clearInterval(interval);
        } else if (isMobile) {
            setTypedText(fullText); // On mobile, display the text immediately without typing animation
        } else {
            setTypedText('');
        }
    }, [showText, isMobile]);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            document.querySelector('.L').classList.add('underline');
        }, 500);

        const timer2 = setTimeout(() => {
            document.querySelector('.L').classList.remove('underline');
            document.querySelector('.Y').classList.add('underline');
        }, 1500);

        const timer3 = setTimeout(() => {
            document.querySelector('.Y').classList.remove('underline');
            document.querySelector('.W').classList.add('underline');
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="header">
            <div className="text">
                <h1 className="L">LET US BE</h1>
                <h1 className="Y">YOUR</h1>
                <h1 className="W">WINGMAN</h1>
                {/* Always display h2 as text on mobile, clickable button on desktop */}
                <h2
                    className={`interactive-button ${isMobile ? 'no-button' : ''}`}
                    onClick={() => !isMobile && setShowText(!showText)}  // Clickable only on desktop
                >
                    FIND YOUR PERFECT DISH EVERYTIME.
                </h2>
                {/* On mobile, the text is always visible and not clickable */}
                <p className={`description ${isMobile || showText ? 'visible' : ''}`}>
                    {typedText}
                </p>
            </div>
        </div>
    );
};

export default Header;
