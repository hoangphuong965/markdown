import React, { Component } from "react";
import "./App.css";

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
      <div className="App">
        <div>
          <h4>Markdown Input</h4>
          <br />
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={(e) => this.handlechange(e.target.value)}
            ></textarea>
          </div>
          <textarea
           
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
