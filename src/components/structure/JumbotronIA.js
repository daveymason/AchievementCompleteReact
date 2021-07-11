import React from "react";
import { Container } from "reactstrap";

const JumbotronIA = () => {
  return (
    <div class="anchorDiv py-4" id="about">
      <div className="skyDiveBg px-lg-5 py-4">
        <Container fluid>
          <div className="row text-center">
            <div className="col-sm-12">
              <h3 className="display-4">
                <span className="blueText font-weight-bold">I</span>
                nnovative <span className="orangeText font-weight-bold">A</span>
                pproach
              </h3>
            </div>
          </div>
          <div className="row text-center blackOverlay m-sm-5 p-sm-5 my-4 mx-1 py-4 px-1">
            <div className="col-lg-4">
              <i className="fas fa-check-circle bigBlueIcon"></i>
              <h3 className="headerPadding">Task Based</h3>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fas fa-chart-line bigBlueIcon"></i>
              <h3 className="headerPadding">Results Driven</h3>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum.
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fas fa-crosshairs bigBlueIcon"></i>
              <h3 className="headerPadding">Goal Orientated</h3>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JumbotronIA;
