import React from "react";

export class Temp extends React.Component {
  displayBall() {
    const createjs = require("createjs");
    // var circle = new createjs.Shape();
    // circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    // var stage = new createjs.Stage("demoCanvas");
    // circle.x = 100;
    // circle.y = 100;
    // stage.addChild(circle);
  }

  render() {
    return (
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        style={{ border: "1px solid #000000", backgroundColor: "white" }}
      />
    );
  }
}
