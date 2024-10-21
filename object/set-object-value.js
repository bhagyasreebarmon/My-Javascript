/**
 * object value set(extra vabe মান বসানো) করার নিয়ম হচ্ছে object value get এর oposite. একদম simple
 */

var shoppingName = {
    books : 5,   //books, pens, dress, shoe, bag, cosmetic = property/ keys বলা হয়।
    pens : 10,
    dress : 2,
    shoe : '1জোরা',  // 5, 10, 2, '1জোরা', 2, 10 = values বলা হয়।
    bag : 2,
    cosmetic : 10
}
console.log(shoppingName);


/**
 * set property value (property value টা set করা) summary = 
 * ৩ভাবে property value set করা যায়। 
 * ১. object name.property name  = (value set); #তোমার set করা value সেটা যেকোনো কিছু হতে পারে।
 * 2.object name['property name'] = value set;
 * 3.var variable name = 'property name' তারপর
 * object.[variable name] = value set;
 */

//১. set specific property value
shoppingName.bag = 300;
console.log(shoppingName);

//২. set specific property value ( Alternative Way )
shoppingName['bag'] =500;
console.log(shoppingName);

//৩. property name alada variable এ রেখে property value set করা।
var property_name = 'bag';
var set_property_name =shoppingName[property_name];
shoppingName[property_name] = 950;
console.log(property_name + " : ",set_property_name+"\n",shoppingName);



