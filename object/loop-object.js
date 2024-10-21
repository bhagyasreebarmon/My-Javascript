
/*
array vs object = array এর মধ্যে property plus value একসাথে বের করা যায়না কিন্তু
object  এর মধ্যে property plus value আলাদা আলাদা ভাবে set করা যায় এবং মানও বের করা যায়।
*/




/**
 * loop এর মাধ্যমে object এর property and value একসাথে বের করা।
 */

var shoppingName = {
    books : 5,   //books, pens, dress, shoe, bag, cosmetic = property/ keys বলা হয়।  [ NOTE : keys কিন্তু একটি array ]
    pens : 10,
    dress : 2,
    shoe : '1জোরা',  // 5, 10, 2, '1জোরা', 2, 10 = values বলা হয়।
    bag : 2,
    cosmetic : 10
}

// property and value একসাথে বের করার নিয়ম ঃ for in loop use করে
//এখন যেই loop use হবে এটাকে for in loop বলা হয়। 
for (var propertyName in shoppingName) {
    const propertyValue = shoppingName[propertyName];
    console.log(propertyName, propertyValue);
}
