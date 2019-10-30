var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();


        var txt = '{"name":"Isaac", "age":28, "city":"Mexico City", "height":"1.79","weight":"75Kg","major":"Software Engineering"}'
        var obj = JSON.parse(txt);




var urlInit = "https://openweathermap.org/data/2.5/weather?q=";
var passK = "&appid=b6907d289e10d714a6e88b30761fae22";
var city;
var country;
var formatVal;
var url;
var jsonObj;
var imgUrl="https://openweathermap.org/img/wn/";
var imgUrlFin = "@2x.png";
var finalUrl;




function Unix_timestamp(t){
  var dt = new Date(t*1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
  }
  









function requestJSON(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    else
    document.getElementById("demo").innerHTML = "Error retreiving the file";
  };
  xhttp.open("GET", "file.txt", true);
  xhttp.send();
}


function requestAPIweather(){  
  city =  document.getElementById("city").value;  
  country =  "," + document.getElementById("countrycode").value;
  formatVal = document.getElementById("formats").value;
  console.log(city);
  console.log(country);
  console.log(formatVal);
 

  if (country == ","){
    
    url= urlInit + city +  passK + "&units="+ formatVal
  }
  else {
    url= urlInit + city + country + passK + "&units="+ formatVal 
  }
console.log(url);


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    jsonObj = JSON.parse(this.responseText);

    finalUrl =imgUrl + jsonObj.weather[0].icon + imgUrlFin;

    var coordinates = "https://www.google.com/maps/place/";
    
    document.getElementById("weatherimg").width = 60;
    document.getElementById("weatherimg").height = 60;
    document.getElementById("weatherimg").src = finalUrl;
    document.getElementById("windAPI").innerHTML = "Speed: "+ jsonObj.wind.speed + "Direction: "+ jsonObj.wind.deg +"°";
    document.getElementById("cloudAPI").innerHTML = " "+ jsonObj.weather[0].description;
    document.getElementById("pressureAPI").innerHTML = jsonObj.main.pressure+" hpa";
    document.getElementById("humidAPI").innerHTML = jsonObj.main.humidity+"%";
    document.getElementById("sunrAPI").innerHTML = (Unix_timestamp(jsonObj.sys.sunrise))+" Hrs";
    document.getElementById("sunsAPI").innerHTML = (Unix_timestamp(jsonObj.sys.sunset))+" Hrs";
    document.getElementById("geoAPI").innerHTML =  '<p><a href="' +coordinates+jsonObj.coord.lat +'°,'+jsonObj.coord.lon +'°'+ '"</a>Google Maps</p>';   
    document.getElementById("tempAPI").innerHTML = jsonObj.main.temp+"°";
    document.getElementById("countAPI").innerHTML = jsonObj.sys.country;


  }
 




};
xhttp.open("GET", url, true);
xhttp.send();
  }


