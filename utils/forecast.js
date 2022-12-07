const request=require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f52e759b91eb3c9aac362249befc82cf&query='+ encodeURIComponent(lat) +','+encodeURIComponent(long)
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect to weatherstack',undefined)
        }
        else if (body.error) {
            callback('location not found!',undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ' in '+ body.request.query +'. It is currently ' + body.current.temperature + ' degrees out. It feels like ' +body.current.feelslike +' degrees.')
        }
    })
}

module.exports = forecast