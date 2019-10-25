var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();

function saveLocalStorage(){

  localStorage.setItem("titleW", document.getElementById("tittleWeb").value);
  localStorage.setItem("nameW", document.getElementById("name").value);
  localStorage.setItem("majorW", document.getElementById("major").value);
  localStorage.setItem("contentW", document.getElementById("content").value);
  localStorage.setItem("imgurlW", document.getElementById("imgurl").value);
  localStorage.setItem("codeShW", document.getElementById("codeSh").value);

 





  console.log(localStorage.getItem("titleW"));
  console.log(localStorage.getItem("nameW"));
  console.log(localStorage.getItem("majorW"));
  console.log(localStorage.getItem("contentW"));
  console.log(localStorage.getItem("imgurlW"));
  console.log(localStorage.getItem("codeShW"));




  document.getElementById("submitBtn").innerHTML ='<input type="submit" value="Submit"></input>';

}