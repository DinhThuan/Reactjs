import React from "react";
import "./App.css";
import CheckboxMaterial from "./shared/Checkbox";

import { version, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import TableDemo from "./component/TableDemo";
import ModalDemo from "./component/ModalDemo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = { fontSize: 12, color: "red", active: true };
    this.style = {
      border: "5px solid black",
      boxSizing: "border-box"
    };

    // this.state = { addClass: false };
  }

  changeColor() {
    console.log("log");
  }

  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  changeFontSizeOnBtn(param) {
    //  console.log(this.state.fontSize);
    if (param === "increase" && this.state.fontSize < 36) {
      this.setState({
        active: this.state.fontSize++
      });
    } else if (param === "reduced" && this.state.fontSize > 8) {
      this.setState({
        active: --this.state.fontSize
      });
    }
  }

  getColorText() {
    //   console.log(this.refs.color.value);
  }

  render() {
    let boxClass = ["box"];
    if (this.state.addClass) {
      boxClass.push("green");
    }

    return (
      <React.Fragment>
        <div>
          <ModalDemo></ModalDemo>
        </div>
        <div>
          <TableDemo></TableDemo>
        </div>
        <div className="App">
          <h1>Please fork this codesandbox to reproduce your issue.</h1>
          <div>Current antd version: {version}</div>
          <div style={{ marginTop: "16px" }}>
            <Button type="primary">Example button</Button>
          </div>
        </div>
        ,
        <h1>
          <CheckboxMaterial />
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card border border-primary">
              <div className="card-header bg-primary text-white">
                Color Picker
              </div>
              <div className="card-body">
                <div>
                  <span
                    className="bg-danger color-danger"
                    value="color"
                    style={this.style}
                  />
                  <span
                    className="bg-success color-danger"
                    onClick={this.changeColor}
                  />
                  <span className="bg-danger color-danger" />
                  <span className="bg-secondary color-danger" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border border-warning">
              <div className="card-header bg-warning">
                Size : {this.state.fontSize}
              </div>
              <div className="card-body">
                <button
                  className="btn btn-xs btn-success"
                  onClick={() => {
                    this.changeFontSizeOnBtn("increase");
                  }}
                >
                  Increase
                </button>
                <button
                  className="btn btn-xs btn-success ml-2"
                  onClick={() => {
                    this.changeFontSizeOnBtn("reduced");
                  }}
                >
                  Reduced
                </button>
              </div>
            </div>
            <button className="btn btn-primary mt-2">Reset</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="mt-4">Color: red - FontSize: {this.state.fontSize}</p>
            <div className="border border-danger border-text-content">
              <p
                className="text-danger text-content mt-3 text-center"
                style={{ fontSize: this.state.fontSize + "px" }}
              >
                Content Setting
              </p>
            </div>
          </div>
        </div>
        <div className={boxClass.join(" ")} onClick={this.toggle.bind(this)}>
          {this.state.addClass
            ? "Remove a class"
            : "Add a class (click the box)"}
          <br />
          Read the tutorial{" "}
          <a href="http://www.automationfuel.com" target="_blank">
            here
          </a>
          .
        </div>
      </React.Fragment>
    );
  }
}
