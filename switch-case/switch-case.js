/**
 * switch case হচ্ছে if else এর faster/advanced version.
 * আমরা যখন if else দিয়ে কোন condition লিখি তখন if else condition কে 
 * মিলানোর জন্য প্রতিটি line এর ভিতরে গিয়ে গিয়ে check করে তারপর condition মিলায়। 
 * কিন্তু আমরা যখন switch case use করি তখন আমাদের যেই condition টি মিলানো প্রয়োজন
 * switch case সরাসরি ঐ line টি exicute করে। প্রতিটি লাইন এ ধুকে ধুকে condition মিলানোর
 * প্রয়োজন হয়না। 
 * এই কারনেই switch case if else এর তুলনায় faster and advanced.
 */
const color = "pink";
if (color=="blue") {
    console.log("you are my blue friend");
}
else if(color=="red"){
    console.log("you are my red friend");
}
else if(color=="yellow"){
    console.log("you are my yellow friend");
}
else if(color=="pink"){
    console.log("you are my pink friend");
}
else{
    console.log("you are not my friend");
    
}


// switch case
const books = "math";
switch (books) {
    case "bangla":
        console.log("my fav sub is bangla");
        break;
    case "english":
        console.log("my fav sub is english");
        break;
    case "math":
        console.log("my fav sub is math");
        break;
    default:
        console.log("i dont like study");
        break;
}



/*traffic rules in switch case =
 red = "you may be in danger "
yellow = "you should stop"
green = "you should cross the road"
*/
const traffic_signal = "green";
switch (traffic_signal) {
    case "red":
        console.log("you may be in danger");
        break;
    case "yellow":
        console.log("you should stop");
        break;
    case "green":
        console.log("you should cross the road");
        break;
    default:
        break;
}