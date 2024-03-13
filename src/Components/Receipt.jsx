import PrintButton from './PrintButton.jsx';
import { isJSONString } from './SearchResults'
import { Card, Col, Container, Row } from 'react-bootstrap';



  //Return formated date. Similar to ./SearchBar/handleDates but without the <p> element.
  function handleDates(datesString){
    //test if valid string
    if (!datesString || !isJSONString(datesString))
      return;
  
    const dates = JSON.parse(datesString);
    const start = new Date(dates.s).toLocaleDateString();
    const end = new Date(dates.e).toLocaleDateString();
    return (start!=end) ? ` ${start} till ${end}` : ` ${start}`;
  }

  //Return formated in and out checking dates in two <p> elements.
  function getCheckInOutDateString(datesString)
  {
    //test if valid string
    if (!datesString || !isJSONString(datesString))
      return;
  
    const dates = JSON.parse(datesString);
    const start = new Date(dates.s);

    //if checkout date is set on the same day as checkin the day after is asumed for checkout. Adds a day in that case.
    let end;
    if (dates.e-dates.s == 0)
        end = new Date(dates.e + 1000*3600*24);
    else end = new Date(dates.e);

    return(
        <>
            <p>Incheckning: {start.toLocaleDateString("sv-SE", {month: "short", day: "numeric", year: "numeric" })}</p>
            <p>Utcheckning: {end.toLocaleDateString("sv-SE", {month: "short", day: "numeric", year: "numeric" })}</p>
        </>
    )
  }


//Component to display the receipt after payment
export default function Receipt() {
    const checkout = JSON.parse(sessionStorage.getItem("checkout"));
    const hotel = JSON.parse(sessionStorage.getItem("hotel"));

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

    return (
        <Container>
            <Card className="p-3" style={{boxShadow: "4px 4px 15px #000"}}>
                <Row>
                    <Col>
                    <h1>Orderbekräftelse</h1>
                    </Col>
                    <Col sm={2}>
                    <PrintButton />
                    </Col>
                </Row>
                <h2>Betalningen för din resa lyckades.</h2>
                <p>Din vistelse vid {hotel.name} i {hotel.city} den {handleDates(checkout.dates)} är nu bekräftad.</p>
                
                <div>
                    <div>
                        <p>Vi ser fram emot din vistelse!</p>
                    </div>
                </div>
                <div>
                    <div>
                            <h5>Bokningsdetaljer</h5>
                        <p>Ordernummer: 12KJNDASPO23</p>
                        <p>Namn: {checkout.data.firstname} {checkout.data.lastname}</p>
                        {getCheckInOutDateString(checkout.dates)}
                        <p>Pris: {getPrice()} kr</p>
                    </div>
                    <div>
                            <h5>Policyer</h5>
                        <p>Checkin tid: 12:00</p>
                        <p>Utcheckning tid: 10:00</p>
                        <p>Avbokning: För att avboka krävs att du kontaktar hotellet senast kl 12:00 dagen innan incheckning.</p>
                    </div>
                </div>
                </Card>
        </Container>
    );
};