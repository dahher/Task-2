// Wheatherapi :

const request = require("request");


// const url = "http://api.weatherapi.com/v1/current.json?key=ad07160825244f23847213314242407&q=egypt";
// request({ url }, (error, response) => {
//     const data1 = JSON.parse(response.body);
//     console.log(`${data1.location.name} : ${data1.current.condition.text}`);
// });

// const latitude = 101.901875103385;
// const langtitude = 35.4867029846329;
// const url = `https://api.weatherapi.com/v1/current.json?key=ad07160825244f23847213314242407&q=${latitude},${langtitude}&aqi=no`;
// request({ url, json: true }, (error, response) => {
//     if (error) {
//         console.log("ERROR!");
//     }
//     else if (response.body.error) {
//         console.log(response.body.error.message);
//     }
//     else {
//         console.log(`${response.body.location.name} : ${response.body.current.condition.text}`);
//     }
// });


// Mapbox :



const forecast = require("./data1/forecast");
const geocode = require("./data1/geocode");
const country = process.argv[2];
geocode(country, (error, data) => {
    console.log("ERROR => ", error);
    console.log("DATA => ", data);

    forecast(data.latitude, data.longtitude, (error, data) => {
        console.log("ERROR => ", error);
        console.log("DATA => ", data);
    });
});
