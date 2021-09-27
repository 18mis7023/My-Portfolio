import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import circ1 from '../../Images/image1home.svg';
import circ2 from '../../Images/image2home.svg';
import circ3 from '../../Images/image3home.svg';
import circ4 from '../../Images/image4home.svg';
// import circ1 from '../../Images/image1home.svg';
// import circ2 from '../../Images/homecirc2.png';
// import circ3 from '../../Images/homecirc3.png';
// import circ4 from '../../Images/homecirc4.png';
const Home = () => {
    return (
        <div className='home' >
            <div className='home_intro' >
                <p className='intro_title' ><span className='intro_title_span_main'>Hello!</span>
                    <br/>
                    <span className='intro_title_span_main' >I'm </span>
                    <span className="intro_title_span">Hemanth Chowdary </span>
                </p>
                <p className='intro_desc' >Engineering professional with a Master of Technology (M.Tech.) in Software Engineering from VIT University, AP with a keen interest in Application Development. Looking for opportunities to gain more knowledge about new technologies, apply my skills, and explore the unknown.</p>
                <div className='intro_hirediv' >
                    <NavLink to='/contact' className='explore'>Explore me</NavLink>
                </div>
                <div className='intro_resumediv' >
                    <NavLink to='/contact' className='resume'>See Resume</NavLink>
                </div>
            </div>
            
            
            <div className='intro_right' >
                {/* <OrangeBlob/> */}
                <div className="circle1">
                    <img src={circ1} alt="image" className="circle1img1"/>
                </div>
                <div className="circle2">
                    <img src={circ2} alt="image" className="circle2img1"/>
                </div>
                <div className="circle3">
                    <img src={circ3} alt="image" className="circle3img1"/>
                </div>
                <div className="circle4">
                    <img src={circ4} alt="image" className="circle4img1"/>
                </div>
                
                
            </div>
        </div>
            
    )
}

export default Home
