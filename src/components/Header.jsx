import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div style={{backgroundColor:'cornsilk'}}>
         <Navbar expand="lg" className="bg-body-success">
      <Container>
      <Navbar.Brand href="#home">NEETHU SUNDER</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to= "/"><b>Home</b></Nav.Link>
            <Nav.Link as={Link} to= "/about"><b>About</b></Nav.Link>
            <Nav.Link as={Link} to= "/project"><b>Project</b></Nav.Link>
            </Nav>
            </Container>
            </Navbar>
    </div>
  )
}

export default Header