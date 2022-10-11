import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import { useState } from 'react';



const NavigationBar = () => {
  


    return(
        <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Indonesia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/programming">Programming</Nav.Link>
            <Nav.Link href="/covid">Covid</Nav.Link>
            <Nav.Link href="/">Saved</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

      </Container>
    </Navbar>
        </>
    )
} 

export default NavigationBar