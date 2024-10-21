// array declare kore tar sobgulo element loop er maddhome dekhano
var numbers = ["pen", "nootbook", "bottle", "umbrella", "book", "pencil"];
/* ekhane variable.length dewar karon hocche array er moddhe joto element add hote thakbe tar jonno loop er condition change korte hobena
array jotoi barte thakuk tar length er karone sobgulo element output hobe
*/
for (var i = 0; i < numbers.length; i++) {
    /** ekhane numbers[i] howar subidha hocche i er man 0 theke suru hoyeche and array er index man 0 theke suru hoy 
     * sei karone array er moddhe i k dhukiye diye i = 0 then 0 er element "pen" evabe  ek ek kore number barte thakbe and element 
     * output hote thakbe
     */
    var element = numbers[i];
    console.log(element);  
}