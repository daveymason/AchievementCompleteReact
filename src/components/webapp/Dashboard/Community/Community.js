import React, { useState, useEffect } from 'react';
import Navbar from "../../structure/Navbar/Navbar";
import Sidebar from "../../structure/Sidebar/Sidebar";
import Footer from "../../structure/Footer/Footer";
import Introtron from './Introtron';
import { Container, Row, Col, Card } from "reactstrap";

const Community = () => {
  
  const style = {
    padding: 0,
    borderRadius: 0,
  };

  return (
    <React.Fragment>

<div className="App">   
      <Container fluid style={style}>
        <Row>
          <Col md="auto" style={style} className="sidebar">
            <Sidebar />
          </Col>
          <Col style={style}>
            <Navbar />
            <Introtron />
            <Card>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
    </React.Fragment>
  );
}

export default Community;