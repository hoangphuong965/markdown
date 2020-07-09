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
      <div className="App container">
        <div>

        </div>
        <div>
          <div className="form-group">
            <label>Example textarea
              
            </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={(e) => this.handlechange(e.target.value)}
            ></textarea>
          </div>
        </div>
        {/* ============================== */}
        <div>
          <h1>Markdown Output</h1>
          <code>
            
          </code>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
