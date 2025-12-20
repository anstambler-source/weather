import {configureStore} from "@reduxjs/toolkit";
import message from "../features/message/messageSlice.js"
import weather from "../features/weather/weatherSlice.js"

export const store = configureStore({
    reducer: {
        message, weather
    }
})