import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../assets/logo.png"
import swe from "../assets/Flag_of_Sweden.png"
import eng from "../assets/Flag_of_the_United_Kingdom.png"

//Render page header
export default function Header() {

    return (
        <Navbar className='bg-primary mb-5' expand="sm" >
            <Container>
                <Navbar.Brand href="/">
                    <img className="d-inline-block align-top"
                        src={logo}
                        width="250"
                        height="auto"
                        alt='Hotel Sverige Logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                    <Nav.Link className='text-secondary' href="">Sök hotell</Nav.Link>
                    <Nav.Link className='text-secondary' href="">Populära resmål</Nav.Link>
                    <Nav.Link className='text-secondary' href="">Kontakta oss</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3" id="basic-nav-dropdown" >
                        <NavDropdown id='nav-dropdown' title="Språk" align='end'>
                            <NavDropdown.Item href="#action3"><img src={swe} alt='svenska flaggan' width={30} height={"auto"} />  Svenska</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"><img src={eng} alt='brittiska flaggan' width={30} height={"auto"} />  English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

  