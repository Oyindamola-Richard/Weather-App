
let key = "55ae2e99fca0dd8d02b79e20bcb13981"

async function search (){
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=${key}&units=metric`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    let icon = `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
    image.src = icon
    cityName.innerHTML = jsonResponse.name;
    degree.innerHTML = `${Math.round(jsonResponse.main.temp)}${"<sup>°</sup>"}`
    condition.innerHTML = jsonResponse.weather[0].description;
    country.innerHTML = jsonResponse.sys.country
    longitude.innerHTML = jsonResponse.coord.lon
    latitude.innerHTML = jsonResponse.coord.lat
    cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
    pressure.innerHTML = jsonResponse.main.pressure
    humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
    wind.innerHTML = `${jsonResponse.wind.speed}${"Km/hr"}`
    gust.innerHTML = `${jsonResponse.wind.gust}${"Km/hr"}`


    if (jsonResponse.weather[0].main === "Rain"){
        gen.style.backgroundImage = `url(/img/raining.jpg)`
    }
    else if(jsonResponse.weather[0].main === "Clouds"){
        gen.style.backgroundImage = `url(/img/cloud.jpg)`
    }
    else{gen.style.backgroundImage = `url(/img/sunny.jpg)`}
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

async function currentLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let longitude = position.coords.longitude
       let  latitude = position.coords.latitude
       let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
       fetch(url).then((response)=>response.json()).then((currentLocation)=>{
           cityName.innerHTML = currentLocation.name;
           degree.innerHTML = `${Math.round(currentLocation.main.temp)}${"<sup>°</sup>"}`
           condition.innerHTML = currentLocation.weather[0].description;
           country.innerHTML = currentLocation.sys.country
           longitude.innerHTML = currentLocation.coord.lon
           latitude.innerHTML = currentLocation.coord.lat
           cloud.innerHTML = `${currentLocation.clouds.all}${"%"}`
           pressure.innerHTML = currentLocation.main.pressure
           humidity.innerHTML = `${currentLocation.main.humidity}${"%"}`
           wind.innerHTML = `${currentLocation.wind.speed}${"Km/hr"}`
           gust.innerHTML = `${currentLocation.wind.gust}${"Km/hr"}`

           if (currentLocation.weather[0].main === "Rain"){
            gen.style.backgroundImage = `url(/img/raining.jpg)`
        }
        else if(currentLocation.weather[0].main === "Clouds"){
            gen.style.backgroundImage = `url(/img/cloud.jpg)`
        }
        else{gen.style.backgroundImage = `url(/img/sunny.jpg)`}
       })
    })
}
