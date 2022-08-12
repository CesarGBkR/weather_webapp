function fetchWeather() {
    const API_KEY = ''
    var country = 'Mexico'
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${country}&units=metric`)
    .then(response => response.json())
    .then(body =>{
        var country = body.name
        var temp = body.main.temp
        var temp_min = body.main.temp_min
        var temp_max = body.main.temp_max
        // var humidity = body.main.humidity // Percent
        const tempToHTML = document.getElementById("temperature").innerText = `${temp}°`      
        const tempMinToHTML = document.getElementById("temperatureMax").innerText = `${temp_max}°`      
        const tempMaxToHTML = document.getElementById("temperatureMin").innerText = `${temp_min}°` 
        const countryToHTML = document.getElementById("country").innerText = `${country}` 
    })
}