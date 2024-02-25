
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

//Return a stingified dates object for todays date to prevent date errors when popular destinations are selected.
function getStartingDate(){
    const date = new Date();
    const dateObject = {s: date.getTime(), e: date.getTime(), }
    return JSON.stringify(dateObject);
};

//Render a view with a searchbar and 4 popular desitination cities
export default function PopularDestinations() {
    const navigate = useNavigate();

    return (
        <Container className='p-3'>
            <h2>Populära resmål</h2>

            <Row className='my-2'>
                <Col sm={6} lg={{span: 4, offset: 2}}>
                    <Card role="button" style={{maxWidth: 300}} className="my-2 " onClick={() => navigate(`?l=stockholm&d=${getStartingDate()}`)} >
                        <img src='src/assets/stockholm.png' />
                       
                    </Card>

                </Col>
                <Col sm={6} lg={4}>
                    <Card role="button" style={{maxWidth: 300}} className="my-2 " onClick={() => navigate(`?l=göteborg&d=${getStartingDate()}`)} >
                        <img src='src/assets/goteborg.png' />
                       
                    </Card>

                </Col>
            </Row>
            <Row className='my-2'>
                <Col sm={6} lg={{span: 4, offset: 2}}>
                    <Card role="button" style={{maxWidth: 300}} className="my-2 " onClick={() => navigate(`?l=malmö&d=${getStartingDate()}`)} >
                        <img src='src/assets/malmo.png' />
                       
                    </Card>

                </Col>
                <Col sm={6} lg={4}>
                    <Card role="button" style={{maxWidth: 300}} className="my-2 " onClick={() => navigate(`?l=visby&d=${getStartingDate()}`)} >
                        <img src='src/assets/gotland.png' />
                       
                    </Card>

                </Col>
            </Row>

        </Container>
    );
};
