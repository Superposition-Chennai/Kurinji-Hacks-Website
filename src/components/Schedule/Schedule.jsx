import * as React from "react";
import Paper from "@material-ui/core/Paper";

import "./Styles.css";

export default class Schedule extends React.PureComponent {

  render() {

    return (
      <div className="schedule">
        <h1>Hackathon Schedule</h1>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrwlNXqRQOGtwpSP?backgroundColor=yellow" frameBorder="0" onmousewheel="" width="100%" height="100%" style={{background: "transparent", border: "1px solid #ccc"}}/>
      </div>
    );
  }
}
