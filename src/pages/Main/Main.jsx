import React from 'react'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/aboutus'
import ContactUs from '../Contactus/contactus'
import Experience from '../Experience/experience'
import Projects2 from '../Projects2/Projects2'
import Services from '../Services/Services'



function Main() {
  return (
    <>
        <Home />
        <AboutUs />
        {/* <AboutUs2 /> */}
        <Experience />
        {/* <Projects /> */}
        <Projects2 />
        <Services />
        <ContactUs />
    </>
  )
}

export default Main