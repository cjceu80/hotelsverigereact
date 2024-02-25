import React, {useState} from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

//Render page header
export default function Header() {

    //State that decides if the language bar is hidden or showing
    const [hidden, setHidden] = useState('hidden');

    //Function for hiding or showing the language bar
    function toggleExpandLanguage() {
        if (hidden == '') {
            setHidden("hidden");
        } else {
            setHidden("");
        }

        return;
    }

    return (
        <Navbar expand="sm" >

                <Navbar.Brand href="/">
                    <img className="d-inline-block align-top"
                        src="/src/assets/logo.png"
                        width="250"
                        height="auto"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <Nav.Link href="">Sök hotell</Nav.Link>
                    <Nav.Link href="">Populära resmål</Nav.Link>
                    <Nav.Link href="">Kontakta oss</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3" id="basic-nav-dropdown" >
                        <NavDropdown title="Språk" align='end'>
                            <NavDropdown.Item href="#action3"><img src="src/assets/Flag_of_Sweden.png" width={30} height={"auto"} />  Svenska</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"><img src="src/assets/Flag_of_the_United_Kingdom.png" width={30} height={"auto"} />  English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            
        </Navbar>
    );
};

  