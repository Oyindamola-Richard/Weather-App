
async function test (){
    // let key = "55ae2e99fca0dd8d02b79e20bcb13981"
    // let inte = inpt.value
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=55ae2e99fca0dd8d02b79e20bcb13981`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)

    disp.innerHTML =`
        <h1>${jsonResponse.name}</h1>
        `
    // jsonResponse.map((item)=>{
        
        
    // })
}