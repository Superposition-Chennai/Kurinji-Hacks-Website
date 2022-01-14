import * as React from "react";
import Paper from "@material-ui/core/Paper";

import "./Styles.css";

export default class Schedule extends React.PureComponent {

  render() {

    return (
      <div className="schedule">
        <h1>Hackathon Schedule</h1>
        <Paper>
        <iframe className="airtable-embed" src="https://airtable.com/embed/shrvqCIYKWiqZFHRJ?backgroundColor=yellow&viewControls=on" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}/>
        </Paper>
      </div>
    );
  }
}
