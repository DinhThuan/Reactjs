import React, { Component } from "react";
import FilterLink from "./filter_link";

class FilterList extends Component {
  render() {
    return (
      <div>
        <FilterLink filter_text={"SHOW_ALL"} />

        <FilterLink filter_text={"SHOW_COMPLETED"} />

        <FilterLink filter_text={"SHOW_ACTIVE"} />
      </div>
    );
  }
}

export default FilterList;
