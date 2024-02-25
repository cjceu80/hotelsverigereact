import React, {useState} from 'react';

//Component for rendering rooms with up and down buttons.
const RoomSelector = (props) => {
  const [value, setValue] = useState(0);

  return(
<   div className="roomOption">
      <p name="room1" className="blueDetails roomName">{props.room.name}</p>
      <p className="blueDetails">{props.room.beds} sängar</p>
      <p className="price">{props.room.price} kr</p>
      <div className="iterateWrapper">
        <button className="minusSignButton" onClick={(e) => { if (value > 0) setValue(value-1) ; e.preventDefault();}} ></button>
        <input type="text" className="miniInput" name={props.room.name} value={value} readOnly></input>
        <button className="plusSignButton" onClick={(e) => { if (value < 40) setValue(value+1); e.preventDefault();}}></button>
      </div>
    </div>
  )}

export default RoomSelector;