import React from 'react';
import { Container } from 'reactstrap';

const Intro = () => {
  return (
    <Container fluid className="goalBg">
      <div class="row mt-5">
        <div class="col-sm-10 col-md-7 col-lg-6 text-center mx-auto my-5 py-3 py-sm-4 blackOverlay text-white">
          <h1 class="display-4 font-weight-bold py-2">
            <span class="orangeText">G</span>oals
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Intro;