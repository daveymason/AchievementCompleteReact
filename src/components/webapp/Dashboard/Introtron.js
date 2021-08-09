import React from 'react';
import { Container } from 'reactstrap';

const Intro = () => {
  return (
    <div class="row headerBg align-items-end">
        <Container fluid>
            <div class="col-sm-10 col-md-7 col-lg-6 text-center mx-auto mb-5 py-3 py-sm-4 blackOverlay text-white">
                <h1 class="display-4 font-weight-bold py-2"><span class="blueText">A</span>chievement <span
                    class="orangeText">C</span>omplete
                </h1>
                <p class="font-italic">Stop procrastinating and get it done with the newest productivity app to guide you!</p>
            </div>
        </Container>
    </div>
  );
};

export default Intro;