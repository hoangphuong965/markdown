import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");
class App extends Component {
  state = {
    markdown: "",
  };

  handlechange = () =>{
    this.setState
  }
  render() {
    let { markdown } = this.state;
    console.log(markdown)
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={this.handlechange}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div> </div>
        </div>
      </div>
    );
  }
}

export default App;
