var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();
var objectLS ;


function onLoadFunction(){

alert("This is an onLoad event");
}

function onMouseOverFunction(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("ex1").innerHTML = coords;
}

function onMouseOver(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}

function onMouseOut(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

