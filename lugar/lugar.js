const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0].geometry.location;

    // console.log(location);



    return {
        direccion: resp.data.results[0].formatted_address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLng
}