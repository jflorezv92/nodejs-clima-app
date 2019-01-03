const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5d526bbd9ae3fc6ad78ccbd0a10a5a51`);
    if (resp.cod === '400') {
        throw new Error(`No hay resultados para la cordenada Lat: ${lat} - lng: ${lng}`);
    }
    let clima = resp.data.main.temp;
    return clima;
}

module.exports = {
    getClima
}