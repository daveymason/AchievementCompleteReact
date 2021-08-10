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
  Modal, ModalHeader, ModalBody
} from "reactstrap";
import './Navbar.css';
import { Link } from 'react-router-dom';
import SignUpForm from "../../SignUpForm";

const DaveysNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const togglePopup = () => setModal(!modal);

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
        className="navbar navbar-dark navbar-expand-lg fixed-top dm-transparent-nav"
      >
        <NavbarBrand>
          <img
            src="https://daveymason.com/assets/external/images/logo.png"
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
                <i className="fa fa-home"> Home</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#about">
                <i className="fa fa-question-circle"> About</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#features">
                <i className="fa fa-clipboard-list"> Features</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="#contact">
                <i className="fa fa-envelope"> Contact</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <Link 
                to='/app' 
                className="btn btn-warning px-3 btn-lg"
                role="button"
              >
                <i className="fa fa-download fa-lg"> Demo</i>
              </Link>
              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      <Modal isOpen={modal} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Coming Soon!</ModalHeader>
          <ModalBody>
            <p>Sign up now and be notified upon release</p>
            <SignUpForm />
          </ModalBody>
        </Modal>
    </Container>
    
  );
};

export default DaveysNav;
