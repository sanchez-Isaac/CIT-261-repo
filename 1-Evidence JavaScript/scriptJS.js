var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();

var array = {};
var tableArr = document.getElementById("arrayExampTable");
var leng = 0;

var credit = "$23,556.00";
var SSN = "You are very curious, I'm calling the FBI"


function multiply(){

     var mmultiNumb = document.getElementById("multiNumb").value;
     var table = document.getElementById("multiTables");
     table.innerHTML = "";

   
     tableArr.innerHTML = "";

     for(j = 1; j <= 10; j++)     
     {
        var row = table.insertRow(table.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        


        var rowArray = tableArr.insertRow(tableArr.length);
        var cell1Arr = rowArray.insertCell(0);
     
         
        
        cell1.innerHTML = mmultiNumb +" x "+ j + " =";
        cell2.innerHTML = j * mmultiNumb;


        array[j] = j * mmultiNumb;
        cell1Arr.innerHTML = array[j];
        leng = leng+1;

    
        console.log(array[j]);


     } document.getElementById("multiplication").innerHTML = mmultiNumb + " Results";
     
        }





function condition(){
    var conditionComp1 = document.getElementById("condition1").value;
    var conditionComp2 = document.getElementById("condition2").value;

    if (conditionComp1 < conditionComp2){
        document.getElementById("conditionRes").innerHTML = conditionComp1 + " is less than " + conditionComp2;
    }
        else if (conditionComp1 == conditionComp2){
            document.getElementById("conditionRes").innerHTML = conditionComp1 + " is equal " + conditionComp2;
        }
        else if (conditionComp1 > conditionComp2){
            document.getElementById("conditionRes").innerHTML = conditionComp1 + " is more than " + conditionComp2;
        }  
}


function arrayAdd(){

    

   arrayaddVal = document.getElementById("addArrayValues").value;

   var rowArray = tableArr.insertRow(tableArr.length);
   var cell1Arr = rowArray.insertCell(0);

   array[leng++] = arrayaddVal;
   cell1Arr.innerHTML = array[leng-1];
}


