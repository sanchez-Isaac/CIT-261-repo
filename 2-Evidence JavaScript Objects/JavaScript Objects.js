/** Objects are variables that can contain many values
 * These values are called properties (Objects are mutable)*/

objectName.propertyName
objectName["propertyName"]



/** You can create objects with the "new" keyword.
 * by using the "new" you create an instance of an object
 * we would like to use **/
let person = new Object();





/** This is how you can add info into the Object */
person.name = "Isaac";
person.lastName = "Sanchez";
person.age = 28;
person.weigth = "Very fat";




/** You can display the contents of the object by using the console */
console.log(person);
console.log(person.lastName);
console.log(person.name);





/** You can make objects faster with by using Object literals
 * They look like JSON strings */
let person2 = {
    name : "My brother",
    lastName : "Sanchez",
    age : 27,
    weigth : "Fatter than me 😉"


}



/** There are two ways to access object properties
 * person["firstName"] or person.firstaName */

<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>
<p id="demo2"></p>

<script>
// Create an object:
var person = {
  firstName: "isaac",
  lastName : "sanchez",
  id     :  5566
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
person.firstName + " " + person.lastName;

document.getElementById("demo2").innerHTML =
person["firstName"] + " " + person["lastName"];

</script>

</body>
</html>





/** Objects can also have methods or so called functions */
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>


<p id="demo"></p>
<p id="demo2"></p>

<script>
// Create an object:
var person = {
  firstName: "Isaac",
  lastName : "Sanchez",
  id     : 1111,
  age    : 28,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
   birthday : function() {
        return ++this.age;
      }
};
// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

document.getElementById("demo2").innerHTML = person.birthday();
</script>

</body>
</html>







//METHODS



/** The "THIS" Keyword refers to the owner of the function
 * In this case, The owner would be the object name:
 * 
 * this.fullName() = person.fullName()
 *  */



/**In JavaScript, Methods are actions inside Objects */







/** Remember to call the function with the parenthesis 
 * Else, it will just display the definition of the function */

console.log(person.fullName);
 ƒ () {
    return this.firstName + " " + this.lastName;
  }

console.log(person.fullName());
Isaac Sanchez
console.log(person.age);
28
console.log(person.birthday);
 ƒ () {
        return ++this.age;
      }

console.log(person.birthday());
29
console.log(person.birthday());
30
console.log(person.birthday());
31
console.log(person.birthday());
32
console.log(person.birthday());
33

















/** Primitive values have no properties or methods.
Primitive DataType is data that has a primitive value.*/

String
Number             /** Primitive values are hardcoded */
Boolean            /** They are inmutable */
Null
Undefined



/** Avoid Using them as Objects
 * They slow down execution speeds*/