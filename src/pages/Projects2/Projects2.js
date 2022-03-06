import React from "react";
import PCard from "../../Components/PCard/PCard";
import { MdDeveloperMode } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import "./Projects2.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiGooglecolab,SiPython,SiJava,SiMongodb, SiFlutter, SiFirebase, SiPhp, SiGithub, SiAndroid,SiFigma,SiReact,SiPuppeteer,SiCypress } from "react-icons/si";
import { Icon } from '@iconify/react';

function Projects() {
  return (
    <div className="projects">
      <p>
        <span className="title_project">Recent</span>
        <span className="intro_title_span"> Projects </span>
      </p>
      <p className="intro_desc" style={{ width: "50%" }}>
        These are the projects I have worked on. They are few other projects
        which are currently being developed.
      </p>
      <div className="pcard_holder">
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="ClipNOW"
          description="Built for using as a Personal live Clipboard for users to share between their devices. Users can instantly create their clips using unique clip-id created by them and use it on another device to get their data. Used Real-time Firebase database for live-sharing of data."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            // <SiFirebase className="picon" color="#00C1F2" size={20} />,
            <SiFigma className="picon" color="#00C1F2" size={20} />,
          ]}
          source={<SiGithub className="picon" color="#00C1F2" size={20} />}
          sourcelink="https://clipnow.netlify.app/"
        />
        <PCard
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="Alumni Reconnect"
          description="In this project we are developing the mobile application for the campus. it is useful for passed out batches to connect with campus and their friends from this application"
          stack={[
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiAndroid className="picon" color="#00C1F2" size={20} />,
          ]}
        />
        <PCard
          icon={<MdDeveloperMode color="lightseagreen" size={35} />}
          title="VTIAP BookHub"
          description="It is an Mobile application where we can search for books and get the details of the books. It is developed using Kotlin and Firebase. This project is developed for our campus and it is deployed in playstore"
          stack={[
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiFlutter className="picon" color="#00C1F2" size={20} />,
            <SiAndroid className="picon" color="#00C1F2" size={20} />,
            // <Icon icon="logos:android-icon" inline={true} />
            
          ]}
        />
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="Heart Stroke Detection "
          description="Heart stroke detection is a Text data analysis using MLP Classifier which detects the heart-stroke from the given relative data and then shows whether is there possibility to get stroke or not. This is a basic project done with 3 algorithims with textual data."
          stack={[
            // <FaReact className="picon" color="#61DAFB" size={20} />,
            // <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <SiGooglecolab className="picon" color="#FFCB2E" size={20} />,
            <SiPython className="picon" color="white" size={20} />,
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="SOFTWARE EFFORT ESTIMATION"
          description="This Effort Estimation is predicted for the Project.Prediction of effort(in terms of person-hours) using machine learning algorithm with desharnais dataset. This is a basic project done with 3 algorithims with textual data."
          stack={[
            // <FaReact className="picon" color="#61DAFB" size={20} />,
            // <FaNodeJs className="picon" color="#689F63" size={20} />,
            <Icon icon="logos:python" inline={true}/>,
            <SiGooglecolab className="picon" color="#FFCB2E" size={20} />,
            // <SiPython className="picon" color="white" size={20} />,
            // <SiMongodb className="picon" color="#12924F" size={20} />,
            <span>Electron</span>,
          ]}
        />

        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="AutomatedTesting API Development"
          description="This project is developed for the Automated Testing API. It is developed using Python and NodeJs in my internship. In this project i had involved with the new softwares and tools, they are Cypress,puppeteer and Scraping."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <Icon icon="logos:python" inline={true} />,
            // <Icon icon="logos:puppeteer" inline={true} />,
            <SiPuppeteer className="picon" size={20} />,
            <SiCypress className="picon" size={20} />,
          ]}
        />
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="Snov Emails"
          description="Extracting Emails from the snov.io website using Cypress Tool and storing the emails in the json format in the project folder. Here just we need to an domain address of the mail ids that we need. from this application we get a mails of any domain easily."
          stack={[
            // <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiCypress className="picon" size={20} />,
            // <SiFirebase className="picon" color="#FFCB2E" size={20} />,
          ]}
        />
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="Travel and Tourism"
          description="This project is developed for the Travel and Tourism website. It is developed using Java and OOPS concepts. Here we can add the places,routes and their details.we can also check for the routes and places on particular places.This ia a mini project developed at my 2nd semister."
          stack={[
            // <FaReact className="picon" color="#61DAFB" size={20} />,
            // <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiJava className="picon" size={20} />,
            <spam>OOPS</spam>,
            // <SiFirebase className="picon" color="#FFCB2E" size={20} />,
          ]}
          source={<SiGithub className="picon" color="#00C1F2" size={20} />}
          sourcelink="https://github.com/Hemanth3246/TravelAndTourism"
        />
        <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="Google Cloud NCAA® March Madness Analytics -Basketball Tourney"
          description="This project is developed using the kaggle dataset called Google Cloud NCAA® March Madness Analytics -Basketball Tourney. This is a basic project done with R using Linear Regression and Decission Tree.The data is in textual and did a preprocessing tecquniques and predicted whether which team will win the match or not."
          stack={[
            // <FaReact className="picon" color="#61DAFB" size={20} />,
            // <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiJava className="picon" size={20} />,
            <spam>R</spam>,
            // <SiFirebase className="picon" color="#FFCB2E" size={20} />,
          ]}
          source={<SiGithub className="picon" color="#00C1F2" size={20} />}
          sourcelink="https://github.com/Hemanth3246/BasketBallPredictions"
        />


        {/* <PCard
          icon={<SiWebpack color="dodgerblue" size={35} />}
          title="FileShare"
          description="FileShare is a file sharing platform where users can download files uploaded with in 24hrs."
          stack={[
            <FaReact className="picon" color="#61DAFB" size={20} />,
            <FaNodeJs className="picon" color="#689F63" size={20} />,
            <SiFirebase className="picon" color="#FFCB2E" size={20} />,
            <span>Electron</span>,
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
            <span>Electron</span>,
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
            <span>Electron</span>,
          ]}
        /> */}
      </div>
    </div>
  );
}

export default Projects;

//<MdDeveloperMode color="lightseagreen" size={35} />
