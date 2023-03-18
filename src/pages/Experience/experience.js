import React, { useState } from "react";
import {
  MDBRow,
  MDBCollapse,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import "./experience.css";

const Experience = () => {
  const [showFirstElement, setShowFirstElement] = useState(false);
  const [showSecondElement, setShowSecondElement] = useState(false);
  const [showThirdElement, setShowThirdElement] = useState(false);
  const [showFourthElement, setShowFourthElement] = useState(false);

  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);
  const toggleThirdElement = () => setShowThirdElement(!showThirdElement);
  const toggleFourthElement = () => setShowFourthElement(!showFourthElement);

  return (
    <div id="experience">
      <p className="project_intro_title text-center">
        <span className="intro_title_span"> Experience </span>
      </p>
      {/* <p className="intro_desc text-center">These are my experiences.</p> */}
      <div className="container">

      <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "17rem",padding:"10dp" }}>
            <MDBBtn className="myexp paddingblock" tag="a" onClick={toggleFourthElement}>
            &#x261B;&#x261E; Intel Technology India Pvt. Ltd. | Bangalore
            </MDBBtn>
            <MDBCollapse show={showFourthElement}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Validation and Debug Engineer Intern.
                    <br />
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="a"
                  href="#"
                  action
                >
                  &#x2713; Enabling orchestration for discrete graphics sub system.
                  <br />
                  &#x2713;  Identify and root cause the issues and Supporting team in bringing up infrastructure.
                  <br />
                  &#x2713; Define and execute test cases to validate system level workload and customer use cases.
                  <br />
                  &#x2713;  Regression checks and explore on the possibility to extend support for scale level validation.
                  <br />
                  &#x2713; Developed a python-based test scrips to enable automation of test execution
                  <br />
                  &#x2713;  Developed a Dashboards in Kibana.
                
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>

        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "17rem",padding:"10dp" }}>
            <MDBBtn className="myexp paddingblock" tag="a" onClick={toggleFirstElement}>
            &#x261B;&#x261E; Ethical Hat Cyber Security | Gurugram
            </MDBBtn>
            <MDBCollapse show={showFirstElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="a"
                  href="#"
                  action
                >
                  &#x2713; I had worked on mobile and web development of Alumni Reconnect Project for the VIT AP Campus. <br />&#x2713;   In the Mobile Application development worked within the Technical Team - developing a front end and backend using the Firebase and In web development worked as backed developer along with React JS Framework.
                  We developed 1st version of the Alumni Reconnect Project and approved by VC of our campus.
                  <br />
                  &#x2713;  Working prototype of Alumni Reconnect platform using Java and Firebase by creating an app using Android studio.
                  <br />
                  &#x2713;  In the mobile application we implemented the Registration and login module along with newsfeed module.
                
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>

        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "22rem" }}>
            <MDBBtn className="myexp paddingblock" tag="b" onClick={toggleSecondElement}>
            &#x261B;&#x261E; CSI Chapter | VIT-AP
            </MDBBtn>
            <MDBCollapse show={showSecondElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="b"
                  href="#"
                  action >
                  &#x2713; I had worked on mobile and web development of Alumni Reconnect Project for the VIT AP Campus. <br />&#x2713;   In the Mobile Application development worked within the Technical Team - developing a front end and backend using the Firebase and In web development worked as backed developer along with React JS Framework.
                  We developed 1st version of the Alumni Reconnect Project and approved by VC of our campus.
                  <br />
                  &#x2713;  Working prototype of Alumni Reconnect platform using Java and Firebase by creating an app using Android studio.
                  <br />
                  &#x2713;  In the mobile application we implemented the Registration and login module along with newsfeed module.
                
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>

        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "22rem" }}>
            <MDBBtn className="myexp paddingblock" tag="c" onClick={toggleThirdElement}>
            &#x261B;&#x261E; Alumni Reconnect | VIT-AP
            </MDBBtn>
            <MDBCollapse show={showThirdElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="c"
                  href="#"
                  action
                >
                 &#x2713; I had worked on mobile and web development of Alumni Reconnect Project for the VIT AP Campus. <br />&#x2713;   In the Mobile Application development worked within the Technical Team - developing a front end and backend using the Firebase and In web development worked as backed developer along with React JS Framework.
                  We developed 1st version of the Alumni Reconnect Project and approved by VC of our campus.
                  <br />
                  &#x2713;  Working prototype of Alumni Reconnect platform using Java and Firebase by creating an app using Android studio.
                  <br />
                  &#x2713;  In the mobile application we implemented the Registration and login module along with newsfeed module.
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>
      </div>
    </div>
  );
};

export default Experience;
