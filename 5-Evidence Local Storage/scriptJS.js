var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();
var objectLS ;







function saveLocalStorage(){

  objectLS = {
    titleW: document.getElementById("tittleWeb").value,
    nameW: document.getElementById("name").value,
    majorW: document.getElementById("major").value,
    contentW: document.getElementById("content").value,
    imgurlW: document.getElementById("imgurl").value,
    codeShW: document.getElementById("codeSh").value
  }

  let objectLS_serialized = JSON.stringify(objectLS);
  localStorage.setItem("localStorageObj",objectLS_serialized);

  console.log(localStorage.getItem("localStorageObj"));
  
  document.getElementById("submitBtn").innerHTML ='<input type="submit" value="Submit"></input>';

}
