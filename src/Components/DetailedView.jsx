
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { getHotel } from '../hotellData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomSelector from './RoomSelector';
import Attribute from './Attribute.jsx';
import StarRating from './StarRating.jsx';
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';

//Action for post method
export async function action({ request, params }) {
    const formData = await request.formData();
    
    //Redirect with hotel param and form result object as a string.
    return redirect(`/hotelid/${params.hotelid}/payment/${JSON.stringify(Object.fromEntries(formData))}/${params.dates}`);
  }

  //Loads hotel data
export async function loader({params}){
    return await { hotelid: getHotel(params.hotelid), dates: params.dates };
}

//Render the detailed view where form for rooms and personal information is entered to proceed with booking.
const DetailedView = () => {
    const loaderData = useLoaderData();
    const navigate = useNavigate();
    const [errorState, setErrorState] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [formFirstName, setFormFirstName] = useState("");
    const [formLastName, setFormLastName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formAddress, setFormAddress] = useState("");
    const [formCode, setFormCode] = useState("");
    const [formCity, setFormCity] = useState("");
    const [formPhone, setFormPhone] = useState("");
    const [formInfo, setFormInfo] = useState("");
    const hotel = loaderData.hotelid;

    //A check to make sure all fields are entered.
    function handleSubmit(e){
        if (formFirstName != "" && formLastName != ""  && formEmail != "" && formAddress != "" && formCode != "" && formCity != "" && formPhone != "")
          return;
        
        //Prevent submit action.
        e.preventDefault();
        //Set state to show error element.
        setErrorState(true);
        }

    return (
        <Container>

            <Breadcrumb role='button' onClick={() => navigate(-1)} className="navigationLink">← Tillbaka till sökresultat</Breadcrumb>

            <Card className="p-3" style={{boxShadow: "4px 4px 15px #000"}}>

                <Row>
                    <Col sm={10}>
                        <h2 className='mb-0 mt-1'>{hotel.name}</h2>
                        <p className='my-0'>{hotel.city}</p>
                        <p className='mt-0'>{hotel.distFromCenter} km från Centrum</p>
                    </Col>

                    <Col >
                        <StarRating rating={hotel.rating} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <img src={selectedImage ? selectedImage : hotel.images[0]} width={"100%"} ></img>
                    </Col>
                    <Col className='ps-sm-0'>
                        <Row>
                             {hotel.images.map((image, index) => <Col className='p-sm-0'xs={6} role='button' key={index}><img src={image} onClick={()=> setSelectedImage(image)} width={"100%"}></img></Col>)}
                        </Row>
                    </Col>
                </Row>
                <Row className='py-3'>
                    {hotel.features.map((feature)=>(
                        <Attribute xs={6} sm={3} roomFeature={feature} key={feature} />

                    ))}
                </Row>
                <Row>
                    <p>{hotel.description}</p>
                    <h3>Restaurang</h3>
                    <p>{hotel.restaurant}</p>
                    <h3>Rumsbokning</h3>
                    <p>{hotel.booking}</p>
                </Row>

                {/* Form to submit to booking */}
                <Form method="post">
                    <Row>
                        <Col sm={8}>
                            {/* List rooms with price and selector */}
                            
                            {hotel.roomoptions.map((room) => (
                                <RoomSelector room={room} key={room.name} />
                            ))}
                            
                        </Col>

                        {/* Personal information form */}
                        <Col>
                            <div className="personalDetailsForm">
                            <label>Förnamn</label>
                            <input type="text" name="firstname" onChange={(e) => setFormFirstName(e.target.getAttribute("value"))}></input>
                            <label>Efternamn</label>
                            <input type="text" name="lastname" onChange={(e) => setFormLastName(e.target.getAttribute("value"))}></input>
                            <label>Adress</label>
                            <input type="text" name="adress" onChange={(e) => setFormAddress(e.target.getAttribute("value"))}></input>
                            <label>Stad</label>
                            <input type="text" name="code" onChange={(e) => setFormCode(e.target.getAttribute("value"))}></input>
                            <label>Postnummer</label>
                            <input type="text" name="city" onChange={(e) => setFormCity(e.target.getAttribute("value"))}></input>
                            <label>E-post</label>
                            <input type="email" name="email" onChange={(e) => setFormEmail(e.target.getAttribute("value"))}></input>
                            <label>Telefon</label>
                            <input type="text" name="phone" onChange={(e) => setFormPhone(e.target.getAttribute("value"))}></input>
                            <label>Övrig information till hotellet:</label>
                            <textarea form="bookingForm" type="text" name="info" onChange={(e) => setFormInfo(e.target.getAttribute("value"))}></textarea>
                            {/* If error due to incomplete form this will be shown. */}
                            {(errorState) ? <p className="errorText" key="error">Fyll i alla fält för uppgifter</p> : null}
                            <input className="bookButton" type="submit" value="Boka" onClick={(e) => handleSubmit(e)} ></input>
                            </div>
                        </Col>
                    </Row>
                </Form>

            </Card>
        </Container>
    );
};

export default DetailedView;