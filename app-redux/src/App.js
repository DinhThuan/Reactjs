import React, { Component } from "react";
import TooltipAnt from "./components/TooltipAnt";
import ButtonAnt from "./components/ButtonAnt";
import "./App.css";
import TableAnt from "./components/TableAnt";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TooltipAnt />
        <ButtonAnt />
        <TableAnt></TableAnt>
      </React.Fragment>
    );
  }
}
