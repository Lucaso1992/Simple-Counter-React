import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const SecondsCounter = () => {
  return (
    <div className="bigCounter d-flex justify-content-center">
      <div className="calendar">
        <AiOutlineClockCircle className="icon" />
      </div>
      <div className="four mx-2">0</div>
      <div className="three mx-2">0</div>
      <div className="two mx-2">0</div>
      <div className="one mx-2">0</div>
    </div>
  );
};

export default SecondsCounter;
