import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import './Navbar.css';

const DaveysNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <Container fluid>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      ></link>

      <link
        href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i"
        rel="stylesheet"
      />

      <link rel="icon" href="/favicon.ico" />
      <div class="blackOverlay">
      <Navbar
        id="dm-sticky-nav"
        className="navbar navbar-dark navbar-expand-lg fixed-top dm-transparent-nav blueOverlay"
      >
        <NavbarBrand>
          <img
            src="../assets/img/logo.png"
            width="70"
            alt=""
            className="d-inline-block align-middle mr-2"
          />
          <span className="text-uppercase font-weight-bold">A.C.</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse
          isOpen={isOpen}
          className="collapse navbar-collapse text-right"
          id="dm-stickynav"
        >
          <Nav className="navbar-nav ml-auto">
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#">
                <i className="fa fa-home fa-lg"> Home</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#about">
                <i className="fa fa-question-circle fa-lg"> About</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#features">
                <i className="fa fa-clipboard-list fa-lg"> Features</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#contact">
                <i className="fa fa-envelope fa-lg"> Contact</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className="btn btn-warning ml-lg-5"
                href="download.html"
                role="button"
                data-toggle="tooltip"
                data-placement="bottom"
                data-html="true"
                title="Android or iPhone"
              >
                <i className="fa fa-download fa-lg"> Download</i>
                
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </Container>
    
  );
};

export default DaveysNav;
