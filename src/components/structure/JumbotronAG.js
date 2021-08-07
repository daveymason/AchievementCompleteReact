import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SignUpForm from "./SignUpForm";

const JumbotronAG = () => {
  const [modal, setModal] = useState(false);
  const togglePopup = () => setModal(!modal);
  return (
    <div className="jumbotron bg-cover text-white lowBg md-0">
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
              onClick={togglePopup}
              >
                {" "}
                Sign Up Now <i className="fa fa-hand-pointer"></i>
              </a>
            </div>
    
            <Modal isOpen={modal} toggle={togglePopup}>
              <ModalHeader toggle={togglePopup}>Sign Up Now</ModalHeader>
              <ModalBody>
                <SignUpForm />
              </ModalBody>
            </Modal>
      </Container>
      </div>
  );
};

export default JumbotronAG;
