import React, { Component } from "react";
import FilterLink from "./filter_link";

export default class FilterList extends Component {
  render() {
    return (
      <div>
        <FilterLink filter_text={"SHOW_ALL"} />
        <br />
        <FilterLink filter_text={"SHOW_COMPLETED"} />
        <br />
        <FilterLink filter_text={"SHOW_ACTIVE"} />
      </div>
    );
  }
}
