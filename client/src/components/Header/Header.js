import React, { Component } from 'react';
import './Header.css';
import fond from './../../images/fond.jpg';
import logo from './../../images/title.png';
import { Row , Col } from 'react-bootstrap';

class Header extends Component {
  render() {

    return (
      <Row className=" App-header">
        <Col md={12} className="backgroundBrowser linear-gradient">
        </Col>
        <Col md={4} mdOffset={4} className="title">
          <img className="logoBrowser" src={logo} alt="Logo Harry Potter"/>
        </Col>
      </Row>
    );
  }
}

export default Header;
