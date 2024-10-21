//  বেসিক জাভাস্ক্রিপ্ট (ভেরিয়েবল, এরে, কন্ডিশন, লুপ) এর চেকলিস্ট।  summary of variable, operator, conditionals, if-else, array, for loop, while loop


// 1. javascript ki? -- javascript hocche ekti script language 


/* 2. variable er dhoron ---
String 
Number
Bigint
Boolean
Undefined
Null
Symbol
Object
*/



//  3.            primitive and non primitive data types in javascript


 /* 1. Primitive Data Types : Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. JavaScript supports the following primitive data types:
 * 1.1 Number: var num = 10;
 * 1.2 string: var name = "bhagyasree";
 * 1.3 Undefined: var x;
 * 1.4 Boolean: var boolIs = true;
 * 1.5 Null: var x = null;
 * 
 * 2. Non-primitive Data Types : Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. The two key non-primitive data types in JavaScript are:
2.1 Object:
2.2 Array: var fruits = ["apple", "mango", "orange", "watermelon"]
 * 
 */




// 4.ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
/**
 * #surute number diye likha jabena
 * #surute - diye likha jabena
 * #surute letter diye likha jabe. jemon: first
 * #letter diye suru korle letter er seshe number use kora jabe. jemon: fruits11
 * #camelcase e lekha jabe. jemon: allFruits
 * #pascle case e lekha jabe. jemon: Allfruits
 * #variable er majkhane under _ diye lekha jabe. jemon: all_fruits
 */



// 5.  দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
var num1 = 10;
var num2 = 20;
var jogfol = num1 + num2;
var biyogfol = num1 - num2;
var gunfol = num1 * num2;
var vagfol = num1 / num2;
var vagsesh = num1 % num2;
console.log(jogfol, biyogfol,  gunfol, vagfol, vagsesh);


// শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
var a = 5;
var b = 25;
a = a+7; /** ekhane shortcut hocche a+=7; */
a = a-b; /** ekhane shortcut hocche a-=b; */
a = a*4; /** ekhane shortcut hocche a*=4; */
b = b/a; /** ekhane shortcut hocche a/=a; */



// ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
var ab = 10;
ab++; /** ek ek kore number barte thakbe. eti muloto loop e use hoy */
ab--; /** ek ek kore number barte thakbe. eti muloto loop e use hoy */


// parseInt, parseFloat, toFixed এইগুলা কি করে? 
var number = "100"; /** "100" eti ekti string eke number e rupantor korar jonno parseInt use korte hoytahole string ti number e rupantor hoye jabe note: string must be kono na kono number hote hobe taholei parseInt use kore number e convert hobe. string er vitor kono adress ba karo nam dewa thakle segulo number e convert hobena kokhonoi */
var changeInt = parseInt(number);
console.log(changeInt);

var fNumber1 = 0.1;
var fNumber2 = 0.2;
var fJogfol = fNumber1 + fNumber2;
var fJogfol = fJogfol.toFixed(1);
var fJogfol = parseFloat(fJogfol); /* to fixed korle sei variable er man string hoye jay. must be parsefloat diye float kore nite hobe */
console.log(fJogfol);




// Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
var bookName = ["bangla", "math", "english", "physics"];


// array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
var bookName = ["bangla", "math", "english", "physics"];
console.log(bookName);
console.log(bookName.length);



// array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। (position 0 theke start hoy)
var booksName = ["bangla", "math", "english", "physics", "biology"];
var bookName = booksName.indexOf("bangla"); /* output hobe 0 */
console.log(bookName);
var bookName = booksName.indexOf("math"); /* output hobe 1 */
console.log(bookName);
var bookName = booksName.indexOf("english"); /* output hobe 2 */
console.log(bookName);
var bookName = booksName.indexOf("physics"); /* output hobe 3 */
console.log(bookName);
var bookName = booksName.indexOf("biology"); /* output hobe 4 */
console.log(bookName);


// কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় : er mane sei index er element array er moddhe nei



// index number bosiye array er element ber kora/output kora
var booksNamee = ["bangla", "math", "english", "physics", "biology"];
var booksNamee = booksNamee[2];
console.log(booksNamee);


// কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
var booksNamee1 = ["bangla", "math", "english", "physics", "biology"];
booksNamee1[2] = "english er bodole chemistry add";
console.log(booksNamee1);


// . কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। 
var booksNameAll = ["bangla", "math", "english", "physics", "biology"];
var booksName2 = booksNameAll.push("ICT");
console.log(booksNameAll);


// আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
var booksNameAll = ["bangla", "math", "english", "physics", "biology"];
var booksName3 = booksNameAll.pop();
console.log(booksNameAll);


// কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। 
var countrysName = ["bangladesh", "america", "australia",];
var countryName = countrysName.unshift("china");
console.log(countrysName);


// আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
var countrysName1 = ["bangladesh", "america", "australia",];
var cntryName = countrysName1.shift();
console.log(countrysName1);


// আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
for (var i = 1; i <= 39; i++) {
    console.log("ajke amar mon valo nei");   
}


// তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
var A = 6;
var B = 4;
if (A>B) {
    console.log(A);
}
var c = 2;
var d = 4;
if (c<d) {
    console.log(d);
}
var namee = "lili";
if (namee == "lili") {
    console.log("ji etai amar nam");
}
var namee = "lilima";
if (namee != "lili") {
    console.log("ji, eta amar nam na");
}

var E = 30;
if (E<=100) {
    console.log("condition right");
}
var E = 300;
if (E>=100) {
    console.log("condition wrong");
}
var dui = 10;
var tin = "ami";
if (dui == 10 && tin == "ami") {
    console.log("sorto sotto");
}

var dui = 20;
var tin = "tumi";
var four = true;
if (dui == 20 && tin == "ami" || four == true) {
    console.log("sorto sotto");
}
else{
    console.log("sorto mittha");
}


// একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
for (var i = 58; i <= 98; i++) {
    console.log(i);
}



// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
for (let i = 412; i <= 456; i+=2) {
    console.log(i);
}



// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
for (let i = 581; i <= 623; i+=2) {
    console.log(i); 
}



// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
var sobPractise = ["variable", "operators", "array", "loop", "if else"];
for (var i = 0; i < sobPractise.length; i++) {
    var allPractise = sobPractise[i];
    console.log(allPractise);
}



// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
for (let i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}



// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var boiPrice = [300, 80, 100, 150, 200, 250, 350, 120 ];
for ( i =0; i < boiPrice.length; i++) {
    var booiCost = boiPrice[i];
    if (booiCost>200) {
        continue;
    }
    console.log(booiCost);
    
}

const naame="my name is bhagyasree barmon";
var naout = naame.includes('is') /** output =  true */
console.log(naout);
var bnout = naame.includes('barmon') /** output =  true */
console.log(bnout);
var subnaame = naame.substring(0,10) /** output =  'my name is' */
console.log(subnaame);
var subname2 = naame.substring(1,20) /** output =  'y name is bhagyasre' */
console.log(subname2);

// kono array k slice korle first man koto index number theke suru hobe and last man koto index number er ag porjonto dekhabe
const numbeer =[10, 20, 30,40,50,60,70, 80];
const nout = numbeer.slice(1,5);
console.log(nout); /** output = [20, 30, 40, 50] */









