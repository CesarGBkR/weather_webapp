import fetch from "node-fetch"
const API_KEY = ''
var country = 'Mexico'

function fetchWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${country}&units=metric`)
    .then(response => response.json())
    .then(body =>{
        var temp = body.main.temp
        var temp_min = body.main.temp_min
        var temp_max = body.main.temp_max
        var humidity = body.main.humidity // Percent
        console.log(temp)      
    })
}

fetchWeather()