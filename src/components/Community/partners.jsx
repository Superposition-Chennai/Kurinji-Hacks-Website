import React from "react";
import "./partners.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";

function PartnerHead() {
  return <h1 className="shead">Partners</h1>;
}

function Partner(props) {
  return (
    <div className="Sponsor ">
      <a href={props.link} target="_blank"><img src={props.srcx} alt="Kurinji Hacks"></img></a>
    </div>
  );
}

function PartnerUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Partnering </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Partner with Us" overlay="Send a mail" />
      </a>{" "}
    </div>
  );
}

export {Partner, PartnerHead, PartnerUS};
