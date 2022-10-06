import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default class SchoolPride extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot = (angle, originX) => {
    this.animationInstance &&
      this.animationInstance({
        particleCount: 3,
        angle,
        spread: 80,
        origin: { x: originX },
        colors: ["#bb0000", "#ffffff"],
      });
  };

  nextTickAnimation = () => {
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  };

  startAnimation = () => {
    this.isAnimationEnabled = true;
    this.nextTickAnimation();

    setTimeout(() => {
      this.isAnimationEnabled = false;
    }, 3000);
  };

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  };

  stopAnimation = () => {
    this.isAnimationEnabled = false;
    this.animationInstance && this.animationInstance.reset();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    this.startAnimation();
    return (
      <>
        {/* <div>
          <button onClick={this.startAnimation}>Start</button>
          <button onClick={this.pauseAnimation}>Pause</button>
          <button onClick={this.stopAnimation}>Stop</button>
        </div> */}
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          style={canvasStyles}
        />
      </>
    );
  }
}
