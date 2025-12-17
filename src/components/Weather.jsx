import {useSelector} from "react-redux";

const Weather = () => {
    const message = useSelector(state => state.message)
    const weather = useSelector(state => state.weather)

    if (message) {
        return (
            <div className={'error'}>{message}</div>
        )
    }
    return (
        <div className={'infoWeath'}>
            <p>Location: {weather.country} {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
        </div>
    )
}

export default Weather;