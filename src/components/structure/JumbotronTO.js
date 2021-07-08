import React from "react";
import { Container } from "reactstrap";

const JumbotronTO = () => {
  return (
    <div className="jumbotron bg-cover text-white midBg md-0">
      <Container fluid>
        
          <div className="py-4 ml-sm-2 ml-md-5 blackOverlay col-lg-5 col-12">    
            <h2 className="display-4 font-weight-bold font-weight-bold blueText">
              Get Ready to Take Off{" "}
            </h2>
            <p className="font-italic animateInLeft">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus.
            </p>
            <a
              role="button"
              className="btn btn-warning px-5 btn-lg animateInLeft"
              data-toggle="modal"
              data-target="#notifyModal"
            >
              {" "}
              Sign Up Now <i className="fa fa-hand-pointer"></i>
            </a>
          </div>
        
        </Container>
      </div>
  );
};

export default JumbotronTO;
