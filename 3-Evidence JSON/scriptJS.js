var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();


        var txt = '{"name":"Isaac", "age":28, "city":"Mexico City", "height":"1.79","weight":"75Kg","major":"Software Engineering"}'
        var obj = JSON.parse(txt);

var userObj;
       


function addJSONinfo(){
  var nameOb = document.getElementById("name").value;
  var lastOb =  document.getElementById("last").value;
  var ageOb = document.getElementById("age").value;
  var streetOb = document.getElementById("street").value;
  var numbOb =  document.getElementById("number").value;
  var cityOb = document.getElementById("city").value;
  var zipOb = document.getElementById("zip").value;
  var stateOb = document.getElementById("state").value;
  var detailOb = document.getElementById("details").value;

  var createdObj = {"name":nameOb, "lastname":lastOb, "age":ageOb ,"street":streetOb, "homeNumber":numbOb,"city":cityOb,"zip":zipOb,"state":stateOb,"details": detailOb}
  userObj = createdObj;
console.log('%c userObj ', 'background: #222; color: #bada55');
console.log("Is the JSON object the user can manipulate");

document.getElementById("jsonStringify").innerHTML = '<input type ="submit" onclick="JSONToString()"></input>';

}


function JSONToString(){
 userObj = JSON.stringify(userObj);
document.getElementById("jsonStringify").innerHTML = userObj;

document.getElementById("jsonParse").innerHTML = '<input type ="submit" onclick="stringToJSON()">';

  
}

function stringToJSON(){  
  userObj = JSON.parse(userObj);
  document.getElementById("jsonParse").innerHTML = "Use the Console to see the object because it will not print correctly, just look: <br><b>" + userObj + "</b><br><br> type userObj. to call the object";


}