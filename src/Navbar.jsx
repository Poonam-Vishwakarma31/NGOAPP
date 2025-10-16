import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function MyNavbar() {
  return (
    <Navbar  expand="lg"  className="  w-full h-25  bg-[#14504B] text-white shadow-md">
      <Container fluid>
        <Navbar.Brand className='decoration-white-400' href="#"><img
         src='./src/assets/ngo1.png' alt="Needytail Logo"
              className="h-24 w-auto"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">About Us</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Our Work</NavDropdown.Item>
              <NavDropdown.Item className='text-black' href="#action4">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-black' href="#action5">
                Donate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div>
            <button className='background-decoration-black' variant='Success' >Donate</button>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='background-decoration-black' variant='outline-success' >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
