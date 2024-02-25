import print from '../assets/print.png';

const PrintButton = () => {
    return (
        <div className="printButtonWrapper">
            <img src={print}></img>
            <h3>Skriv ut</h3>
        </div>
    );
};

export default PrintButton;