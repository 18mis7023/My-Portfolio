import React from "react";
import "./Services.css";
import Card from "./../../Components/Card/Card";
import { MdDeveloperMode } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";

function Services() {
  return (
    <div className="about" id="services">
      <div className="services_title">
        <p className="p_expertise">
          <span className="title_expertise">My</span> <span className="intro_title_span"> Expertise </span>
        </p>
        <p className="intro_desc intro_desc_expertise">
          I can work with new domains and technologies. I had experienced in through Internship.
        </p>
      </div>

      <div className="about_card_div1">
        <Card
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="Mobile App Development"
          description="I develop apps using Flutter. I consider myself as an Intermediate in app development."
        />
        <div className="mobilecarddiv">
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
