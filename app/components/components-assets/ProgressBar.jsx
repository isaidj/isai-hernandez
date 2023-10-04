import React from "react";
import { Line, Circle } from "rc-progress";
const ProgressBar = ({ percent }) => {
  const circleContainerStyle = {
    width: "150px",
    height: "150px",
    display: "inline-block",
    position: "relative",
  };

  return (
    <div>
      <div style={circleContainerStyle}>
        <Circle
          percent={percent}
          strokeWidth={6}
          strokeLinecap="round"
          strokeColor={{
            "100%": "#108ee9",
            "0%": "#87d068",
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
        <div
          style={{
            fontSize: "30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {percent.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
