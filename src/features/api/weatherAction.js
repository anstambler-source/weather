import {api_key, base_url} from "../../utils/constans.js";
import {setMessage} from "../message/messageSlice.js";
import {setWeather} from "../weather/weatherSlice.js";

export const fetchWeather = (city) => async dispatch => {
    try {
        dispatch(setMessage('Pending...'))
        const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        const data = await res.json()
        dispatch(setWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000,
            main: data.weather[0].main,
            icon: data.weather[0].icon,
        }));
        dispatch(setMessage(''));
    } catch (e) {
        console.log(e)
        dispatch(setMessage('Enter correct city name'));
    }
}