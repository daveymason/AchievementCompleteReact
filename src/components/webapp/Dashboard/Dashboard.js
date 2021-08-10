import Introtron from "./Introtron";
import Quotebox from "./Quotebox";
import Navbar from "../structure/Navbar/Navbar";
import Sidebar from "../structure/Sidebar/Sidebar";
import Footer from "../structure/Footer/Footer";
import { Container, Row, Col } from "reactstrap";

function Homepage() {
  const style = { 
    padding: 0,
    borderRadius:0,
  }

  return (
    <div className="App">
      <Container fluid style={style}>
        <Row>
          <Col md="auto" style={style} className="sidebar">
            <Sidebar />
          </Col>
          <Col style={style}>
            <Navbar />
            <Introtron />
            <Quotebox />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default Homepage;
