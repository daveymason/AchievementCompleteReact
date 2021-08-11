import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../structure/Navbar/Navbar";
import Sidebar from "../../structure/Sidebar/Sidebar";
import Footer from "../../structure/Footer/Footer";
import QuoteContainer from './QuoteContainer';
import Introtron from '../Introtron';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle } from "reactstrap";

const Motivation = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get('https://achievementcomplete.com/quotes.js').then(response => {
      setQuotes(response.data);
      console.log(setQuotes());
    })
  }

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
            <QuoteContainer quotes={quotes} />
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
    </React.Fragment>
  );
}

export default Motivation;