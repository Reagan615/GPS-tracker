/* function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const overlay = select('.overlay');
const loading = select('.loading');

mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZ2FuNjE1IiwiYSI6ImNsYmt4anFsZzAyM2Ezd3FncTQ3NnhvemwifQ.Q7HshMC5Ax4-oMDBmeB7bA';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center:[0, 0],
    pitch:40,
    zoom:16
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
    color: '#3898ff'
});

function getLocation(position) {
    const { latitude, longitude} = position.coords;
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
   

    if(latitude && longitude) {
        map.setCenter([longitude, latitude]);
        marker.setLngLat([latitude, longitude]).addTo(map);
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 750);
    }
}

function errorHandler(event) {
    loading.style.animationPlayState = 'paused';
    console.log(event.message);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
}


//the watchPosition( ) method is used to register a handler function that will
//be called automatically each time the position of the device changes

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler, options);
} else {
    console.log('geolocation is not support by your browser');
}
 */
mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZ2FuNjE1IiwiYSI6ImNsYmt4anFsZzAyM2Ezd3FncTQ3NnhvemwifQ.Q7HshMC5Ax4-oMDBmeB7bA';
const monument = [-97.1930229807033, 49.81526785117632];
let loader = document.querySelector('.loading');
let board = document.querySelector('.overlay');
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: monument, // starting position [lng, lat]
    zoom: 9, // starting zoom
    bearing: 27,
    pitch: 45
});


function getLocation(position) {
    const options = {
        enableHighAccuracy: true
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, errorHandler, options);
    } else {
        console.log('geolocation is not support by your browser');
    }
};

function onSuccess(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    map.setCenter([longitude, latitude]);
    /* const marker1 = new mapboxgl.Marker().setLngLat([-97.1955112, 49.8164595]).addTo(map);
    const marker2 = new mapboxgl.Marker().setLngLat([-97.196208, 49.816715]).addTo(map);
    const marker3 = new mapboxgl.Marker().setLngLat([-97.1881982, 49.8118703]).addTo(map);
    const marker4 = new mapboxgl.Marker().setLngLat([-97.1863782, 49.8139344]).addTo(map); */
    const marker5 = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    map.setZoom(15);
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Manitoba Institute of Trades&Technology'
    );
    const el = document.createElement('div');
    el.id = 'marker';
    new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    loader.style.visibility = 'hidden';
    board.classList.remove('overlay');
}

function errorHandler(error) {
    loader.style.animationPlayState = "paused";
    console.log(error.message);
}

window.onload = function () {
    getLocation();
}