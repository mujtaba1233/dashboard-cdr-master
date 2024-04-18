import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/dashboards", state: "appsMenuOpen" },
      { path: "/troubleshooting", state: "Troubleshooting" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <h3 className="text-white pt-3 pl-3">CDR Master</h3>
            {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <h2>CDR Master</h2>
            {/* <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            /> */}
          </a>
        </div>
        <ul className="nav">
          <li
            className={
              this.isPathActive("/dashboards")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("appsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">
                Dashboards
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.appsMenuOpen}>
              <div>
                <ol className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/dashboards/cluster-calls-overview")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/cluster-calls-overview"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp;Cluster
                      Calls Overview

                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/dashboards/cluster-calls-type")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/cluster-calls-type"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp;Cluster
                      Calls Type

                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/dashboards/internal-endpoints")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/internal-endpoints"
                    >

                      <i className="fa fa-caret-right"></i>
                      &nbsp;&nbsp;Internal Endpoints

                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/dashboards/emergency-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/emergency-calls"
                    >

                      <i className="fa fa-caret-right"></i>
                      &nbsp;&nbsp;Emergency Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/external-incoming-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/external-incoming-calls"
                    >

                      <i className="fa fa-caret-right"></i>
                      &nbsp;&nbsp;External Incoming Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/external-outgoing-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/external-outgoing-calls"
                    >

                      <i className="fa fa-caret-right"></i>
                      &nbsp;&nbsp;External Outgoing Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/long-distance-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/long-distance-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Long
                      Distance Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/toll-free-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/toll-free-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Toll Free
                      Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/international-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/international-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp;
                      International Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/external-calls-to-mail")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/external-calls-to-mail"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; External
                      Calls to Voice

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/ip-phones-calls")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/ip-phones-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; IP Phones
                      Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/jabber-for-windows-mac-soft-phones"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/jabber-for-windows-mac-soft-phones"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Jabber for
                      Windows/Mac Soft Phones

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/jabber-for-iOS-soft-phones"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/jabber-for-iOS-soft-phones"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Jabber for
                      iOS Soft Phones Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/jabber-for-Android-soft-phones"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/jabber-for-Android-soft-phones"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Jabber for
                      Android Soft Phones Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/contact-center-inbound")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/contact-center-inbound"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Contact
                      Center Inbound

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/contact-center-outbound")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/contact-center-outbound"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Contact
                      Center Outbound

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/advanced-ip-phones-calls"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/advanced-ip-phones-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Advanced Ip
                      Phones Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/advanced-jabber-ios-phones-calls"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/advanced-jabber-ios-phones-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Advanced
                      Jabber for iOS Phones Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive(
                          "/dashboards/advanced-jabber-android-phones-calls"
                        )
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/advanced-jabber-android-phones-calls"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Advanced
                      Jabber for Android Phones Calls

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dashboards/calls-by-cucm-node-id")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dashboards/calls-by-cucm-node-id"
                    >

                      <i className="fa fa-caret-right"></i>&nbsp; Calls by
                      CUCM Node Id

                    </Link>
                  </li>
                </ol>
              </div>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/troubleshooting")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.Troubleshooting
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("Troubleshooting")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">
                TroubleShooting
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.Troubleshooting}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/1"
                    >
                      TroubleShooting 1
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/2")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/2"
                    >
                      TroubleShooting 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/3")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/3"
                    >
                      TroubleShooting 3
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/4")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/4"
                    >
                      TroubleShooting 4
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/5")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/5"
                    >
                      TroubleShooting 5
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/6")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/6"
                    >
                      TroubleShooting 6
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/7")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/7"
                    >
                      TroubleShooting 7
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/troubleshooting/8")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/troubleshooting/8"
                    >
                      TroubleShooting 8
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className="nav-item menu-items">
            <Link to={"/docs"} className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">
                Documentation
              </span>
            </Link>
          </li>

          <li className="nav-item menu-items">
            <Link to={"/files"} className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">
                Files
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
