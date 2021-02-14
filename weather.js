const COORDS_LS = 'coords';
const API_KEY = '2e463729313e23c51143ecc6f7ef1b38';
const weather = document.querySelector('.js-weather');

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}

function saveCoords(coordsobj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsobj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.error('cannot get geo locatioon');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
   const loadedCoords = localStorage.getItem(COORDS_LS);
   if (loadedCoords) {
       const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
   } else {
      askForCoords(); 
   }
}

function init() {
    loadCoords();
}

init();