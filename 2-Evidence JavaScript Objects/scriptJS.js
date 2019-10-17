var d = new Date();
        document.getElementById("foot").innerHTML = "CIT 261 - Mobile Application Development 2016 - " + d.getFullYear();



var person = { 
    firstName: "Isaac", 
    lastName : "Sanchez", 
    id       : 1111, 
    age      : 28,  
    fullName : function() { 
      return this.firstName + " " + this.lastName; 
    },  
     birthday : function() { 
          return ++this.age; 
        } 
  };




  class Car{
constructor (make, type, weight, cost){
    this.make = make;
    this.type = type;
    this.weight = weight;
    this.cost = cost;
} 
getName   () { return this.make;  }
getType   () { return this.type;  }
getWeight () { return this.weight;}
getCost   () { return this.cost;  }
}

let car = new Car("Honda", "Hatchback", "A lot", "$10,000");
let car2 = new Car("Masserati", "Sedan", "A lot more", "$50,000");
let car3 = new Car("Ferrari", "Sedan", "A lot more", "$100,000");

class SuperCar extends Car {
    constructor (make, type, weight, cost, comments) {
        super(make, type, weight, cost);
        this.comments = comments;
      }     
      getComments () { return this.comments; }
}
let moreInfo = new SuperCar("Chevy", "Sedan", "A lot more", "$50,000", "This car is super Fast " );




function objectFunct(){
person.firstName = document.getElementById("nameToObj").value;
person.lastName = document.getElementById("lastToObj").value;
person.id = document.getElementById("idToObj").value;
person.age = document.getElementById("ageToObj").value;


      document.getElementById("obFunctName").innerHTML = "Your name: <b>" + person.firstName + "</b>";
      document.getElementById("obFunctLast").innerHTML = "Your last name: <b>" + person.lastName+ "</b>";
      document.getElementById("obFunctId").innerHTML = "Your ID: <b>" + person.id+ "</b>";
      document.getElementById("obFunctAge").innerHTML = "Your age is: <b>" + person.age+ "</b>";
      document.getElementById("obFunctFunctFull").innerHTML = "Your fullname is: <b>" + person.fullName() + "</b>";
      document.getElementById("obFunctFunctBirth").innerHTML = "Next year you will be: <b>" + person.birthday() + "</b> years old.";
      
}

function addInCar(){   
    var makeVar = document.getElementById("makeIn").value;
    var typeVar = document.getElementById("typeIn").value;
    var weightVar = document.getElementById("weightIn").value;
    var costVar = document.getElementById("costIn").value;
    var commentVar = document.getElementById("commentIn").value;

    var obIn = new SuperCar(makeVar, typeVar, weightVar, costVar , commentVar );
    console.log(obIn.getName() + ", " + obIn.getType() + ", obIn: "  + obIn.getWeight()+ ", Cost: " + obIn.getCost() + " "+  obIn.getComments());

    document.getElementById("makeInP").innerHTML = "Your Car make is: <b>" + obIn.getName() + "</b> it's a great car!";
    document.getElementById("typeInP").innerHTML = "Your Car is a: <b>" + obIn.getType() + "</b>";
    document.getElementById("weightInP").innerHTML = "Your Car weights: <b>" + obIn.getWeight() + "</b>";
    document.getElementById("costInP").innerHTML = "Your Car vale is: <b>" + obIn.getCost() + "</b><br>";
    document.getElementById("commentInP").innerHTML = "Your opinion about the car: <b>" + obIn.getComments() + "</b>";

    

}