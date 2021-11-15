import React from "react";
import "./logoSection.css";
import logo1 from "./Kurinji-Hacks logo.png";

import {MIDDLE_SECTION} from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img className="Logo logo1" src={logo1} alt="Kurinji Hacks" />
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        <img className="Logo logo1" src={logo1} alt="Kurinji Hacks" />
      </div>
    );
  }
  return myLogo;
}

export {Logo, LogoSectionAbout};
