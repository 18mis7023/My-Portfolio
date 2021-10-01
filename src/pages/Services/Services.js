import React from "react";
import "./Services.css";
import Card from "./../../Components/Card/Card";
import { MdDeveloperMode } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";

function Services() {
  return (
    <div className="about" id="about" >
      <div>
        <p className="intro_title">
          My <span className="intro_title_span"> Services </span>
        </p>
        <p className='intro_desc' >I grasp new concepts and ideas quickly. So, I am open for training in companies</p>
      </div>

      <div className="about_card_div1">
        <Card
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="Mobile App Development"
          description="I develop apps using Flutter. I consider myself as an Intermediate in app development."
        />
        <div className="mobilecarddiv" >
          <Card
            icon={<SiWebpack color="dodgerblue" size={35} />}
            title="Full Stack Development"
            description="I develop websites using MERN & FERN Stack mostly. I am good at developing websites."
          />
          <Card
            icon={<IoSchoolSharp color="chocolate" size={35} />}
            title="Tutor"
            description="I can make people understand how to code and develop websites. I can teach Java, MERN & FERN"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
