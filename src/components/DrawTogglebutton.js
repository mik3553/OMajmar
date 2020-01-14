import React, { Component } from "react";
import "./DrawToggleButton.css";

export default class DrawTogglebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false,
      toggleButton: "acitve",
    }
    this.toggleClick = this.toggleClick.bind(this)


  }

  toggleClick = (e) => {
    e.preventDefault()


    let getSidebar = document.querySelector(".toolbar_nav-aside");
    let getSidebarUl = document.querySelector(".toolbar_nav-aside ul");
    let getSidebarLink = document.querySelector(".toolbar_nav-aside li");
    console.log(getSidebar)
    // if (this.state.toggleStatus === false) {
    //   getSidebar.style.width = "100%";
    // } else if (this.state.toggleStatus === true) {
    //   getSidebar.style.width = "0px";
    // }
    this.setState({
      toggleStatus: !this.state.toggleStatus
    })

    // if ("toggleStatus" === true) {

    // }

    // if (toggleNavStatus === false) {
    //   getSidebarUl.style.visibility = "visible";
    //   getSidebar.style.width = "285px";
    //   getSidebarTitle.style.opacity = ".5";

    //   let arrayLength = getSidebarLink.length;
    //   for (let i = 0; i < arrayLength; i++) {
    //     getSidebarLink[i].style.opacity = "1";
    //     //   const element = array[i];
    //   }
    //   toggleNavStatus = true;
    // }

    // if (toggleStatus=== )
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
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
        </button>
      </div>

    );
  }
}
