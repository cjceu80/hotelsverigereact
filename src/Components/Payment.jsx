import React from "react";
import { Form, redirect, useLoaderData, NavLink, useNavigate } from 'react-router-dom';
import { getHotel } from '../hotellData';
import RoomReceipt from './RoomReceipt';
import { handleDates } from './SearchResults';
 
//Submit action to continue to receipt if payment is accepted
export function action( { params }){
  if (!params) return;

  return redirect(`/hotelid/${params.hotelid}/receipt/${params.paymentInfo}/${params.dates}`);
}

//Loader to handle params
export function loader({ params }){
  if (!params) return;

  //Create object from parameters to return to component renderer
 const paymentInfo = { 
  info: JSON.parse(params.paymentInfo),
  hotel: getHotel(params.hotelid),
  dates: params.dates,
};
    
  return paymentInfo;
}

//Render the payment confirmation view
const Payment = () => {
  const loaderData= useLoaderData();
  const navigate = useNavigate();

  function getPrice() {
    let price = 0;

    //Calculate number of days.
    const dates = JSON.parse(loaderData.dates);
    let numberOfDays = dates.e-dates.s;
    //If in and out date are the same one day is assumed.
    if (numberOfDays == 0) numberOfDays = 1;
    else numberOfDays = numberOfDays/(1000*3600*24)
    
    //Runs through the hotels from hotel id and use name as key in info to access amount cost and number of rooms.
    loaderData.hotel.roomoptions.forEach((room)=> price += room.price * parseInt(loaderData.info[room.name]));

    return price * numberOfDays;
  }

  function getTotalBeds() {
    let rooms = 0;
    //Runs through the hotels from hotel id and use name as key in info to access amount of rooms.
    loaderData.hotel.roomoptions.forEach((room)=> rooms += parseInt(loaderData.info[room.name]))

    return rooms;
  }


  return (
  
    <div className="mainContent">
      <div className="navWrapper">
            <span onClick={() => navigate(-1)} className="navigationLink">← Tillbaka till sökresultat</span>
            </div>
      <div className="paymentDetailsWrapper">
        <h1>Betalning</h1>
        <div className="paymentDetailsH2Title">
          <h2>Stämmer dina uppgifter?</h2>
        </div>
        
        <div className="paymentDetailsInnerWrapper">
        
          <div className="paymentPersonalDetails">
            <p>Förnamn: {loaderData.info.firstname}</p> 
            <p>Efternamn: {loaderData.info.lastname}</p>
            <p>Adress: {loaderData.info.adress}</p>
            <p>Stad: {loaderData.info.city}</p>
            <p>Postnummer: {loaderData.info.code}</p>
            <p>E-post: {loaderData.info.email}</p>
            <p>Telefon: {loaderData.info.phone}</p>
          </div>
          <div className="paymentBookingDetails">
            <p>Hotel: {loaderData.hotel.name}</p> 
            <p>Rum: {getTotalBeds()} st 
              {/* List hotel rooms */}
            {loaderData.hotel.roomoptions.map((room)=><RoomReceipt hotelRoom={room} bookingInfo={loaderData.info} key={room.name}/>)}
            </p>
            <p>Incheckning: {handleDates(loaderData.dates)[0]}</p>
            <p>Utcheckning: {handleDates(loaderData.dates)[1]}</p>
            <p></p>
            <p>Pris: {getPrice(loaderData.dates)} kr</p>
            
          </div>
        </div>
        <Form method="post" className="paymentButtonWrapper">
          <input className="standardButton" value="Betala" type="submit" />
        </Form>
      </div>
    </div>
    
  )
};

export default Payment;