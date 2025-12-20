import {useSelector} from "react-redux";
import {icon_weather} from "../utils/constans.js";

const Weather = () => {
    const message = useSelector(state => state.message);
    const weather = useSelector(state => state.weather);

    if (message) {
        return (
            <div className={'error'}>{message}</div>
        )
    }
    return (
        <div className={'infoWeath d-flex justify-content-between'}>
            <div>
                <p>Location: {weather.country} {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset)?.toLocaleTimeString()}</p>
            </div>
            <div>
                <img src={`${icon_weather}/${weather.icon}@2x.png`} alt={weather.main} />
                <p className={'text-center fst-italic fs-5'}>{weather.main}</p>
            </div>
        </div>
    )
}

export default Weather;