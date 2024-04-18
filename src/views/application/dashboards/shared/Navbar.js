import React, { Component } from "react";
import { Dropdown, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QuickTab } from "./Tabs/QuickTab";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs'
import store from '../store'
import { updateDate } from "../slices/dateSlice";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: localStorage.getItem('time') ? JSON.parse(localStorage.getItem('time')).text : "Last 15 min",
      key: 'quick',
      absolute: null
    };
  }
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }
  render() {
    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("time");
      window.location.reload();
    };

    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button
            className="navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="mdi mdi-menu"></span>
          </button>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Search products"
                /> */}
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <Dropdown
              alignRight
              autoClose={false}
              as="li"
              className="nav-item border-left"
            >
              <Dropdown.Toggle
                as="a"
                className="nav-link cursor-pointer"
              >
                <i className="fa fa-calendar"></i> &nbsp; <span> {this.state.currentSelected}</span>
                <span className="count bg-success"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="navbar-dropdown preview-list"
                style={{ width: "600px" }}
              >
                <Tabs
                  defaultActiveKey="quick"
                  // id="uncontrolled-tab-example"
                  className="mx-auto"
                  onSelect={(k) => this.setState({ key: k })}
                >
                  <Tab eventKey="quick" title="Quick Select">
                    <QuickTab setDate={(e) => this.setState({ currentSelected: e })} />
                  </Tab>
                  <Tab eventKey="absolute" title="Absolute">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDateTimePicker orientation="landscape" className="theme" onChange={(e) => {
                        let date = new Date(e.$d).toISOString()
                        console.log(date)
                        let data = {
                          text: 'Absolute',
                          selectedDate: date
                        }
                        this.setState({ absolute: data })

                      }} onAccept={(e) => {
                        if(this.state.absolute !== null) {
                          store.dispatch(updateDate(this.state.absolute))
                          this.setState({currentSelected: 'Absolute'})
                          
                        }
                      }} />
                    </LocalizationProvider>
                  </Tab>
                  <Tab eventKey="relative" title="Relative">
                    Relative
                  </Tab>
                </Tabs>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown alignRight as="li" className="nav-item">
              <Dropdown.Toggle
                as="a"
                className="nav-link cursor-pointer no-caret"
              >
                <div className="navbar-profile">
                  <img
                    className="img-xs rounded-circle"
                    src={require("../../assets/images/faces-clipart/pic-1.png")}
                    alt="profile"
                  />
                  <p className="mb-0 d-none d-sm-block navbar-profile-name">
                    JKabundi
                  </p>
                  <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <h6 className="p-3 mb-0">
                  Profile
                </h6>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      Settings
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="!#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    logout();
                  }}
                  className="preview-item"
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      Log Out
                    </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
