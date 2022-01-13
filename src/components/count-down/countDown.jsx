import React, {Component} from "react";
import "./countDown.css";
import Countdown from "react-countdown";
import balloons from "../../Module/Assets/balloons.svg";

const Completionist = () => <span>Hackathon is Live</span>;

export default function CountDown() {
  return (
    <div className="counter">
      <h2>Days to Hackathon:</h2>
      <Countdown date="2022-02-11T18:00:00">
        <h1>
        <Completionist />
        </h1>
      </Countdown><br/>
      <img src={balloons} width="30%"/>

    </div>
  );
}
