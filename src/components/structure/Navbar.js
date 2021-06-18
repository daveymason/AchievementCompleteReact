import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

const DaveysNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
        <Navbar id="dm-sticky-nav" className="navbar navbar-dark navbar-expand-lg fixed-top dm-transparent-nav">
            <NavbarBrand>
                <img src="./img/logo.png" width="70" alt="" className="d-inline-block align-middle mr-2" />
                <span className="text-uppercase font-weight-bold">A.C.</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
                <span className="navbar-toggler-icon"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} className="collapse navbar-collapse text-right" id="dm-stickynav">
                <Nav className="navbar-nav ml-auto">
                    <NavItem className="nav-item">
                        <NavLink className="nav-link" href="#">
                            <i className="fa fa-home fa-lg"></i> 
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="nav-link" href="#about">
                            <i className="fa fa-question-circle fa-lg"></i> 
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="nav-link" href="#features">
                            <i className="fa fa-clipboard-list fa-lg"></i>
                             Features
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="nav-link" href="#contact">
                            <i className="fa fa-envelope fa-lg"></i> 
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink className="btn btn-warning ml-lg-5" href="download.html" role="button" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Android or iPhone">
                            <i className="fa fa-download fa-lg"></i> 
                            Download
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>   
    </Container>
  );
}

export default DaveysNav;

{/* 
     <nav id="dm-sticky-nav" className="navbar navbar-dark navbar-expand-lg fixed-top dm-transparent-nav">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src="./img/logo.png" width="70" alt="" className="d-inline-block align-middle mr-2" />
                <span className="text-uppercase font-weight-bold">A.C.</span>
            </a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#dm-stickynav"
                aria-controls="dm-stickynav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-right" id="dm-stickynav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-home fa-lg"></i> Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about"><i className="fa fa-question-circle fa-lg"></i> About</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#features"><i className="fa fa-clipboard-list fa-lg"></i>
                    Features</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#contact"><i className="fa fa-envelope fa-lg"></i> Contact</a></li>
                <li className="nav-item"><a className="btn btn-warning ml-lg-5" href="download.html" role="button" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Android or iPhone"><i
                        className="fa fa-download fa-lg"></i> Download</a></li>
                </ul>
            </div>
        </div>
    </nav> 
 */}

{/* <Navbar light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
         

        </Collapse>
      </Navbar> */}