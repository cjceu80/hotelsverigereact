import React, {useState} from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

//Component for rendering rooms with up and down buttons.
export default function RoomSelector(props) {
  const [value, setValue] = useState(0);

  return(
    <Container>
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
                    <Col xs={2}><img role='button' src='/src/assets/minussign.png' width={30} onClick={(e) => { if (value > 0) setValue(value-1) ; e.preventDefault();}} /></Col>
                    <Col className='p-0' xs={6}><Form.Control type="text" name={props.room.name} value={value} readOnly /></Col>
                    <Col xs={2}><img role='button' src='/src/assets/plussign.png' width={30} onClick={(e) => { if (value < 40) setValue(value+1); e.preventDefault();}}/></Col>
                </Row>
            </Col>

        </Row>
    </Container>
  )}
