import React, { useEffect } from 'react';
import './About.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const img = 'https://images.unsplash.com/photo-1594913785162-e678a0c2bd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    const img2 = 'https://images.unsplash.com/photo-1596423736506-61dc5df07df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    const img3 = 'https://images.unsplash.com/photo-1594913366099-0a6e34479532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

    return (
        <section className="about section container">
            <div className="secContainer">
                <div className="titleDiv">
                    <small>
                        About Us
                    </small>
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Why Hikings?
                    </h2>
                </div>

                <div className="mainContent grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                        <img src={img} alt="Mountain" />
                        <h3>100+ Mountains</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                        <img src={img2} alt="Hiking" />
                        <h3>1000+ Hikings</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                        <img src={img3} alt="Customer" />
                        <h3>2000+ Customers</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
