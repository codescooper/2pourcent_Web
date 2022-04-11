import React from "react";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
      <Nav variant="pills" activeKey="3">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" href="/joblist">
            Offres recentes
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Nos solution" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Job Hunter (Web)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Application mobile</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Application desktop</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">SMS Alert</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="/signup"  title="Item">
            S'inscrire
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signin" eventKey="3" >
            Se connercter
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  

  export default Navbar;