import PropTypes from 'prop-types';

//Render a room name and count
export default function RoomReceipt(props) {
    //Get number of rooms by using room name as key in bookingInfo prop
    const roomCount = props.bookingInfo[props.hotelRoom.name];
    //return null if no rooms are selected of this type
    if (roomCount == 0)
      return;

    return (
        <p className='ps-2'>{props.hotelRoom.name} x{roomCount} </p>
    )
}

RoomReceipt.propTypes = {
    bookingInfo: PropTypes.object.isRequired,
    hotelRoom: PropTypes.object.isRequired
}