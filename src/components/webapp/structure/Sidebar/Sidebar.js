import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from 'react-router-dom';



const DaveysNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const style = { 
    paddingTop: 75,
    borderRadius:0,
  }

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
      <div>
      <Navbar
        className="navbar navbar-dark navbar-expand-lg"
        style={style}
      >
        
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse
          isOpen={isOpen}
          className="collapse navbar-collapse text-left"
        >
          <Nav vertical className="navbar-nav mr-auto">
          
            <hr />
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/app">
                <i className="fa fa-compass"> Dashboard</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/goals">
                <i className="fa fa-bullseye"> Goals</i>
                
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/productivity">
                <i className="fa fa-check-circle"> Productivity</i>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/app/motivation">
                <i className="fa fa-spinner"> Motivation</i>
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/community">
                <i className="fa fa-user-friends"> Community</i>
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
