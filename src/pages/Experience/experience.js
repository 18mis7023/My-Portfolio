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

  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);
  const toggleThirdElement = () => setShowThirdElement(!showThirdElement);

  return (
    <div id="experience">
      <p className="project_intro_title text-center">
        <span className="intro_title_span"> Experience </span>
      </p>
      <p className="intro_desc text-center">These are my experiences.</p>
      <div className="container">
        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "22rem" }}>
            <MDBBtn className="myexp" tag="a" onClick={toggleFirstElement}>
              &bull; My Experience title - 1
            </MDBBtn>
            <MDBCollapse show={showFirstElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="a"
                  href="#"
                  action
                >
                  I worked within the Technical Team - developing a Indoor
                  positioning system using BLE Beacons. We developed end to end
                  working prototype of Indoor positioning system using BLE
                  Beacons by creating an app using Android studio. As the GPS
                  does not work properly inside building therefore the need for
                  indoor positioning arises. For providing the location-based
                  services inside the building we have implemented the indoor
                  positioning application in our project using the Bluetooth
                  enabled beacons.
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>

        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "22rem" }}>
            <MDBBtn className="myexp" tag="b" onClick={toggleSecondElement}>
              &bull; My Experience title - 2
            </MDBBtn>
            <MDBCollapse show={showSecondElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="b"
                  href="#"
                  action
                >
                  I worked within the Technical Team - developing a Indoor
                  positioning system using BLE Beacons. We developed end to end
                  working prototype of Indoor positioning system using BLE
                  Beacons by creating an app using Android studio. As the GPS
                  does not work properly inside building therefore the need for
                  indoor positioning arises. For providing the location-based
                  services inside the building we have implemented the indoor
                  positioning application in our project using the Bluetooth
                  enabled beacons.
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </MDBRow>

        <MDBRow>
          <MDBListGroup className="mylist1 m-4" style={{ minWidth: "22rem" }}>
            <MDBBtn className="myexp" tag="c" onClick={toggleThirdElement}>
              &bull; My Experience title - 3
            </MDBBtn>
            <MDBCollapse show={showThirdElement}>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem
                  className="mylist-info m-4"
                  tag="c"
                  href="#"
                  action
                >
                  I worked within the Technical Team - developing a Indoor
                  positioning system using BLE Beacons. We developed end to end
                  working prototype of Indoor positioning system using BLE
                  Beacons by creating an app using Android studio. As the GPS
                  does not work properly inside building therefore the need for
                  indoor positioning arises. For providing the location-based
                  services inside the building we have implemented the indoor
                  positioning application in our project using the Bluetooth
                  enabled beacons.
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
