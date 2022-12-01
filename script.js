//    Access-token  =  T8RK9N7GW75VN6JRRZ5SDA4JF.
//    i have mentioned the website of the weather Api used in this project inside the placeholder for AccessToken.

function getData() {
    var locate = document.getElementById('location').value;
    var Access_token = document.getElementById('token').value;
    document.getElementById('noResult').innerHTML="";
   if(locate=="" || Access_token==""){
    document.getElementById('error').innerHTML='Please Enter Correct Location or Valid Access Token';
    return;
   }
   else{
    document.getElementById('error').innerHTML="";
   }
    const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locate}?unitGroup=metric&key=${Access_token}&contentType=json`

    fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(err=>{
            document.getElementById('noResult').innerHTML=`${"no result found"}`;
            document.getElementById('weather_details').innerHTML="";
        })
        .then(data => {
            const result = `
            <table id="weather_details">
      <tr>
      <td>Location : ${data.address}</td>
  </tr>
  <tr>
      <td>Lat : ${data.latitude}</td>
      <td>Long : ${data.longitude}</td>
  </tr>
  <tr>
      <td>Time Zone : ${data.timezone}</td>
  </tr>
  <tr>
      <td>Wind Speed : ${data.currentConditions.windspeed}</td>
  </tr>
  <tr>
      <td>Pressure : ${data.currentConditions.pressure}</td>
  </tr>
  <tr>
      <td>Humidity : ${data.currentConditions.humidity}</td>
  </tr>
  <tr>
      <td>Wind Direction : ${data.currentConditions.winddir}</td>
  </tr>
  <tr>
      <td>UV Index : ${data.currentConditions.uvindex}</td>
  </tr>
  <tr>
      <td>Feels Like : ${data.currentConditions.feelslike}</td>
  </tr>
     </table>`
      document.getElementById('weather_details').remove();
      result_data.insertAdjacentHTML('afterbegin',result);
      

     })
    }