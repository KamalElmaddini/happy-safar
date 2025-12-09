import React, { useEffect } from 'react';
import './Blog.css';
import { BsArrowRightShort } from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const Posts = [
        {
            id: 1,
            postImage: 'https://images.unsplash.com/photo-1596423736506-61dc5df07df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Beautiful Morocco, let us travel!',
            desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
        },
        {
            id: 2,
            postImage: 'https://images.unsplash.com/photo-1548680674-32529729a674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Romantic moments under Eiffel Tower',
            desc: 'with vast swaths of desert in its east and west, Morocco is a land of contrasts, from the snow-capped Atlas Mountains to the Sahara Desert.'
        },
        {
            id: 3,
            postImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Let us have an adventure outside Tunisia.',
            desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region.'
        },
        {
            id: 4,
            postImage: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Best Country in East Africa',
            desc: 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
        }
    ];

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Our Best Blog?
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An insight to the incredible experience in the world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {Posts.map(({ id, postImage, title, desc }) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="2000" key={id} className="singlePost grid">
                                <div className="imgDiv">
                                    <img src={postImage} alt={title} />
                                </div>

                                <div className="postDetails">
                                    <h3 data-aos="fade-up" data-aos-duration="3000">
                                        {title}
                                    </h3>
                                    <p data-aos="fade-up" data-aos-duration="4000">
                                        {desc}
                                    </p>
                                </div>

                                <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                                    Read More
                                    <BsArrowRightShort className="icon" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
