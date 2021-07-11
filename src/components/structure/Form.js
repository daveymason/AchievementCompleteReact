import React from "react";
import { Container } from "reactstrap";
import CForm from "./CForm.js";

const Form = () => {
  return (
    <div class="anchorDiv py-2" id="contact">
      <div className="contactBg pt-sm-3 pb-sm-4">
        <Container fluid>
          <div className="row text-center">
            <div className="col mb-3">
              <h2 className="display-4">
                <span className="blueText font-weight-bold">C</span>ontact{" "}
                <span className="orangeText font-weight-bold">U</span>s
              </h2>
            </div>
          </div>
          <div className="row text-right">
            <div className="col-sm-6 whiteOverlay mx-auto">
              <CForm />
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-2 mx-auto">
              <button type="button" className="btn mx-5" title="cntButtonEmail">
                <a
                  href="mailto:daveymason@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="far fa-envelope display-1"></i>
                </a>
              </button>
              <button type="button" className="btn mx-5" title="cntButtonEmail">
                <a href="tel:123-456-7890" target="_blank" rel="noreferrer">
                  <i className="fa fa-phone display-1"></i>
                </a>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Form;
