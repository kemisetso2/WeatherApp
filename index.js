function Search(event) {
  event.preventDefault();
  let searchInputElement=document.querySelector("#search-input");
  let cityElement=document.querySelector("#current-city");
  cityElement.innerHTML=searchInputElement.value;
}

function formatDate(data){

  let minutes=date.getMinutes();
  let hours=date.getHours();
  let day=date.getDay();

  if (minutes <10){
    minutes=ò ${minutes}';'
  }

  if (hours <10){
    hours=ò ${hours}';'
  }

  let days=[
    "Sundays";
    "Mondays";
    "Tuesday";
    "Wednesday";
    "Thursday";
  ],

  let FormattedDay=days[days];
  return '$ {formattedDay} $ {hours:& {minutes}';
}

let searchform=document.querySelector("#search-form");
searchform.addEventListener("submit",search);

let currentDateElement=document.querySelector("#current-date");
let currentDate=new Date();

currentDateElement.innerHTML=formatDate(current-date);

function displayTemperature(response) {
  let temperature=Math.round(response)(data.temperature.current);

  let city=response.data.city;
  let country=response.data.country;
  let description=response.data.condition.description;

  let temperatureElement=document.querySelector("#temperature");
  temperatureElement.innerHTML='The temperature in ${city};${country} is ${temperature}℃(${description}).';

}

let city="London";
let apiKey="1ft86e29o24abb438222987f3493012d";
let apUrl='https://api.shecodes.io/weather/v1/current?query=${London}&key=${1ft86e29o24abb438222987f3493012d}&units=metric';

axios.get(apiUrl).then(displayTemperature);