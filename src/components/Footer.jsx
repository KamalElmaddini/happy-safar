import React, { useEffect } from 'react';
import './Footer.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="footer">
            <div className="secContainer container grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className="flex">
                                <MdOutlineTravelExplore className="icon" />
                                Happy Safar.
                            </h1>
                        </a>
                    </div>

                    <div className="socials flex">
                        <FiFacebook className="icon" />
                        <AiOutlineTwitter className="icon" />
                        <AiOutlineYoutube className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Condition</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>

                <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">+444 555 666 777</span>
                    <span className="email">isratech8@gmail.com</span>
                </div>
            </div>
        </section>
    );
};

export default Footer;
