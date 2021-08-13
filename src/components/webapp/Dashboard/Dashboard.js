import Introtron from "./Introtron";
import Navbar from "../structure/Navbar/Navbar";
import Sidebar from "../structure/Sidebar/Sidebar";
import Footer from "../structure/Footer/Footer";
import Communities from "../../../shared/communities"
import { Container, Row, Col, Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      communities: state.communities
  };
};

const CommunitySort = () => {
  return (
      <Communities
          communities={this.communities.filter(commList => this.communities.id)[0]}
      />
  );
};

function Dashboard() {
  const style = {
    padding: 0,
    borderRadius: 0,
  };

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
            <Container>
              <h1>Goals</h1>
              <Card className="shadow my-5">
                <CardBody className="card-body">
                  
                    
                      <CommunitySort />
                      
                  
                </CardBody>
              </Card>
          </Container>
          <Container>
              <h1>Get it done!</h1>
              <Card className="shadow my-5">
                <CardBody className="card-body">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="lead">
                      <em>
                      <CardText>Productivity tips and tools</CardText>
                      </em>
                    </p>
                  </blockquote>
                </CardBody>
              </Card>
          </Container>
          <Container>
              <h1>Keep it up!</h1>
              <Card className="shadow my-5">
                <CardBody className="card-body">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="lead">
                      <em>
                      <CardText>Stay motivated with words from the wise</CardText>
                      </em>
                    </p>
                  </blockquote>
                </CardBody>
              </Card>
          </Container>
          <Container>
              <h1>Shout it out!</h1>
              <Card className="shadow my-5">
                <CardBody className="card-body">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="lead">
                      <em>
                      <CardText>Build a solid community and share your goals</CardText>
                      </em>
                    </p>
                  </blockquote>
                </CardBody>
              </Card>
          </Container>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
    
  );
}

function RenderCard() {
  return (
    <Container>
        <Card className="shadow my-5">
        <CardTitle>Learn HTML</CardTitle>
          <CardBody className="card-body">
            <blockquote className="blockquote mb-0 text-center">
              <p className="lead">
                <em>
                <CardText>The first goal to becoming a web developer.</CardText>
                </em>
              </p>
            </blockquote>
          </CardBody>
        </Card>
    </Container>
  );
}

export default withRouter(connect(mapStateToProps)(Dashboard));
