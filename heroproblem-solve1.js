
// ma diyeche 1000 taka. orange and apple kinte khoroch hoyeche 300 and 400 taka tahole ma koto taka ferot pabe?
// solution here ----
var maDiyeche = 1000;
var appleCost = 300;
var orangeCost = 400;
var totalCost = appleCost + orangeCost;
var maPabe = maDiyeche - totalCost;
// console.log(maPabe);

// math e 75.25 biology te 65.80 , chemistry = 80 , physics = 35.45 , bangla = 99.50 marks pele total avarage koto and sei result k decimal(dui ghor porjonto) e prokash korle koto hobe?
// solution here -----
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMark = math + biology + chemistry + physics + bangla;
var avarageMark = totalMark / 5 ;
avarageMark = avarageMark.toFixed(2);
avarageMark = parseFloat(avarageMark);
console.log(avarageMark);

// string concatenation
var first1 = "I am going to be"
var second1 = "an awesome web developer"
console.log(first1 + ' '+ second1);

// sarar ma take 119 taka diyeche. etake 5 diye vag korle vagsesh koto thake?
// solution here-----
var mother_give = 119;
var vagSongkha = 5;
var vagSesh = 119 % 5;
console.log(vagSesh);



