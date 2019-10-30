  let objectLS_Dserialized = JSON.parse(localStorage.getItem("localStorageObj"));

document.getElementById("titleDisp").innerHTML = localStorage.getItem("titleW");
document.getElementById("nameDisp").innerHTML = "<b>The student: </b>" + objectLS_Dserialized.nameW;
document.getElementById("major").innerHTML = "<b>With the Major: </b>" + objectLS_Dserialized.majorW + " <br><br> Added this to the Local Storage and this website: ";
document.getElementById("contentDisp").innerHTML = objectLS_Dserialized.contentW;
document.getElementById("ramdImg").src = objectLS_Dserialized.imgurlW;
document.getElementById("codeDisp").textContent = objectLS_Dserialized.codeShW;


