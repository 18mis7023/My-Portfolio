import React from "react";
import PCard from "../../Components/PCard/PCard";
import { MdDeveloperMode } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import "./Projects.css";
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiMongodb,SiFlutter,SiFirebase,SiSocketDotIo} from 'react-icons/si'

function Projects() {
  return (
    <div className="projects">
      <p className="project_intro_title">
        Recent <span className="intro_title_span"> Projects </span>
      </p>
      <p className="intro_desc" style={{ width: "50%" }}>
        These are the projects I have worked on. They are few other projects
        which are currently being developed.
      </p>
      <div className="pcard_holder">
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="VCorner"
          description="VCorner is a go to platform for students where they can rate faculty, know the courses what other students taking and can share rides."
          stack={[
            <span>Django</span>
          ]}
        />
        <PCard
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="VStud"
          description="VStud is an Academics app. Where Students can manage their Attendance, Assignments, Faculty Details and many more"
          stack={[
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiFlutter className="picon" color="#00C1F2" size={20} />,
          ]}
        />
        <PCard
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="VPoll"
          description="VPOLL is an photography contest app where users can rate the Images."
          stack={[
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiFlutter className="picon" color="#00C1F2" size={20} />,
          ]}
        />
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="AChat"
          description="AChat is an Anonymous Chat Platform. Where students come together and discuss problems and sign petitions."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="EShop"
          description="EShop is an online shopping platform which all functionalities."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiMongodb className="picon" color="#12924F" size={20} />,
            <span>Electron</span>
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="EChess"
          description="EChess is an online chess playing platform along with video chat. (Didn't Setup TURN or STUN server. so there are constraints)"
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiSocketDotIo className="picon" color="#00C1F2" size={20} />,
            <span>Electron</span>
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="FileShare"
          description="FileShare is a file sharing platform where users can download files uploaded with in 24hrs."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <span>Electron</span>
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="CodeShare"
          description="CodeShare is a live code share platform where users can edit and compile code at same time."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiSocketDotIo className="picon" color="#00C1F2" size={20} />,
            <span>Electron</span>
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="Groww Frontend Clone"
          description="This project is clone of Online Trading Platform Groww. (Backend isn't developed as there isn't any apis for Indian Stocks)"
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="BDEV"
          description="BDEV is an online learning app. (In Progress)"
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <span>Electron</span>
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;

//<MdDeveloperMode color="lightseagreen" size={35} />
