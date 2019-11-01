var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();
var objectLS ;







function dispNewElem1(){
  var title = document.createElement("div");
  var divi = document.createElement("div");
  var para = document.createElement("p");
  var codes = document.createElement("p");
  var additTxt = document.createElement("p");
  var newBtn = document.createElement("button");
  var newBtnDel = document.createElement("button");

  title.setAttribute("id", "title1");
  divi.setAttribute("id", "divi1");
  para.setAttribute("id", "para1");
  codes.setAttribute("id", "codes1");
  additTxt.setAttribute("id", "additTxt1");
  newBtn.setAttribute("id", "nBtn1");
  newBtn.setAttribute("onclick","dispNewElem2()");

  newBtnDel.setAttribute("id", "delbtn1");
  newBtnDel.setAttribute("onclick","delNewElem1()");


  title.innerHTML = "<div class='container text-center'><br><h1> DOM Manipulation - createElement and appendChild</h1>"
  divi.innerHTML = "<p>The HTML DOM createElement() method is used for creating an HTML element dynamically using JavaScript. It takes the element name as the parameter and creates that element node. You need to use the appendChild() method to have the newly created element as part of DOM.<br></p>";
  para.innerHTML = "<p >Example:</p>";
  codes.innerHTML = "<code id='example1'> <br>function myFunction() {<br>  var btn = document.createElement('BUTTON');<br>  document.body.appendChild(btn);<br>}<br><br> </code>";
  additTxt.innerHTML = "<div class='container text-center'><br>In the above syntax, BUTTON is passed as a parameter. BUTTON specifies the type of the created element. The nodeName of the created element is initialized to the BUTTON value. The document.createElement() returns the newly created element.</div>" 
  newBtn.innerHTML = "Click here to continue"
  newBtnDel.innerHTML = "Click here to go back"


  document.getElementById("article").appendChild(title);
  document.getElementById("article").appendChild(divi);
  document.getElementById("article").appendChild(para);
  document.getElementById("article").appendChild(codes);
  document.getElementById("article").appendChild(additTxt);
  document.getElementById("article").appendChild(newBtnDel);
  document.getElementById("btn1").style.display = 'none';
  document.getElementById("article").appendChild(newBtn);
  


                                                                                         
}

function delNewElem1(){
  var title = document.getElementById("title1");
  var divi = document.getElementById("divi1");
  var para = document.getElementById("para1");
  var codes = document.getElementById("codes1");
  var additTxt = document.getElementById("additTxt1");
  var newBtn = document.getElementById("nBtn1");
  var newBtnDel = document.getElementById("delbtn1");
  

  title.parentNode.removeChild(title);
  divi.parentNode.removeChild(divi);
  para.parentNode.removeChild(para);
  codes.parentNode.removeChild(codes);
  additTxt.parentNode.removeChild(additTxt);
  newBtn.parentNode.removeChild(newBtn);
  newBtnDel.parentNode.removeChild(newBtnDel);
  document.getElementById("btn1").style.display = 'block';
  
}

function dispNewElem2(){

  var title = document.createElement("div");
  var divi = document.createElement("div");
  var para = document.createElement("p");
  var codes = document.createElement("p");
  var additTxt = document.createElement("p");
  var newBtn = document.createElement("button");
  var newBtnDel = document.createElement("button");

  title.setAttribute("id", "title2");
  divi.setAttribute("id", "divi2");
  para.setAttribute("id", "para2");
  codes.setAttribute("id", "codes2");
  additTxt.setAttribute("id", "additTxt2");
  newBtn.setAttribute("id", "nBtn2");
  newBtn.setAttribute("onclick","dispNewElem3()");

  newBtnDel.setAttribute("id", "delbtn2");
  newBtnDel.setAttribute("onclick","delNewElem2()");


  title.innerHTML = "<div class='container text-center'><br><h1> DOM Manipulation - removeChild()</h1>"
  divi.innerHTML = "<p>The removeChild() method in HTML DOM is used to remove a specified child node of the given element. It returns the removed node as a node object or null if the node doesn’t exist.<br></p>";
  para.innerHTML = "<p >Example:</p>";
  codes.innerHTML = "<code id='example2'> function myFunction() {<br>  var item = document.getElementById('myLI');<br>  item.parentNode.removeChild(item);<br>}<br> </code>";
  additTxt.innerHTML = "<div class='container text-center'><br>This method accepts single parameter child which is mandatory. It represents the node which need to be remove.</div>" 
  newBtn.innerHTML = "Click here to continue"
  newBtnDel.innerHTML = "Click here to go back"


  document.getElementById("article").appendChild(title);
  document.getElementById("article").appendChild(divi);
  document.getElementById("article").appendChild(para);
  document.getElementById("article").appendChild(codes);
  document.getElementById("article").appendChild(additTxt);
  document.getElementById("article").appendChild(newBtnDel);  
  document.getElementById("article").appendChild(newBtn);

  document.getElementById("nBtn1").style.display = 'none';
  document.getElementById("delbtn1").style.display = 'none';
  


}


function delNewElem2(){
  var title = document.getElementById("title2");
  var divi = document.getElementById("divi2");
  var para = document.getElementById("para2");
  var codes = document.getElementById("codes2");
  var additTxt = document.getElementById("additTxt2");
  var newBtn = document.getElementById("nBtn2");
  var newBtnDel = document.getElementById("delbtn2");
  

  title.parentNode.removeChild(title);
  divi.parentNode.removeChild(divi);
  para.parentNode.removeChild(para);
  codes.parentNode.removeChild(codes);
  additTxt.parentNode.removeChild(additTxt);
  newBtn.parentNode.removeChild(newBtn);
  newBtnDel.parentNode.removeChild(newBtnDel); 
  document.getElementById("nBtn1").style.display = 'block';
  document.getElementById("delbtn1").style.display = 'block';
}


