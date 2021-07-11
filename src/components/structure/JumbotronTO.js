import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container } from "reactstrap";

const JumbotronTO = () => {
  const [modal, setModal] = useState(false);
  const togglePopup = () => setModal(!modal);

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
            className="btn btn-warning px-5 btn-lg"
            onClick={togglePopup}
          >
            {" "}
            Sign Up Now <i className="fa fa-hand-pointer"></i>
          </a>
        </div>

        <Modal isOpen={modal} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Sign Up Now</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button
              className="btn btn-primary px-5 btn-md"
              onClick={togglePopup}
            >
              Submit
            </Button>
            <Button
              className="btn btn-secondary px-5 btn-md"
              onClick={togglePopup}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
};

export default JumbotronTO;
