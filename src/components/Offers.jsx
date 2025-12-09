import React, { useEffect } from 'react';
import './Offers.css';
import { MdKingBed } from 'react-icons/md';
import { MdBathtub } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Offers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const Data = [
        {
            id: 1,
            imgSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            destTitle: 'Machu Picchu',
            location: 'Peru',
            price: '$7,452',
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            destTitle: 'Guanajuato',
            location: 'Mexico',
            price: '$2,452',
        },
        {
            id: 3,
            imgSrc: 'https://images.unsplash.com/photo-1548680674-32529729a674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            destTitle: 'Angkor Wat',
            location: 'Cambodia',
            price: '$4,400',
        },
    ];

    return (
        <section className="offer section container">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural specteculars, come see the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {Data.map(({ id, imgSrc, destTitle, location, price }) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="3000" key={id} className="singleOffer">
                                <div className="destImage">
                                    <img src={imgSrc} alt={destTitle} />
                                    <span className="discount">
                                        30% Off
                                    </span>
                                </div>

                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>
                                            {price}
                                        </h4>
                                        <span className="status">
                                            For Rent
                                        </span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className="icon" />
                                            <small>2 Beds</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className="icon" />
                                            <small>1 Bath</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <FaWifi className="icon" />
                                            <small>Wi-Fi</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className="icon" />
                                            <small>Shuttle</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className="icon" />
                                        <small>450 Vine St #310, {location}</small>
                                    </div>

                                    <button className="btn flex">
                                        View Details
                                        <BsArrowRightShort className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Offers;
