import React from "react";
import { Navbar, Container } from "react-bootstrap";
 //import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
      Recipe Finder
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                          {/* Signed in as: <a href="#login">Mark Otto</a> */}
        
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
