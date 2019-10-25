












document.getElementById("titleDisp").innerHTML = localStorage.getItem("titleW");
document.getElementById("nameDisp").innerHTML = "<b>The student: </b>" + localStorage.getItem("nameW");
document.getElementById("major").innerHTML = "<b>With the Major: </b>" + localStorage.getItem("majorW") + " <br><br> Added this to the Local Storage and this website: ";
document.getElementById("contentDisp").innerHTML = localStorage.getItem("contentW");
document.getElementById("ramdImg").src = localStorage.getItem("imgurlW");
document.getElementById("codeDisp").innerHTML = localStorage.getItem("codeShW");


