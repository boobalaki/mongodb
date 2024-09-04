import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {img4} from './images/logo.png'
import img4 from "./images/logo.png"
const Navbars = () => {
  return (
    <div>
         <Navbar bg="dark" variant='dark' expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="/home"><img src={img4} alt="" style={{width:"10%"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/joblisting">Joblisting</NavDropdown.Item>
              <NavDropdown.Item href="/jobdetails">
               Jobdetails
              </NavDropdown.Item>
             
              
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/contact">Register</Nav.Link>
          </Nav>
      
        </Navbar.Collapse>
     
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars