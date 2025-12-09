import React from 'react';
import './Popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Data = [
    {
        id: 1,
        imgSrc: 'https://images.unsplash.com/photo-1533923303102-ac42c75a3424?q=80&w=2670&auto=format&fit=crop',
        destTitle: 'Morocco',
        location: 'Morocco',
        grade: '4.8',
    },
    {
        id: 2,
        imgSrc: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop',
        destTitle: 'United Kingdom',
        location: 'United Kingdom',
        grade: '4.5',
    },
    {
        id: 3,
        imgSrc: 'https://images.unsplash.com/photo-1548680674-32529729a674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        destTitle: 'Korea',
        location: 'Korea',
        grade: '4.2',
    },
    {
        id: 4,
        imgSrc: 'https://images.unsplash.com/photo-1529260830199-42c42dda5f3d?q=80&w=2523&auto=format&fit=crop',
        destTitle: 'Italy',
        location: 'Italy',
        grade: '3.9',
    }
];

const Popular = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos="fade-right" className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            From historical cities to natural specteculars, come see the best of the world!
                        </p>
                    </div>

                    <div data-aos="fade-left" className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="destImage">
                                    <img src={imgSrc} alt="Image Title" />
                                </div>

                                <div className="destFooter">
                                    <div className="number">
                                        0{id}
                                    </div>
                                    <div className="destText flex">
                                        <h6>{location}</h6>
                                        <span className="flex">
                                            <span className="dot">
                                                <BsDot className="icon" />
                                            </span>
                                            {grade}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;
