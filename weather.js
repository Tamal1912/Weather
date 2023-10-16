let time=document.querySelector(".time");
let temp=document.querySelector(".temp");
let rain=document.querySelector(".rain");
let humidity=document.querySelector(".humidity");
let max=document.querySelector(".max");
let min=document.querySelector(".min");
let btn=document.querySelector(".btn");
let ip_box=document.querySelector(".ip_box")
let feel=document.querySelector(".felt");
let type=document.querySelector(".type");
let speed=document.querySelector(".speed")
setInterval(()=>{
  let date=new Date();
  let curr_time=date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
  time.innerHTML=`${curr_time}`
},1000);


async function check_weather(city){
     const api_key="f97da3ca833aee9272c3f645ec9f64a4"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
   
    const weather_data=await fetch(`${url}`).then(Response=>Response.json());
    console.log(weather_data);
   
    temp.innerHTML=`${weather_data.main.temp}°C`;
    feel.innerHTML=`${weather_data.main.feels_like}°C`;
    humidity.innerHTML=`${weather_data.main.humidity}%`
    max.innerHTML=`${weather_data.main.temp_max}°C`
    min.innerHTML=`${weather_data.main.temp_min}°C`
    type.innerHTML=`${weather_data.weather[0].description}.`.toUpperCase()
    speed.innerHTML=`${weather_data.wind.speed} Km/h`


    
 
}

btn.addEventListener('click',()=>{
    check_weather(ip_box.value)
})

