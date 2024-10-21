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
