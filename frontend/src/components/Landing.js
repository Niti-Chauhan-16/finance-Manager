import Navbar from './Navbar';
import Header from './Header';
import AboutUs from './AboutUs';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';
import React from 'react'

export default function Landing() {
  return (
    <div>      
    <Navbar/>
    <Header/>
    <AboutUs/>
    <Features/>
    <Contact/>
    <Footer/>
    </div>
  )
}