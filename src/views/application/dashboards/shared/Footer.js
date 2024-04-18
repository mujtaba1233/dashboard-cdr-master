import moment from 'moment';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {moment().year()} <a href="/" target="_blank" rel="noopener noreferrer">CDR Master</a>. All rights reserved.</span>
          {/* <span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="mdi mdi-heart text-danger"></i></span> */}
        </div>
      </footer>
    );
  }
}

export default Footer;