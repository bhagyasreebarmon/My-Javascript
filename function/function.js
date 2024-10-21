/**
 * What is function? = function মানে হচ্ছে কোন কাজ করা বোঝায়। function এর নাম লিখার নিয়ম পুরো variable লিখার নিয়মের মতই ।
 */

// function declaration অবশ্যই function keyword টি লিখতে হবে তারপর function এর একটা নাম লিখতে হবে তারপর (parameter er nam){}
function bringSingara() {
    console.log("mama singara den");
}
// call the function
bringSingara();





// function parameter= function এর parameter মানে হচ্ছে কোন কাজ করার জন্য () এর মধ্যে একটি parameter er নাম লিখতে হয়। যখন function কে call করা হয় তাখন অবশই function এর নাম এর পর () দিতে হবে এবং () এর মধ্যে সেই parameter এর মান/value  setup করতে হয়/

function chaWala(money) {  /** এখানে money হচ্ছে parameter */
    console.log("mama cha khabo, chaer dam koto?");
    console.log(money);
}
chaWala(10); /** এখানে 10 হচ্ছে money এর value */





//jogfol start
function sum(a, b) {
    var jogfol = a+b;
    console.log(jogfol);
}
sum(2, 3);
// jogfol end



// gunfol start 
function avg(num1, num2){
    var gunfol = num1*num2;
    console.log(gunfol);
}
avg(4, 5);
// gunfol end



// function e variable ke bosano start
function avaragee(c){
    console.log(c);
}
var avgman = 10 ;
avaragee(avgman);
// function e variable ke bosano end



// vagfol start
function avarage(c, d){
    var avgvag = c/d ;
    console.log(avgvag);
}
avarage(10,20);
// vagfol end


// function return 0; start
function getAddNumber(number1, number2) {
    const addNumber = number1+number2;
    const avgNumber = addNumber/2;
    return avgNumber;
}
const setNumber1 = 120;
const setNumber2 = 50;
const finalResult = getAddNumber(setNumber1, setNumber2);
console.log(finalResult);
//function return 0; end



//again function return start  /*ekhane return intsum na korle dui songkha jog kore kono jogfol man asto na mane undifine asto and kono result e astona = function isnot correct. ei karone kono result paowar jonno must be return korte hoy*/
function intNumber(intNumber1, intNumber2) {
    const intSum = intNumber1 + intNumber2;
    return intSum;
}
const setIntResult1 = intNumber(6,4);
const setIntResult2 = intNumber(8,10);
const final_result = intNumber(setIntResult1, setIntResult2);
console.log(final_result);
//again function return end
