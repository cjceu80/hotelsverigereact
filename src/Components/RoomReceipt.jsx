import React from 'react';

//Render a room name and count
const RoomReceipt = (props) => {
    //Get number of rooms by using room name as key in bookingInfo prop
    const roomCount = props.bookingInfo[props.hotelRoom.name];
    //return null if no rooms are selected of this type
    if (roomCount == 0)
      return;

    return (
        <p>{props.hotelRoom.name} x{roomCount} </p>
    )
}

export default RoomReceipt;