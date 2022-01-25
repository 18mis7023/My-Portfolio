import React from "react";
import PCard from "../../Components/PCard/PCard";
import { MdDeveloperMode } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiSocketDotIo,
} from "react-icons/si";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
} from "mdb-react-ui-kit";

function Projects() {
  return (
    <div id="projects" className="projects">
      <p className="project_intro_title">
        Recent <span className="intro_title_span"> Projects </span>
      </p>
      <p className="intro_desc" style={{ width: "50%" }}>
        These are the projects I have worked on. They are few other projects
        which are currently being developed.
      </p>
      <MDBRow className="row-cols-1 row-cols-md-3 g-5">
        <MDBCol className="justify-content-center">
          <MDBCard
            // background="info"
            className="mycard-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title1</MDBCardHeader>
            <MDBCardBody className="mycard-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            // background="info"
            className="mycard-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title2</MDBCardHeader>
            <MDBCardBody className="mycard-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard
            // background="info"
            className="mycard2-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title3</MDBCardHeader>
            <MDBCardBody className="mycard2-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            // background="info"
            className="mycard2-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title4</MDBCardHeader>
            <MDBCardBody className="mycard2-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard
            // background="info"
            className="mycard3-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title5</MDBCardHeader>
            <MDBCardBody className="mycard3-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            // background="info"
            className="mycard3-outer text-white h-99 w-100 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <MDBCardHeader>Project Title6</MDBCardHeader>
            <MDBCardBody className="mycard3-inner">
              <MDBCardTitle>Description</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Projects;

//<MdDeveloperMode color="lightseagreen" size={35} />
