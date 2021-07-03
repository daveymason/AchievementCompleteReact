import React from 'react';
import { Container } from 'reactstrap';
import CForm  from './CForm.js';

const Form = () => {
  return (
    <div className="contactBg pt-sm-5 pb-sm-4 ">
    <Container fluid>
      
    
    <div className="row my-sm-4 text-center">
      <div className="col">
        <h2 className="display-4"><span className="blueText font-weight-bold">C</span>ontact <span
            className="orangeText font-weight-bold">U</span>s</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-8">
        <CForm />
        </div>
        <div className="col text-center">
          <button type="button" className="btn animateInLeft" title="cntButtonEmail">
            <a href="mailto:daveymason@outlook.com" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Click or Tap to E-mail!">
            <i className="far fa-envelope display-1"></i></a>
          </button>
        </div>
        <hr />
        <div className="col text-center">
          <button type="button" className="btn animateInLeft" title="cntButtonEmail">
              <a href="tel:123-456-7890" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Click or Tap to Call!">
              <i className="fa fa-phone display-1"></i></a>
          </button>
        </div>
      
    </div>
    
    </Container>
    </div>
  );
};

export default Form;