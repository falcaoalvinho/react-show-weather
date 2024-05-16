import "./style.css";

function CardTemperatura(proprieties){
    return (
        <div className="div-card-temperatura">
            <h2>{proprieties.temperature}ºC</h2>
            <h3>{proprieties.local}</h3>
            <h3>{proprieties.day}</h3>
            <h3>{proprieties.weather}</h3>
        </div>
    )
};

export default CardTemperatura;