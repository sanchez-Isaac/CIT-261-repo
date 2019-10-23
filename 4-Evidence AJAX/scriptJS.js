var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();


        var txt = '{"name":"Isaac", "age":28, "city":"Mexico City", "height":"1.79","weight":"75Kg","major":"Software Engineering"}'
        var obj = JSON.parse(txt);


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