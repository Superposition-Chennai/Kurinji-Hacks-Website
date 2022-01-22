import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <a href={props.link} target="_blank"><img src={props.srcx} alt="Kurinji Hacks"></img></a>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor Us" overlay="Send a mail" />
      </a>{" "}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
