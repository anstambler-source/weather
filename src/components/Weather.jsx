const Weather = ({weather, message}) => {
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
        </div> // sunset? - esli sunset undefined stroka vipolnyaetsa tolko do sunset vklu4itelno
    )
}

export default Weather;