/**Properties are the values inside or assosiated with an object
 * According to the W3 Schools "A JavaScript object is a 
 * collection of unordered properties." and "Properties can usually
 * be changed, added, and deleted, but some are read only."*/


/** As we showed before
 * You can access an object property like this */
objectName.propertyName
objectName["propertyName"]

/**Plus, the W3School website showsa us how to 
 * add and delete properties*/



 /** You already have an object*/
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
  };
  /**And You can add new properties into it afterwards */
  person.nationality = "English";
  /**And finally Delete */
  delete person.age;  







/**Methods allow us to do something to the infromation inside an object */