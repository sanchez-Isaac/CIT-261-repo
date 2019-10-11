/*ES6 Classes, Constructors and Inheritance**/










class Car{
    /**Constructors run when a class is instantiated,
     *  when an object is created*/



constructor (make, type, weight, cost){
    /**A constructor can hold parameters */
    this.make = make;
    this.type = type;
    this.weight = weight;
    this.cost = cost;
    /** Remember the "THIS" Keyword refers to the owner of the function
     * or in this case, the class ---> Car.make, Car.type etc
     */
} 
getName   () { return this.make;  }
getType   () { return this.type;  }
getWeight () { return this.weight;}
getCost   () { return this.cost;  }
}











/**Once the Class is created, we create a new object and 
 * pass the values that the class can hold */
let car = new Car("Honda", "Hatchback", "A lot", "$10,000");
let car2 = new Car("Masserati", "Sedan", "A lot more", "$50,000");
let car3 = new Car("Ferrari", "Sedan", "A lot more", "$100,000");















/** by using ther NEW keyword, we create an instance of the class
 * Car, and create an object of it */





console.log(car.getName() + ", " + car.getType() + ", weight: " + car.getWeight()+ ",  Cost: " + car.getCost());
console.log(car2.getName() + ", " + car2.getType() + ", weight: "  + car2.getWeight()+ ", Cost: " + car2.getCost());
console.log(car3.getName() + ", " + car3.getType() + ", weight: "  + car3.getWeight()+ ", Cost: " + car3.getCost());










/**Inheritance Example */

/**We create a second class adding the Extend keyword 
 * By doing this, this new class becomes a CHILD of the previews class
 * It inherits everithing from the PARENT class.*/
class SuperCar extends Car {

    /**This constructor takes the same values from the PARENT class
     * so it has to be there, but also a new value!*/
    constructor (make, type, weight, cost, comments) {
        /**The super keyword makes the same thing as the THIS keyword
         * This will work on the inheritance class, but the new values need to
         * be set */
        super(make, type, weight, cost);
        /**Setting the new value */
        this.comments = comments;
      }     
      /**Setting the new method */
      getComments () { return this.comments; }
}

    /**This is it! */
    let moreInfo = new SuperCar("Chevy", "Sedan", "A lot more", "$50,000", "This car is super Fast " );
    console.log(moreInfo.getName() + ", " + moreInfo.getType() + ", weight: "  + moreInfo.getWeight()+ ", Cost: " + moreInfo.getCost() + " "+  moreInfo.getComments());

