import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibleFilter } from "../../actions";
import PropTypes from "prop-types";
class FilterLink extends Component {
  constructor() {
    super();
    this.handleSetvisibleFilter = this.handleSetvisibleFilter.bind(this);
  }
  handleSetvisibleFilter(e) {
    e.preventDefault();
    this.props.setVisibleFilter(this.props.filter_text);
  }
  render() {
    return (
      <a href="" onClick={e => this.handleSetvisibleFilter(e)}>
        {this.props.filter_text}
      </a>
    );
  }
}

FilterLink.propTypes = {
  filter_text: PropTypes.string.isRequired
};

export default connect(
  null,
  { setVisibleFilter }
)(FilterLink);
