import React from "react";
import { Form, redirect, useNavigate } from 'react-router-dom';
import RoomReceipt from './RoomReceipt';
import { handleDates } from './SearchResults';
import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
 
//Submit action to continue to receipt if payment is accepted
export function action( { params }){

  return redirect(`/hotel/receipt`);
}

//Render the payment confirmation view
export default function Payment() {
    const checkout = JSON.parse(sessionStorage.getItem("checkout"));
    const hotel = JSON.parse(sessionStorage.getItem("hotel"));
    const navigate = useNavigate();

  function getPrice() {
    let price = 0;

    //Calculate number of days.
    const dates = JSON.parse(checkout.dates);
    let numberOfDays = dates.e-dates.s;
    //If in and out date are the same one day is assumed.
    if (numberOfDays == 0) numberOfDays = 1;
    else numberOfDays = numberOfDays/(1000*3600*24)
    
    //Runs through the hotels from hotel id and use name as key in info to access amount cost and number of rooms.
    hotel.roomoptions.forEach((room)=> price += room.price * parseInt(checkout.data[room.name]));

    return price * numberOfDays;
  }

  function getTotalBeds() {
    let rooms = 0;
    //Runs through the hotels from hotel id and use name as key in info to access amount of rooms.
    hotel.roomoptions.forEach((room)=> rooms += parseInt(checkout.data[room.name]))

    return rooms;
  }


  return (
  
    <Container>

    <Breadcrumb role='button' onClick={() => navigate(-1)} className="navigationLink">← Tillbaka till sökresultat</Breadcrumb>
    <Card className="p-3" style={{boxShadow: "4px 4px 15px #000"}}>
        <h1>Betalning</h1>
          <h2>Stämmer dina uppgifter?</h2>
        
        <Row>
          <Col>
            <p>Förnamn: {checkout.data.firstname}</p> 
            <p>Efternamn: {checkout.data.lastname}</p>
            <p>Adress: {checkout.data.adress}</p>
            <p>Stad: {checkout.data.city}</p>
            <p>Postnummer: {checkout.data.code}</p>
            <p>E-post: {checkout.data.email}</p>
            <p>Telefon: {checkout.data.phone}</p>
          </Col>
          <Col>
            <p>Hotel: {hotel.name}</p> 
            <p>Rum: {getTotalBeds()} st </p>
              {/* List hotel rooms */}
            {hotel.roomoptions.map((room)=><RoomReceipt hotelRoom={room} bookingInfo={checkout.data} key={room.name}/>)}
            
            <p>Incheckning: {handleDates(checkout.dates)[0]}</p>
            <p>Utcheckning: {handleDates(checkout.dates)[1]}</p>
            <p>Pris: {getPrice(checkout.dates)} kr</p>
            
          </Col>
        </Row>
        <Form method="post">
          <Button className="standardButton" type="submit">Betala</Button>
        </Form>
      </Card>
      </Container>
    
  )
};