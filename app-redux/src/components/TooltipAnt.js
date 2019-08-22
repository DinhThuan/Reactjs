import React, { Component } from "react";
import { Tooltip, Button } from "antd";

export default class TooltipAnt extends Component {
  render() {
    return (
      <div>
        <Tooltip placement="topLeft" title="Prompt Text" className="tooltip">
          <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
      </div>
    );
  }
}
