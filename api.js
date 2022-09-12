
async function test (){
    let key = "55ae2e99fca0dd8d02b79e20bcb13981"
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=${key}`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)

    cityName.innerHTML = jsonResponse.name;
    degree.innerHTML = `${jsonResponse.main.temp}${"<sup>°</sup>"}`
    condition.innerHTML = jsonResponse.weather[0].description;
    country.innerHTML = jsonResponse.sys.country
    longitude.innerHTML = jsonResponse.coord.lon
    latitude.innerHTML = jsonResponse.coord.lat
    cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
    pressure.innerHTML = jsonResponse.main.pressure
    humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
    wind.innerHTML = `${jsonResponse.wind.speed}${"Km/hr"}`
    gust.innerHTML = `${jsonResponse.wind.gust}${"Km/hr"}`
}

const timeDisp = ()=>{
    const time = new Date();

    const hour = timeFormat((time.getHours()))
    const minutes = timeFormat((time.getMinutes()))
    const day = timeFormat((time.getDay()))
    const month = timeFormat((time.getMonth()))
    const year = timeFormat((time.getFullYear()))
    clock.innerHTML = `${hour}:${minutes}-${day},${month} ${year}`
}
setInterval(timeDisp, 1000);

const timeFormat = (timer)=>{
    if(timer<10){
    return '0'+timer
    }
    else{
        return timer
    }
}

const currentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        longitude.innerHTML = position.coords.longitude
        latitude.innerHTML = position.coords.latitude
    })
}

async function test (){
    let key = "55ae2e99fca0dd8d02b79e20bcb13981"
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=${key}`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)

    cityName.innerHTML = jsonResponse.name;
    degree.innerHTML = `${jsonResponse.main.temp}${"<sup>°</sup>"}`
    condition.innerHTML = jsonResponse.weather[0].description;
    country.innerHTML = jsonResponse.sys.country
    longitude.innerHTML = jsonResponse.coord.lon
    latitude.innerHTML = jsonResponse.coord.lat
    cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
    pressure.innerHTML = jsonResponse.main.pressure
    humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
    wind.innerHTML = `${jsonResponse.wind.speed}${"Km/hr"}`
    gust.innerHTML = `${jsonResponse.wind.gust}${"Km/hr"}`
}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}