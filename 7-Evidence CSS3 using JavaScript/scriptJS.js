var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();
var objectLS ;



var colorIn = document.getElementById("color");
var hexIn = document.getElementById("hex");

var colorIn2 = document.getElementById("color2");
var hexIn2 = document.getElementById("hex2");

function backColorChange(){
  var colorBack = colorIn.value;
  hexIn.value = colorBack;
  document.getElementById("example1").style.backgroundColor = colorBack;  
}

function sizeChanger(){
  var listValue = document.getElementById("numbSize").value;
  document.getElementById("example2").style.fontSize = listValue+"px";
}


function fontColorChange(){
  var colorBack = colorIn2.value;
  hexIn2.value = colorBack;
  document.getElementById("example3").style.color = colorBack;  
}

function positionChangerTop(){
  var listValue = document.getElementById("numbPositTop").value;
  document.getElementById("example4").style.paddingTop  = listValue+"px";


}function positionChangerLeft(){
  var listValue = document.getElementById("numbPositLeft").value;
  document.getElementById("example4").style.paddingLeft  = listValue+"px";
}

function positionChangerBottom(){
  var listValue = document.getElementById("numbPositBottom").value;
  document.getElementById("example4").style.paddingBottom  = listValue+"px";
}

function positionChangerRight(){
  var listValue = document.getElementById("numbPositRight").value;
  document.getElementById("example4").style.paddingRight  = listValue+"px";
}