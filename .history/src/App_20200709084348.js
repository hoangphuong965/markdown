import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import TextArea from "react-bootstrap/FormGroup";

let marked = require("marked");
class App extends Component {
  state = {
    markdown: "",
  };

  handlechange = (markdown) => {
    this.setState({ markdown });
  };
  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
         controlId="formControlsTextarea">
            <h4>Markdown Input</h4><br/>
            <textarea
              rows="10"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={(e) => this.handlechange(e.target.value)}
            ></textarea>
       
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div>{marked(markdown)}</div>
        </div>
      </div>
    );
  }
}

export default App;
