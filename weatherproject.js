const apiKey = "a126ce63779299e1e00ac4484da8d337"
const btn = document.getElementById("searchBtn")
btn.addEventListener("click",()=>{

    let city = document.getElementById("cityInput").value;
    getWeather(city);
})
async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    let response = await fetch(url)
    if(response.status == 404){
        document.getElementById("result").innerHTML = `<p>&#x274C; City not found</p>`;
        return;
    }
    let data = await response.json();
    document.getElementById("result").innerHTML = `<h3> &#x1F321; Temp: ${data.sys.country}</h3>
    <p>&#x2601;Weather:${data.weather[0].description}</p>
    <p>&#x1F4A7: Humidity:${data.main.humidity}</p>
    <p>&#x1F32C; Wind:${data.wind.speed}</p>
    <img src="https://openweathermap.org/img//wn/${data.weather[0].icon}@2x.png" />;`
    console.log(data);
    

}