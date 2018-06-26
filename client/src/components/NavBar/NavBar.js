import React, {Component} from 'react';
import './NavBar.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Boutique</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/panier">
              Panier
            </NavItem>
            <NavItem eventKey={1} href="/login">
              Se connecter
            </NavItem>
            <NavDropdown eventKey={2} title="Admin" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1} href='/vendeurs'>
                Vendeurs
              </MenuItem>
              <MenuItem eventKey={2.2} href='/articles'>
                Articles
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}
export default NavBar;
