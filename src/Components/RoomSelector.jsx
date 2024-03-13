import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import minussign from "../assets/minussign.svg";
import plussign from "../assets/plussign.svg";

//Component for rendering rooms with up and down buttons.
export default function RoomSelector(props) {
  const [value, setValue] = useState(0);

  return(
    <Container className='border-top pt-2' >
        <Row>
            <Col sm={3}>
                <p name="room1">{props.room.name}</p>
            </Col>
            <Col sm={2}>
                <p className="blueDetails">{props.room.beds} sängar</p>
            </Col>
            <Col sm={2} className='text-end'>
                <p className="price">{props.room.price} kr</p>
            </Col>
            <Col sm={5}>
                <Row className='p-0'>
                    <Col xs={2}> <Button  className='p-0 mt-1'  onClick={(e) => { if (value > 0) setValue(value-1) ; e.preventDefault();}} ><img src={minussign} width={30}/></Button></Col>
                    <Col className='p-0 pb-1 ps-3' xs={6}><Form.Control type="text" name={props.room.name} value={value} readOnly /></Col>
                    <Col xs={2}><Button  className='p-0 mt-1'  onClick={(e) => { if (value < 40) setValue(value+1) ; e.preventDefault();}} ><img role='button' src={plussign} width={30} /></Button></Col>
                </Row>
            </Col>

        </Row>
    </Container>
  )}
