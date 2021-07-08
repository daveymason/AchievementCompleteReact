import React from "react";
import { Container } from "reactstrap";

const JumbotronAG = () => {
  return (
    <div className="jumbotron bg-cover text-white midBg md-0">
      <Container fluid>
        
          <div className="py-5 col-lg-5 col-12 text-right ml-auto mr-5 blackOverlay">
            <h2 className="display-4 font-weight-bold blueText">
              Achieve Your Goals
            </h2>
            <p className="font-italic text-white">
              Live a more driven, focused, inspired life by completing those
              goals you have always day dreamed of doing.
            </p>
            <a
              role="button"
              className="btn btn-primary px-5 btn-lg"
              data-toggle="modal"
              data-target="#notifyModal"
            >
              Sign Up Now <i className="fa fa-hand-pointer"></i>
            </a>
          </div>
        
      </Container>
      </div>
  );
};

export default JumbotronAG;
