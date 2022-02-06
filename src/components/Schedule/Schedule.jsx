import * as React from "react";
import Paper from "@material-ui/core/Paper";

import "./Styles.css";

export default class Schedule extends React.PureComponent {

  render() {

    return (
      <div className="schedule">
        <h1>Hackathon Schedule</h1>
        <center>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shruOQ3xMB0kjeqTs?backgroundColor=yellow&viewControls=on" frameBorder="0"style={{background: "transparent", border: "1px solid #ccc"}}/>
        </center>
      </div>
    );
  }
}
