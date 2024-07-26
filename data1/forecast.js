const request = require("request");
const forecast = (latitude, langtitude, callback) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=ad07160825244f23847213314242407&q=${latitude},${langtitude}&aqi=no`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("ERROR!", undefined);
        }
        else if (response.body.error) {
            callback(response.body.error.message, undefined);
        }
        else {
            callback(undefined, `${response.body.location.name} : ${response.body.current.condition.text} and temp : ${response.body.current.temp_c}`);
        }
    });
}
module.exports = forecast;