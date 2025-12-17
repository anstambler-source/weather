import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/accountActions.js";

const Form = () => {
    const dispatch = useDispatch();

    const handleClickSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;