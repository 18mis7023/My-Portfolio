import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

import "./index.css";

const Navbar = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);

  const [navactive1, setNavactive1] = useState(false);
  const [navactive2, setNavactive2] = useState(false);
  const [navactive3, setNavactive3] = useState(false);
  const [navactive4, setNavactive4] = useState(false);
  const [navactive5, setNavactive5] = useState(false);
  const [navactive6, setNavactive6] = useState(false);

  //set setNavactive to active when the user is on the page
  const handleNav = (e) => {
    // setNavactive(!navactive);
    if (e.target.getAttribute("href") === "#") {
      setNavactive1(!navactive1);
      setNavactive2(false);
      setNavactive3(false);
      setNavactive4(false);
      setNavactive5(false);
      setNavactive6(false);
    }
    if (e.target.getAttribute("href") === "#home") {
      setNavactive1(!navactive1);
      setNavactive2(false);
      setNavactive3(false);
      setNavactive4(false);
      setNavactive5(false);
      setNavactive6(false);
    } else if (e.target.getAttribute("href") === "#about") {
      setNavactive2(!navactive2);
      setNavactive1(false);
      setNavactive3(false);
      setNavactive4(false);
      setNavactive5(false);
      setNavactive6(false);
    } else if (e.target.getAttribute("href") === "#experience") {
      setNavactive3(!navactive3);
      setNavactive1(false);
      setNavactive2(false);
      setNavactive4(false);
      setNavactive5(false);
      setNavactive6(false);
    } else if (e.target.getAttribute("href") === "#services") {
      setNavactive4(!navactive4);
      setNavactive1(false);
      setNavactive2(false);
      setNavactive3(false);
      setNavactive5(false);
      setNavactive6(false);
    } else if (e.target.getAttribute("href") === "#projects") {
      setNavactive5(!navactive5);
      setNavactive1(false);
      setNavactive2(false);
      setNavactive3(false);
      setNavactive4(false);
      setNavactive6(false);
    } else if (e.target.getAttribute("href") === "#contact") {
      setNavactive6(!navactive6);
      setNavactive1(false);
      setNavactive2(false);
      setNavactive3(false);
      setNavactive4(false);
      setNavactive5(false);
    }
  };
  return (
    // -----------------------my code---------------------
    <MDBNavbar
      className="fixed-top p-4"
      expand="lg"
      dark
      bgColor="transparent"
      navbar-dark
      shadow-5
    >
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse
          navbar
          show={showNavCentred}
          center
          id="navbarCenteredExample"
        >
          <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                aria-current="page"
                onClick={handleNav}
                className={navactive1 === true ? "active" : ""}
                href="#"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={handleNav}
                className={navactive2 === true ? "active" : ""}
                href="#about"
              >
                About
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={handleNav}
                className={navactive3 === true ? "active" : ""}
                href="#experience"
              >
                Experience
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={handleNav}
                className={navactive5 === true ? "active" : ""}
                href="#projects"
              >
                Projects
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={handleNav}
                className={navactive4 === true ? "active" : ""}
                href="#services"
              >
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={handleNav}
                className={navactive6 === true ? "active" : ""}
                href="#contact"
              >
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
