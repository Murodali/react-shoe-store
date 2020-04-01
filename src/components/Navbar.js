import React, { Component } from 'react';

import sneaker from '../sneaker.png';
import '../App.css';
import Contact from "./Contact.js";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default class Navbari extends Component{
    render(){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"className="nav-logo"><img  id="logo" src={sneaker}></img>Sneakers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="mr-auto">Products</Nav.Link>
      <Nav.Link href="/contact" className="mr-auto" id="away">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/card" className="mr-auto">
      
          <i className="fas fa-cart-plus">My Cart</i>
      </Nav.Link>
 
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
