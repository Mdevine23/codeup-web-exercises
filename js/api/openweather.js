import { keys } from "../keys.js";

/**
 * Gets a forecast from the OpenWeather API
 * @param {number} lat - Latitude of coordinates
 * @param {number} lng - Longitude of coordinates
 * @returns {Promise} - Promise object representing the forecast
 */
export const getForecast = async (lat, lng) => {
    if (Array.isArray(lat)) {
        lat = lat[0];
        lng = lat[1];
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`
    const options = {
        method: "GET"
    };
    const response = await fetch(url);
    const data = await response.json();
    return data;
};