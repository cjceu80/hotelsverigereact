import { Col } from "react-bootstrap";
import greenplopp from '../assets/greenplopp.png';



export default function Attribute(props) {
    return (
        <Col xs={props.xs} sm={props.sm} className="text-start">
            <img className="pb-1" src={greenplopp} width={15}/>
            <span> {props.roomFeature}</span>
        </Col>
    );
};
