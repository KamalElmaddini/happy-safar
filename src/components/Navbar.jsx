import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const [transparent, setTransparent] = useState('navBarSection');

    // Function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    // Function to remove navbar
    const removeNav = () => {
        setActive('navBar');
    };

    // Function to add background on scroll
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('navBarSection activeHeader');
        } else {
            setTransparent('navBarSection');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', addBg);
        return () => window.removeEventListener('scroll', addBg);
    }, []);

    return (
        <section className={transparent}>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>Happy Safar.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#popular" className="navLink">Popular</a>
                        </li>
                        <li className="navItem">
                            <a href="#offers" className="navLink">Offers</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#blog" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
