import React from "react";
import "./aboutus.css";
import { SiJava,SiPython} from "react-icons/si";
import dpprofile from "../../Images/dpprofile.svg";
import circ5 from "../../Images/image4home.svg";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Stack from '@mui/material/Stack';
import Progress from "../../Components/ProgressBar/Progress";
// import TimeLine from "../../Components/TimeLine/TimeLine";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div id="about" className="homeabout">
        <div className="aboutus_left">
          <div id="profile-image">
            <img className="dp" src={dpprofile}></img>          
          </div>
          <div className="circle5 floating_down">
            <img src={circ5} alt="image" className="circle5img1" />
          </div>
        </div>

        <div className="aboutus_right">
          <h1 className="aboutus_head_name">About Me</h1>
          <p className="aboutus_desc">
          I work on Full-Stack and Mobile Application development. More interested to work upon software applications that delight and inform.On top of that, I am a dedicated
            worker who enjoys working in a team, making me a good addition to any
            working team. I constantly strive on work that challenges me to learn something new and explore on different domains and new things.
          </p>
          <p className="aboutus_desc">
            In addition to my programming skills, I am also in possession of good
            social and communication skills.  I am put into.
          </p>
        </div>
      </div>
      <MDBContainer className="mLeftPerc">
      <h1 className="aboutus_head_name">My Skills</h1>
      <MDBRow className="mLeft mt-4 mb-5">
        <MDBCol size='md' className='colorBL'>
          <h3>Languages</h3>
          <Stack spacing={1} className="p-3">
            <Progress name="Java" score={90} classname="mt-2" />
            <Progress name="Python" score={60} classname="mt-4" />
            <Progress name="JavaScript" score={50} classname="mt-4" /> 
            <Progress name="Kotlin" score={50} classname="mt-4" /> 
            <Progress name="C" score={40} classname="mt-4" />   
          </Stack>
        </MDBCol>
        <MDBCol size='md' className='colorBL'>
          <h3>Skills & Technologies</h3>
          <Stack spacing={1} className="p-3">
            <Progress name="NodeJs" score={90} classname="mt-2" />
            <Progress name="React Js" score={60} classname="mt-4" />
            <Progress name="Firebase Database" score={50} classname="mt-4" />   
            <Progress name="Mongo Database" score={50} classname="mt-4" />   
          </Stack>
        </MDBCol>
        <MDBCol size='md' className='colorBL'>
          <h3>Tools</h3>
          <Stack spacing={1} className="p-3">
            <Progress name="Git" score={90} classname="mt-2" />
            <Progress name="Postman" score={60} classname="mt-4" />
            <Progress name="Cypress" score={50} classname="mt-4" />   
            <Progress name="Puppeteer" score={50} classname="mt-4" />   
            <Progress name="Adobe XD,Figma" score={50} classname="mt-4" /> 

          </Stack>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      
        {/* <div>
          <div className="skills_outline">
            <span className="skills_span"><SiJava size={25}/> Java</span>
            <span className="skills_span"><SiPython size={20}/>Phython</span>
            <span className="skills_span">JavaScript</span>
            <span className="skills_span">ReactJs</span>
          </div>
        </div> */}
    </div>
  );
};

export default AboutUs;
