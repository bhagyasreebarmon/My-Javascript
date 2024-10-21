//object  
var aboutMe = {
    name:"bhagyasree barmon",
    age:"22 years old",
    height:5.1,
    education: "graduation 2nd year",
    department: "CSE",
    university: "sichuan university of arts and science",
    nationality: "bangladeshi",
    permanentAdress: "Dhaka, BD",
    currentAdress: "china",
    sister: 1
}
console.log(aboutMe);


/**
 * get property value (property value টা বের করা/পাওয়া) summary = 
 * ৩ভাবে property value বের করা যায়। 
 * ১. var name = object name.property name
 * 2.var name = object name['property name']
 * 3.var any name = 'property name' তারপর
 * var যেকোনো name = object[any name]
 */
//১. get specific property value [যখন আমি already জানি যে এই property name টা aboutMe object এর মধ্যে আছে]
var getvalue = aboutMe.age;
console.log(getvalue);
//end

//২. get specific property value ( Alternative Way ) [যখন আমি already জানি যে এই property name টা aboutMe object এর মধ্যে আছে]
var getvalue2 = aboutMe['nationality'];
console.log(getvalue2);
//end

//৩. property name alada variable এ রেখে property value বের করা।
var propertyName = 'currentAdress';
var propertyValue = aboutMe[propertyName];
console.log(propertyName + " : ", propertyValue);
//end



//again object
var shoppingName = {
    books : 5,   //books, pens, dress, shoe, bag, cosmetic = property/ keys বলা হয়।
    pens : 10,
    dress : 2,
    shoe : '1জোরা',  // 5, 10, 2, '1জোরা', 2, 10 = values বলা হয়।
    bag : 2,
    cosmetic : 10
}
//get/print only the property name
var properties = Object.keys(shoppingName);
console.log(properties);
//end



//get/print only the property value name
var propertyValues = Object.values(shoppingName);
console.log(propertyValues);
//end