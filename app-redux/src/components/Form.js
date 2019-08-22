import React from "react";

export default class Form extends React.Component {
  
  render() {
    return (
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option defaultValue="mango" value="mango">Mango</option>
      </select>
    );
  }
}
