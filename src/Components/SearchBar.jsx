import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form } from "react-bootstrap";
import magnifyingglass from "../assets/magnifyingglass.png";

//Component for the search bar
export default function SearchBar() {
    const navigate = useNavigate();

    //States that hold the entered destination and dates
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    function handleSubmit(e) {
        e.preventDefault();
        let sDate;
        let eDate;
        if (!startDate){
          sDate = new Date()
          eDate = sDate}
        else{
          sDate=startDate;
          eDate=endDate;
        }
        navigate(`?l=${destination}&d=${JSON.stringify({ s: sDate.getTime(), e: eDate.getTime(), })}`);
      }

      function getDateString(date) {
            const ISOString = date.toISOString()
            return ISOString.slice(0,ISOString.indexOf('T'));
      }


    return (
        <Form className="mb-3"
            onSubmit={handleSubmit}>
            {/* Destination input field */}
            <Row>
            <Col sm={ {span: 3, offset: 1} }>
                <Form.Group as={Col} controlId="formGridDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </Form.Group>
            </Col>
            <Col sm={3}>
                <Form.Group as={Col} controlId="formGridStartDate">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                        type="date"
                        value={getDateString(startDate)}
                        onChange={(e) => setStartDate(new Date(e.target.value))}
                    />
                </Form.Group>
            </Col>
            <Col sm={3}>
                <Form.Group as={Col} controlId="formGridEndDate">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="date"
                    value={getDateString(endDate)}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                    />
                </Form.Group>
            </Col>
            
            
            {/* Search button */}
            <Col className="d-flex align-items-end px-0">
                <Button value=" " type="submit"><img src={magnifyingglass} width={20}/></Button>
            </Col>
            </Row>
        </Form>
        

    )
}

