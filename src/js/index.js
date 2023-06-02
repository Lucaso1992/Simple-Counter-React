//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
var PropTypes = require("prop-types");

// include your styles into the webpack bundle
import "../styles/index.css";

import { AiOutlineClockCircle } from "react-icons/ai";

const SecondsCounter = (props) => {
  return (
    <div className="bigCounter d-flex justify-content-center">
      <div className="calendar">
        <AiOutlineClockCircle className="icon" />
      </div>
      <div className="four mx-2">{props.digitFour % 10}</div>
      <div className="three mx-2">{props.digitThree % 10}</div>
      <div className="two mx-2">{props.digitTwo % 10}</div>
      <div className="one mx-2">{props.digitOne % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <SecondsCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />,
    document.querySelector("#app")
  );
}, 1000);
