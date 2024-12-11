import React, { useEffect, useState, useRef } from 'react';
import './Header.css';

const Header = () => {
    const [showText, setShowText] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [typedText, setTypedText] = useState(" ");  // Track the typed text
    const fullText =
        "ZZique offers personalized food recommendations based on your unique tastes, making dining out easier and more enjoyable. Discover new meals or enjoy your favorites with tailored suggestions ";

    useEffect(() => {
        // Detect screen size and set mobile state
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); // Adjust this threshold for mobile devices
        };
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // When switching from mobile to desktop, reset text and start typing from the beginning
        if (!isMobile) {
            setTypedText(" ");  // Reset text on desktop
            if (showText) {
                let index = 0;
                const interval = setInterval(() => {
                    if (index < fullText.length) {
                        setTypedText((prev) => prev + fullText[index]); // Update the typed text
                        index++;
                    } else {
                        clearInterval(interval); // Stop when text is fully typed
                    }
                }, 5); // Speed of typing effect
                return () => clearInterval(interval); // Cleanup interval
            }
        } else {
            // On mobile, directly show the full text
            setTypedText(fullText);
        }
    }, [isMobile, showText]); // Trigger whenever isMobile or showText changes

    useEffect(() => {
        const timer1 = setTimeout(() => {
            document.querySelector('.L1').classList.add('underline');
        }, 500);

        const timer2 = setTimeout(() => {
            document.querySelector('.L1').classList.remove('underline');
            document.querySelector('.Y2').classList.add('underline');
        }, 1500);

        const timer3 = setTimeout(() => {
            document.querySelector('.Y2').classList.remove('underline');
            document.querySelector('.W3').classList.add('underline');
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="Mheader">
            <div className="htext">
                <h1 className="L1">LET US BE</h1>
                <h1 className="Y2">YOUR</h1>
                <h1 className="W3">WINGMAN</h1>
                <h2
                    className={`interactive-button ${isMobile ? 'no-button' : ''}`}
                    onClick={() => !isMobile && setShowText(!showText)} 
                >
                    FIND YOUR PERFECT DISH EVERYTIME .
                </h2>
                <p className={`description ${isMobile || showText ? 'visible' : ''}`}>
                    {typedText} 
                </p>
            </div>
        </div>
    );
};

export default Header;