function dispNewElem3(){

  var title = document.createElement("div");
  var divi = document.createElement("div");
  var para = document.createElement("p");
  var codes = document.createElement("p");
  var additTxt = document.createElement("p");
  var newBtn = document.createElement("button");
  var newBtnDel = document.createElement("button");

  title.setAttribute("id", "title3");
  divi.setAttribute("id", "divi3");
  para.setAttribute("id", "para3");
  codes.setAttribute("id", "codes3");
  additTxt.setAttribute("id", "additTxt3");
  newBtn.setAttribute("id", "nBtn3");
  newBtn.setAttribute("onclick","dispNewElem4()");

  newBtnDel.setAttribute("id", "delbtn3");
  newBtnDel.setAttribute("onclick","delNewElem3()");


  title.innerHTML = "<div class='container text-center'><br><h1> DOM Manipulation - insertBefore()</h1>"
  divi.innerHTML = "<p>The Node.insertBefore() method inserts a node before the reference node as a child of a specified parent node. If the given child is a reference to an existing node in the document, insertBefore() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).<br><br>This means that a node can't be in two points of the document simultaneously. So if the node already has a parent, the node is first removed, then inserted at the new position. The Node.cloneNode() can be used to make a copy of the node before appending it under the new parent. Note that the copies made with cloneNode() will not be automatically kept in sync.</p>";
  para.innerHTML = "<p >Example:</p>";
  codes.innerHTML = "<code id='example2'> var list = document.getElementById('items');<br>list.insertBefore(item, list.childNodes[0]);<br><p style='color: green'>This will add an item to an existing unordered list with an id of items</p> </code>";
  additTxt.innerHTML = "<div class='container text-center'><br>This method accepts single parameter child which is mandatory. It represents the node which need to be remove.</div>" 
  newBtn.innerHTML = "Click here to continue"
  newBtnDel.innerHTML = "Click here to go back"


  document.getElementById("article").appendChild(title);
  document.getElementById("article").appendChild(divi);
  document.getElementById("article").appendChild(para);
  document.getElementById("article").appendChild(codes);
  document.getElementById("article").appendChild(additTxt);
  document.getElementById("article").appendChild(newBtnDel);  
  document.getElementById("article").appendChild(newBtn);

  document.getElementById("nBtn2").style.display = 'none';
  document.getElementById("delbtn2").style.display = 'none';
  


}


function delNewElem3(){
  var title = document.getElementById("title3");
  var divi = document.getElementById("divi3");
  var para = document.getElementById("para3");
  var codes = document.getElementById("codes3");
  var additTxt = document.getElementById("additTxt3");
  var newBtn = document.getElementById("nBtn3");
  var newBtnDel = document.getElementById("delbtn3");
  

  title.parentNode.removeChild(title);
  divi.parentNode.removeChild(divi);
  para.parentNode.removeChild(para);
  codes.parentNode.removeChild(codes);
  additTxt.parentNode.removeChild(additTxt);
  newBtn.parentNode.removeChild(newBtn);
  newBtnDel.parentNode.removeChild(newBtnDel); 
  document.getElementById("nBtn2").style.display = 'block';
  document.getElementById("delbtn2").style.display = 'block';
}



function dispNewElem4(){

  var title = document.createElement("div");
  var divi = document.createElement("div");
  var newBtnDel = document.createElement("button");

  title.setAttribute("id", "title4");
  divi.setAttribute("id", "divi4");
  newBtnDel.setAttribute("id", "delbtn4");
  newBtnDel.setAttribute("onclick","delNewElem4()");


  title.innerHTML = "<div class='container text-center'><br><h1> DOM Manipulation - WORKING EXAMPLE</h1>"
  divi.innerHTML = "<p> <p>Add to the list: <input type='text' id='input'><button id='addBtn' onclick='addItemlast()'>insertLast()</button><button id='addBtn' onclick='addItem()'>insertBefore()</button><br><br><ul id='items'></ul></p>";
  newBtnDel.innerHTML = "Click here to go back"


  document.getElementById("article").appendChild(title);
  document.getElementById("article").appendChild(divi);
  document.getElementById("article").appendChild(newBtnDel);

  document.getElementById("nBtn3").style.display = 'none';
  document.getElementById("delbtn3").style.display = 'none';
  


}


function delNewElem4(){
  var title = document.getElementById("title4");
  var divi = document.getElementById("divi4");
  var newBtnDel = document.getElementById("delbtn4");
  
  title.parentNode.removeChild(title);
  divi.parentNode.removeChild(divi);   
  newBtnDel.parentNode.removeChild(newBtnDel); 

  document.getElementById("nBtn3").style.display = 'block';
  document.getElementById("delbtn3").style.display = 'block';
}




function addItem(){
  var item = document.createElement("li");
  var inputText = document.getElementById('input').value;
  if (inputText == "") { item.innerHTML = "Null"; } else { item.innerHTML = inputText; }
  var list = document.getElementById('items');
  list.insertBefore(item, list.childNodes[0]);
}


function addItemlast(){
  var item = document.createElement("li");
  var inputText = document.getElementById('input').value;
  if (inputText == "") { item.innerHTML = "Null";} 
  else { item.innerHTML = inputText; }  document.getElementById("items").appendChild(item);
}












