function fetchWeather() {
    const API_KEY = ''
    
    var country = document.getElementById("country").value
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${country}&units=metric`)
    .then(response => response.json())
    .then(body =>{
        var temp = body.main.temp
        var temp_min = body.main.temp_min
        var temp_max = body.main.temp_max

        const tempToHTML = document.getElementById("temperature").innerText = `${temp}°`      
        const tempMinToHTML = document.getElementById("temperatureMax").innerText = `${temp_max}° max`      
        const tempMaxToHTML = document.getElementById("temperatureMin").innerText = `${temp_min}° min` 
    })
}