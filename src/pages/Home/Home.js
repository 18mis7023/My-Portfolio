import React from "react";
// import { a } from "react-router-dom";
import "./Home.css";
import circ1 from "../../Images/image1home.svg";
import circ2 from "../../Images/image2home.svg";
import circ3 from "../../Images/image3home.svg";
import circ4 from "../../Images/image4home.svg";
// import circ1 from '../../Images/image1home.svg';
// import circ2 from '../../Images/homecirc2.png';
// import circ3 from '../../Images/homecirc3.png';
// import circ4 from '../../Images/homecirc4.png';
import {
  FloatingLettersTextBuilder,
  BlinkingCursorTextBuilder,
} from "react-animated-text-builders";
import { Phrase, Char } from "animatedtxt";

const Home = () => {
  var resumelink="https://drive.google.com/file/d/1rSfIUp1jSRpEdcpMcP7GWQfoGbF1Phvq/view?usp=share_link";
  return (
    <div className="home">
      <div className="home_intro">
        <p className="intro_title">
          <span className="intro_title_span_main">Hello!</span>
          <br />
          <span className="intro_title_span_main">I'm </span>
          <span className="intro_title_span">
            <Phrase margin={20} size={50} duration={0.5} color="#fc59ff">
              <Char char="H" delay={2.3} />
              <Char char="E" delay={2.8} />
              <Char char="M" delay={3.3} duration={0.2} />
              <Char char="A" delay={3.5} />
              <Char char="N" delay={4} />
              <Char char="T" delay={4.5} />
              <Char char="H" delay={5} />
            </Phrase>
            <hr style={{ height: "0px", visibility: "hidden" }} />
            <Phrase margin={15} size={50} duration={0.5} color="#fc59ff">
              <Char char="C" delay={2.3} />
              <Char char="H" delay={2.8} />
              <Char char="O" delay={3.3} duration={0.2} />
              <Char char="W" delay={3.5} />
              <Char char="D" delay={4} />
              <Char char="A" delay={4.5} />
              <Char char="R" delay={5} />
              <Char char="Y" delay={5} />
            </Phrase>
          </span>
        </p>
        <p className="intro_desc">
          Engineering professional with a Master of Technology (M.Tech.) in
          Software Engineering from VIT University, AP with a keen interest in
          Application Development. Looking for opportunities href gain more
          knowledge about new technologies, apply my skills, and explore the
          unknown.
        </p>
        <div className="intro_hirediv">
          <a href="https://www.linkedin.com/in/kodalihemanthchowdary/" target="_blank" className="explore">
            Explore me
          </a>
        </div>
        <div className="intro_resumediv">
          <a href="https://drive.google.com/file/d/1rSfIUp1jSRpEdcpMcP7GWQfoGbF1Phvq/view?usp=sharing" target="_blank" className="resume">
            See Resume
          </a>
        </div>
      </div>

      <div className="intro_right">
        {/* <OrangeBlob/> */}
        <div className="circle1 floating">
          <img src={circ1} alt="image" className="circle1img1" />
        </div>
        <div className="circle2 floating_down">
          <img src={circ2} alt="image" className="circle2img1" />
        </div>
        <div className="circle3 floating">
          <img src={circ3} alt="image" className="circle3img1" />
        </div>
        <div className="circle4 floating_down">
          <img src={circ4} alt="image" className="circle4img1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
