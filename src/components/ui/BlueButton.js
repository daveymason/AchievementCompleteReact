import './BlueButton.module.css';

import React from "react";
import { ButtonToggle } from "reactstrap";

class BlueButton extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="primary">primary</ButtonToggle>{' '}
      </div>
    );
  }
}

export default BlueButton;