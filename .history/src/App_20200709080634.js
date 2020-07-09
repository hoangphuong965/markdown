import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl com></FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;
