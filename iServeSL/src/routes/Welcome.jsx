import React from 'react'
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default Welcome;
