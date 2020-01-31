import React, { Component } from "react";
import "../css/drawToggleButton.css";

export default class DrawTogglebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false,
    }
    this.toggleClick = this.toggleClick.bind(this)
  }

  toggleClick = (e) => {
    e.preventDefault()
    this.setState({
      toggleStatus: !this.state.toggleStatus
    })

  }

  render() {
    return (
      <div>
        {
          this.state.toggleStatus && this.props.children
        }
        <button
          className="toggle-button" onClick={this.toggleClick}
        >
          <div className="toggle-button__line "></div>
          <div className="toggle-button__line "></div>
          <div className="toggle-button__line "></div>
        </button>
      </div>

    );
  }
}
