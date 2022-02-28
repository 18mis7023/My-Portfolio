import React from "react";
import "./aboutus.css";
import { SiJava,SiPython} from "react-icons/si";
import dpprofile from "../../Images/dpprofile.svg";
import circ5 from "../../Images/image4home.svg";
const AboutUs = () => {
  return (
    <div id="about" className="home">
      <div className="aboutus_left">
        <div id="profile-image">
          <img className="dp" src={dpprofile}></img>          
        </div>
        <div className="circle5 floating_down">
          <img src={circ5} alt="image" className="circle5img1" />
        </div>
      </div>

      <div className="aboutus_right">
        <h1 className="aboutus_head_name">About me</h1>
        <p className="aboutus_desc">
          A technology enthusiast and a learning developer who is trying to
          solve real-world problems by developing simple applications.
        </p>
        <p className="aboutus_desc">
          In addition to my programming skills, I am also in possession of good
          social and communication skills. On top of that, I am a dedicated
          worker who enjoys working in a team, making me a good addition to any
          working team I am put into.
        </p>
        <h1 className="aboutus_head_name">My Skills</h1>
        <div>
          <div className="skills_outline">
            <span className="skills_span"><SiJava size={25}/> Java</span>
            <span className="skills_span"><SiPython size={20}/>Phython</span>
            <span className="skills_span">JavaScript</span>
            <span className="skills_span">ReactJs</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
