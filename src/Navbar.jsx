import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';




function MyNavbar() {
  return (
    <Navbar  expand="lg"  className="  w-full h-25  bg-[#282E2A] text-white shadow-md">
      <Container fluid>
        <Navbar.Brand className='decoration-white-400' as={Link} to='/'><img
         src='./src/assets/ngo1.png' alt="Needytail Logo"
              className="h-24 w-80"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto mr-4 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='text-white text-semibold mr-3 mt-2 text-decoration-none' to='/'>Home</NavLink>
            <NavLink className='text-white text-semibold mr-3 mt-2 text-decoration-none' to="/about">About Us</NavLink>
            <NavLink className='text-white text-semibold mr-3 mt-2 text-decoration-none' to="/contact">Contact Us</NavLink>
            <NavLink className='text-white text-semibold mr-3 mt-2 text-decoration-none' to="/ourwork">Our Work</NavLink>
           
          </Nav>
          <div>
            <Button className='me-3 w-38 h-12 ' variant='success' href='#donate' >Donate Now</Button>
          </div>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
