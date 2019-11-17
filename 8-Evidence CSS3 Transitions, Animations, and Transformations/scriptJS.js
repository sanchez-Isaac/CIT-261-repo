var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();
var objectLS ;


function moveScrip11(){

  document.getElementById("ex1").style.fontSize = '90px';
  document.getElementById("ex1").style.color = 'purple';

}

function moveScrip1(){
  var box = document.querySelector('.boxss');
  box.addEventListener('click', function() {
    box.classList.toggle('spin2');
  });

 
}

function moveScrip2(){
  var box = document.querySelector('.box');
  box.addEventListener('click', function() {
    box.classList.toggle('move');
  });

}



function moveScrip3(){

  var box = document.querySelector('.boxs');
  box.addEventListener('click', function() {
    box.classList.toggle('spin');
  });


}

function moveScrip4(){

  var box = document.querySelector('.boxsss');
  box.addEventListener('click', function() {
    box.classList.toggle('movear');
  });


}


