/*3 ti array thakbe "banana" er index number ber korte hobe. "banana" k remove kore "mango" bosate hobe
 "orange" k remove kore "watermelon" bosate hobe */
// solution here ------
var fruits = ["Apple", "Banana", "Orange"];
var Fruit = fruits.indexOf("Banana")
console.log(Fruit);
fruits[1] = "Mango";
console.log(fruits);
fruits[2] = "Watermelon";


// another way to replace "banana" to "Mango"
/* array er kono element k remove kore tar jaygay onno kono element bosate caile var.splice diye solution korte hoy. 1 er man = koto number
 index e element add hobe next 1 er man = koyti element remove hobe */
var addedFruit = fruits.splice(1,1,"mango");
console.log(addedFruit);
console.log(fruits);
fruits.splice(2, 1, "Watermelon");
console.log(fruits);






/* exam er grade nirnoy :- if else solution
80 er soman ba besi hole A grade
60 er soman ba besi hole B grade
50 er soman ba besi hole C grade  
40 er soman ba besi hole D grade  
39 er soman ba kom hole F grade   
*/

 var amarResult = 85;
 var tomResult = 66;
 var jennyResult = 95 ;
 var peterResult = 56;
 var johnResult = 40;
 var result = 41;
 if (result >= 80) {
    console.log("your grade is A");  
 }
 else if(result >= 60){
    console.log("your grade is B");  
 }
 else if(result >= 50){
    console.log("your grade is C");
    
 }
 else if(result >=40){
    console.log("your grade is D");  
 }
 else if(result <=39){
    console.log("you are fail");  
 }


 /**
  * find the largest number of 3 numbers / if else 
  */
 var num1= 10;
 var num2 = 30;
 var num3 = 80;
 if (num1>=num2 && num1>= num3) {
    console.log("largest number:" + num1);
 }
 else if (num2>= num1 && num2 >= num3) {
    console.log("largest number:" + num2);  
 }
 else{
    console.log("largest number:" + num3); 
 }



/**
 * trivuj er 3ti bahu dewa ache  (bahu1=9; bahu2=8; bahu3=9;) er moddhe jekono duiti bahu soman hole trivuj ti somodibahu/isosceless
 */
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
   console.log("triangle is isosceless");
}
else{
   console.log("triangle is not isosceless");
   
}
 