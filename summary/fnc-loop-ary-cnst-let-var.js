var Name = "bhagyasree barmon";
var age = 22;
console.log(Name, age);


/* what is the different between var, let and const 
var = একই variable এর মধ্যে anytime value change করা যাবে। same variable name বার বার use করা যাবে।
let = একই variable এর মধ্যে anytime value change করা যাবে কিন্তু same variable name second time use করা যাবে না।
const = একই variable এর মধ্যে anytime value change করা যাবে না কিন্তু same variable name second time use করাও যাবে না। মানে এটাকে fixed variable
বলা হয়।
*/



// jog biyog gun vag
const num1 = 20;
const num2 = 80;
const jog = num1+num2;
const biyog = num1-num2;
const gun = num1*num2;
const vag = num1/num2;
const vagsesh = num1%num2;
console.log(jog, biyog,gun,vag, vagsesh);

// array
const shopping = ["dress", "cosmetics", "bag", "shoes", "etc"];
//replace the number 2 index value "bag" replace to "nailpolish"
shopping[2] = "nailpolish";
//add first index value
shopping.unshift("sunglass");
//remove first index value
shopping.shift();
//find the number 3 index value
const addShopping = shopping[3];
//pop = last one index value remove kora
shopping.pop();
//push = last one index value add kora
shopping.push("so many things");
//jekono index value er index number check kora
const index_value_check =shopping.indexOf("cosmetics");
console.log(shopping + "\n" + "the number 3 index value is :" + addShopping + "\n" + "cosmetics index value is :" + index_value_check);
//array end

//if else
const number = 520;
if (number>=0 && number<=100) {
    console.log(true);
}
else if (number<=150) {
    console.log(false); 
} 
else{
    console.log("ERROR");
    
}
//if else end

//function 
function shop(params) {
    
}



