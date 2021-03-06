import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo, Tracks} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import {PartnerUS, PartnerHead, Partner} from "../Community/partners.jsx";

import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member, JoinTeam} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  FOOTER,
  partnerLogos,
  panels
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={6} lg={4} md={6}>
          {" "}
          <Sponsor link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}
function PartnerGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={6} lg={4} md={6}>
          {" "}
          <Partner link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}
function TrackGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content}/>
        </Col>
      ))}
    </Row>
  );
}
// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member name={s.Name} role={s.role} img={s.img} />
        </Col>
      ))}
    </Row>
  );
}




function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
        <Accordion panels={ s }/>
        </Col>
      ))}
    </Row>
  );
}



export default function HomePage(props) {
  return (
    <div className="Whole_div" id="home">
      <div className="color_section">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={8} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image align-items-center" sm={11} lg={3} md={3}>
              <img src={TOP_SECTION.IMG_SRC} />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid={true}>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div">
            <LogoSectionAbout />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
        {frequentlyAskedQuestions.map(FrequentlyAsked)}
        {/* ********Frequently asked Questions ending here ***** */}
         </div>  

        {/* ********Prizes here ***** */}
        <Row className="tracks" >
          <PrizeHeading type="Tracks" />
          {Tracks.map(TrackGroup)}
        </Row>
        <Row className="prizesection">
          <PrizeHeading type="Prizes" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}


        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}
        <Row className="sponsorSection">
          <PartnerHead />
          <PartnerUS />
          {partnerLogos.map(PartnerGroup)}
        </Row>

        <Birds top="120vh" left="0vh" type="" />

        {/* ********Team here ***** */}
        {/* <h1>Our Team</h1>
        {FOOTER.JOIN_TEAM.required && <JoinTeam />}
        {TeamInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
