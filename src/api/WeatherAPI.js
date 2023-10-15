import axios from 'axios';
import { weatherAPIKey } from '../../constants';

const forecastEndpoint = params =>
    `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey} &q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndpoint = params =>
    `https://api.weatherapi.com/v1/search.json?key=${weatherAPIKey} &q=${params.cityName}`;

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchWeatherForecast = params => {
    let forecastUrl = forecastEndpoint(params);
    return apiCall(forecastUrl)
}


export const fetchLocations = params => {
    return apiCall(locationEndpoint(params))
}
