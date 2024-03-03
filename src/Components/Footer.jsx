import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

//Render page footer
export default function Footer() {
    return (
        <div className='bg-primary'>
        <Container className='mt-3 pt-3' style={{color: "whitesmoke"}}>
            <Row>
                <Col>
                    <h5>Populära destinationer</h5>
                </Col>
                <Col>
                    <h5>Support och vanliga frågor</h5>

                </Col>
                <Col className='align-content-center'>
                    <h5>Policyer</h5>
 
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav.Link href="?l=stockholm">Stockholm</Nav.Link>
                    <Nav.Link href="?l=göteborg">Göteborg</Nav.Link>
                    <Nav.Link href="?l=malmö">Malmö</Nav.Link>
                    <Nav.Link href="?l=visby">Visby</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className='p-0' href="">Dina bokningar</Nav.Link>
                    <Nav.Link className='p-0' href="">Vanliga frågor och svar</Nav.Link>
                    <Nav.Link className='p-0' href="">Kontakta oss</Nav.Link>
                </Col>
                <Col className='align-content-center'>
                        <Nav.Link className='p-0' href="">Regler och villkor</Nav.Link>
                        <Nav.Link className='p-0' href="">Sekretess</Nav.Link>
                        <Nav.Link className='p-0' href="">Cookies</Nav.Link>
                        <Nav.Link className='p-0' href="">Juridisk information</Nav.Link>
                </Col>
            </Row>
            <Row >
                <Col sm={12} className='text-center pt-3'>
                    <p>© 2023 Hotellbokningen</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
