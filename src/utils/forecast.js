const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/39bb2dcaa2d8cff3a3b499c25d7ae26b/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined,
                `${body.daily.data[0].summary} 
                It is currently ${body.currently.temperature} degress out. 
                There is a ${body.currently.precipProbability}% chance of rain.
                Max temperature ${body.daily.data[0].temperatureHigh} degress. 
                Min temperature ${body.daily.data[0].temperatureLow} degrees`
            )
        }
    })
}

module.exports = forecast