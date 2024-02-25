import star from '../assets/star.png';

export default function StarRating(props) {
    return (
        <>
        <img className='pb-2' width={20} src={star}/>
        <span className="h5">{props.rating}/5</span>
        </>
    );
};
