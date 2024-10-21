// loop er moddhe break use korle oi condition ti okhanei break hoye jay mane theme jay
for (let i = 0; i < 20; i++) {
    console.log(i);
    if (i>10) {
      break;  
    }
}

// again
for (let i = 0; i <50; i++) {
    console.log(i);
    if (i>=10) {
      break;  
    }
    
}



// loop er moddhe continue use korle oi condition ti skip kore porer element e jay
for (var i = 0; i <15; i++) {
    console.log(i);
    if (i>=10) {
        continue;
    }
}


// array er moddhe break use
var totalNum = ["bh", "ma", "gh", "kl"];
for (var i = 0; i < totalNum.length; i++) {
    var element = totalNum[i];
    // console.log(i);
    if (element == "gh") {
        break;
    }
    console.log(element);
    
}




// array er moddhe continue use
var totalNum = [30, 50, 60, 70, 75, 80];
for (var i = 0; i < totalNum.length; i++) {
    var element = totalNum[i];
    // console.log(i);
    if (element > 60) {
        continue;
    }
    console.log(element);
    
}