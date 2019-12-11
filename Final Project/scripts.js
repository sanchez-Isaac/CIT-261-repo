/**This is the file we are going to work with*/


function requestJSON(){

    var xhttp = new XMLHttpRequest();    
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
      else
      document.getElementById("demo").innerHTML = "Error retreiving the file";
    };
    xhttp.open("GET", "file.txt", true);
    xhttp.send();
  }

