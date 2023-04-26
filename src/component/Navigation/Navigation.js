import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DarkMode from '../../Utils/DarkMode/DarkMode';
import useAuthentication from '../../hooks/useAuthentication'
import { Link } from "react-router-dom";


const Navigation = () => {
  const { darkmode } = useAuthentication()
  return (
    <Navbar bg={darkmode} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className={`text-${darkmode === 'dark' ? 'light' : 'dark'}`}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" ><Nav.Link href="#link" className={`text-${darkmode === 'dark' ? 'light' : 'dark'}`}>Home</Nav.Link></Link>
            <Link to="/about" ><Nav.Link href="#link" className={`text-${darkmode === 'dark' ? 'light' : 'dark'}`}>about</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <DarkMode />
      </Container>
    </Navbar>
  )
}

export default Navigation