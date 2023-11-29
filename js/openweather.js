import { getForecast } from './api/openweather.js';
import {getCoordinates, createMap,} from './api/mapbox.js';
const renderCard = ({max, min, description, icon, dt}) => {
    const weatherCard = document.createElement('col');
    const date = new Date(dt * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {weekday: 'long'});

       weatherCard.classList.add('col', 'flex-wrap', 'justify-content-center', 'align-items-center', 'd-flex', 'cards');
        weatherCard.innerHTML = `
                <h2><b>${formattedDate}</b></h2>
                <hr>
                <p><b>high</b> ${max} <b>low</b> ${min}</p>
                <p><b>desc</b> ${description}</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="weather icon" width="50px" height="50px">               
    `;
        return weatherCard;
    }
const updateCards = async (days) => {
    const cardContainer = document.querySelector('#weatherCards');
    cardContainer.innerHTML = '';
    const cardFragment = document.createDocumentFragment();
    for (let day of days){
        const weatherCards = renderCard(day);
        await cardFragment.appendChild(await weatherCards);
    }
    cardContainer.appendChild(cardFragment);
}

//MAIN
(async()=>{
    const coords = await getCoordinates('San Antonio, TX');
    const forecast = await getForecast(coords[1], coords[0]);
    const fiveDayForecast = (forecast.daily.slice(0, 5)).map((day) => {
        return {
            max: day.temp.max,
            min: day.temp.min,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
            dt: day.dt,
        };
    });
    const map = createMap('map', coords);
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
    map.addControl(geocoder);
    geocoder.on('result', async function(e) {
        const coords = await getCoordinates(e.result.place_name);
        const forecast = await getForecast(coords[1], coords[0]);
        const fiveDayForecast = (forecast.daily.slice(0, 5)).map((day) => {
            return {
                max: day.temp.max,
                min: day.temp.min,
                description: day.weather[0].description,
                icon: day.weather[0].icon,
                dt: day.dt,
            };
        });
        const map = createMap('map', coords);
        await updateCards(fiveDayForecast);
    });
    await updateCards(fiveDayForecast);
})();