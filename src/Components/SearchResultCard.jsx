import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Attribute from './Attribute.jsx';
import StarRating from './StarRating.jsx';
import { Button, Card, Col, Row } from 'react-bootstrap';
import arrowdown from "../assets/arrowdown_black.png";


const SMALL_IMG = {width: "100%"};

//Component for the indivdual hotel cards
export default function SearchResultCard(props) {
    //All of our hotels that the search returned
    const hotel = props.hotel;

    const navigate = useNavigate();

    //Used to expand the hotel card into a big or small version
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        
        <Row>
            <Col sm={12} lg={{span: 8, offset: 2}} xl={{span: 6, offset: 3}}>
                <Card className='p-1 m-2' style={{boxShadow: "4px 4px 15px #000"}}>
                    <Row>
                        <Col xs={5} sm={4}>
                            <Row>
                                <Col xs={12} className='justify-items-center'>
                                    <img src={hotel.images[0]} style={SMALL_IMG}></img>
                                </Col>
                                {(hotel.images[1] != undefined) && isExpanded ? <Col className='pe-0' xs={6}><img style={SMALL_IMG} src={hotel.images[1]}/></Col> : null}
                                {(hotel.images[2] != undefined) && isExpanded ? <Col className='ps-0' xs={6}><img style={SMALL_IMG} src={hotel.images[2]}/></Col> : null}
                                {(hotel.images[3] != undefined) && isExpanded ? <Col className='pe-0'xs={6}><img style={SMALL_IMG} src={hotel.images[3]}/></Col> : null}
                                {(hotel.images[4] != undefined) && isExpanded ? <Col className='ps-0'xs={6}><img style={SMALL_IMG} src={hotel.images[4]}/></Col> : null}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={7} sm={8} className='text-start'>
                                    <h3 className='mb-0 mt-1'>{hotel.name}</h3>
                                    <p className='my-0'>{hotel.city}</p>
                                    <p className='my-0'>{hotel.distFromCenter} km från Centrum</p>
                                    <Row className='py-2'>
                                    {hotel.features.map((feature)=>(
                                        <Attribute xs={12} sm={6} roomFeature={feature} key={feature} />
                                    ))}
                                    </Row>
                                </Col>
                                <Col className='h-100 align-items-bottom'>
                                        <Row>
                                            <Col>
                                                <StarRating rating={hotel.rating} />
                                            </Col>
                                        </Row>
                                        <Row className='pt-3'>
                                            <Col>
                                                <span className="price">Pris från </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <span className="price">{hotel.roomoptions[0].price} kr / natt</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button onClick={() => navigate(`/hotel/hotelid/${hotel.city.toLowerCase()}/${hotel.id}/${props.dates}`)}>Gå till bokning</Button>
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                            
                            {isExpanded && 
                                <Row>
                                    <Col className='text-start'>
                                        <p>{hotel.description}</p>
                                        <h4>Restaurang</h4>
                                        <p>{hotel.restaurant}</p>
                                        <h4>Rumsbokning</h4>
                                        <p>{hotel.booking}</p>
                                    </Col>
                                </Row>
                            }
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col role='button' onClick={() => {const current = isExpanded; setIsExpanded(!current);}} >                          
                            <img src={arrowdown} width={30} height={10} alt="" />
                        </Col>
                        
                    </Row>
                </Card>
            </Col>
        </Row>   
    );
}

SearchResultCard.propTypes = {
    hotel: PropTypes.object.isRequired,
    dates: PropTypes.object.isRequired
}
