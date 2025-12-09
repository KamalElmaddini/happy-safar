import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Offers from './components/Offers';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
