import { keys } from "./keys.js";
const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};

const restraunts = [
    {
        name: "Chuys",
        address: "8438 TX-151, San Antonio, TX 78245",
        phone: "210-647-2753",
        coordinates: [-98.65441, 29.43595],
    },
    {
        name: "Chuys",
        address: "14855 IH-35 North, Selma, TX 78154",
        phone: "210-404-2600",
        coordinates: [-98.32693, 29.5743],
    },
    {
        name: "Chuys",
        address: "15639 I-10, San Antonio, TX 78249",
        phone: "210-545-0300",
        coordinates: [-98.598929, 29.594652],
    }];

//MAIN
(async () => {
    const coordinates = await getCoordinates("San Antonio, Tx");
    console.log(coordinates);
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: coordinates,
        zoom: 10,
        keyboard: false,
    });
    for (let restraunt of restraunts) {
        const marker = new mapboxgl.Marker()
            .setLngLat(restraunt.coordinates)
            .addTo(map)
            .setPopup(new mapboxgl.Popup().setHTML(`<p>${restraunt.name}</p><p>${restraunt.address}</p><p>${restraunt.phone}</p><p>I love the food here! Try other locations near you!</p>`));
    }

})();