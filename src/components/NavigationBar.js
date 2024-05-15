import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="bg-blue-600 p-4 fixed w-full top-0 z-10">
            <ul className="flex justify-around text-white">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;