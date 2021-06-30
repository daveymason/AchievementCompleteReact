import React from "react";
import { Container } from "reactstrap";

const JumbotronTO = () => {
  return (
    
      <Container fluid>
      <div className="container pb-3">
    <div className="row row-content align-items-center">
      <div className="col-sm-4 col-md-3">
        <h2 className="animateInLeft">How does it work?</h2>
      </div>
      <div className="col-sm-7">
        <h3>Structure</h3>
        <p>We use a structured approach to help you achieve your goal, with a mix of external resources, regular testing
          and self validated learning.</p>
      </div>
      <div className="col text-center display-4 d-none d-md-block d-lg-block d-xl-block">
        <i className="fas fa-chalkboard display-3"></i>
      </div>
    </div>

    <div className="row row-content align-items-center">
      <div className="col-sm-4 col-md-3">
        <h2 className="animateInLeft">What's our secret?</h2>
      </div>
      <div className="col-sm-7">
        <h3>Guidance</h3>
        <p>Created by experts in the field, we learned our lessons so you won't have to! Achieve your goals under the
          guidance of those that already have.</p>
      </div>
      <div className="col text-center display-4 d-none d-md-block d-lg-block d-xl-block">
        <i className="fas fa-chalkboard-teacher display-3"></i>
      </div>
    </div>

    <div className="row row-content align-items-center pb-0 mb-0">
      <div className="col-sm-4 col-md-3">
        <h2 className="animateInLeft">Am I alone?</h2>
      </div>
      <div className="col-sm-7">
        <h3>Community</h3>
        <p>With a dedicated, supportive and caring community once you achieve your goal you'll be delighted to share
          your results and advice with others.</p>
      </div>
      <div className="col text-center display-4 d-none d-md-block d-lg-block d-xl-block">
        <i className="fas fa-users display-3"></i>
      </div>
    </div>
  </div>
      </Container>
   
  );
};

export default JumbotronTO;
