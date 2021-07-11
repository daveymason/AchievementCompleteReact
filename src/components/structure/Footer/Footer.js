import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <div class="row" id="sticky-footer" class="py-1 text-white">
        <Container fluid>
          <div class="col text-center">
            <button type="button" class="btn btn-lg btn-footer">
              <a
                href="https://www.linkedin.com/in/david-mason-1623277b/"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                data-html="true"
                title="Add me on LinkedIn!"
              >
                <i class="fab fa-linkedin-in fa-footer"></i>
              </a>
            </button>
            <button type="button" class="btn btn-lg btn-footer">
              <a
                href="https://github.com/davidmason5/AchievementComplete.com"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                data-html="true"
                title="Check out my GitHub!"
              >
                <i class="fab fa-github fa-footer"></i>
              </a>
            </button>
            <button type="button" class="btn btn-lg btn-footer">
              <a
                href="https://daveymason.com/assets/docs/Davey%20Mason%20-%20CV.pdf"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                data-html="true"
                title="Download my C.V!"
              >
                <i class="fa fa-id-card fa-footer"></i>
              </a>
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
