import React from "react";
import { Container } from "reactstrap";

const JumbotronSF = () => {
  return (
    <Container>
      <div class="row my-4">
        <div class="col">
          <div>
            <h3 class="display-4">
              <span class="blueText font-weight-bold">S</span>tay{" "}
              <span class="orangeText font-weight-bold">F</span>ocused
            </h3>
            <hr />
          </div>
        </div>
      </div>

      <div class="row my-2 align-items-center">
        <div class="col-xs-12 col-xl-6 align-items-center">
          <ul class="list-unstyled">
            <li class="media">
              <div class="col-2 text-center display-4 mr-2 animateInLeft d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <i class="fas fa-flask"></i>
              </div>
              <div class="col-10 media-body">
                <h3 class="mt-0 mb-1">Science Based</h3>
                <p>
                  Tellus molestie nunc non blandit massa enim nec dui. Nunc sed
                  id semper risus in hendrerit gravida. Augue ut lectus arcu
                  bibendum at varius.
                </p>
              </div>
            </li>
            <li class="media my-4">
              <div class="col-2 text-center display-4 mr-2 animateInLeft d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <i class="fas fa-brain"></i>
              </div>
              <div class="col-10 media-body">
                <h3 class="mt-0 mb-1">Habit Forming</h3>
                <p>
                  Tellus molestie nunc non blandit massa enim nec dui. Nunc sed
                  id semper risus in hendrerit gravida. Augue ut lectus arcu
                  bibendum at varius.
                </p>
              </div>
            </li>
            <li class="media">
              <div class="col-2 text-center display-4 mr-2 animateInLeft d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <i class="fas fa-dumbbell"></i>
              </div>
              <div class="col-10 media-body">
                <h3 class="mt-0 mb-1">Motivational</h3>
                <p>
                  Created by experts in the field, we learned our lessons so you
                  won't have to! Achieve your goals under the guidance of those
                  that already have.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-xs-12 col-lg-6 text-center ml-auto">
          <img
            src="https://daveymason.com/assets/external/images/stayFocused.jpg"
            class="d-none d-xl-block img-fluid img-rounded"
            alt="Stay Focused"
          />
        </div>
      </div>
    </Container>
  );
};

export default JumbotronSF;
