import './OrangeButton.css';

import React from "react";
import { ButtonToggle } from "reactstrap";

class OrangeButton extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="warning">warning</ButtonToggle>{' '}
      </div>
    );
  }
}

export default OrangeButton;