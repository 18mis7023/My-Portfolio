import React, { Component } from 'react'
import './aboutus.css';
import homecirc from "../../Images/homecirc4.png";
import { SiJava,SiPython} from "react-icons/si";
export class AboutUs2 extends Component {
  render() {
    return (
        <>
            <div className="d-flex">
                <div className="flex-fill m-2">
                    <div id="profile-image">
                        <img className="dp m-4" src={homecirc}></img>          
                    </div>
                </div>
                <div className=" flex-fill m-4">
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
        </>
    )
  }
}

export default AboutUs2;