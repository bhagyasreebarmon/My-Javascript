/**
 * write a function called foo() which prints "foo" and a function called bar() which prints "bar"
 * call function bar() inside foo() function after printing. what will be the output?
 * now call the foo() to see the output
 */
function bar() {
    console.log("bar");
}
function foo() {
    console.log("foo");
    bar();
}
foo();

/**
 * write a function called make_avg() which will take an three intigers and returns the avarage of those values
 */
function make_avg(num1, num2, num3) {
    const sum= num1+num2+num3;
    const avarage = sum/3;
    return avarage;
}
const number1 = 20;
const number2 = 40;
const number3 = 80;
const final_avg = make_avg(number1, number2, number3);
const parseint = parseInt(final_avg);
console.log(parseint);


/**
 * write a function called make_ave() which will take an array of intigers and the size of that array and returns the avarage of those values
 */




/**
 * write a function called  odd_even() which takes an intigers and tells wheather this value is even or odd. you need to do it in 4 ways 
 * has return + has parameters
 * no return + has parameters
 */
//1. Has return + Has parameters
function odd_even_with_return(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

// Example usage:
console.log(odd_even_with_return(10));  // Output: Even
console.log(odd_even_with_return(7));   // Output: Odd



// 2. No return + Has parameters
function odd_even_no_return(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Example usage:
odd_even_no_return(10);  // Output: Even
odd_even_no_return(7);   // Output: Odd



//3. Has return + No parameters
function odd_even_with_return_no_param() {
    let num = 8;  // You can replace this with any integer
    return (num % 2 === 0) ? "Even" : "Odd";
}

// Example usage:
console.log(odd_even_with_return_no_param());  // Output: Even (if num = 8)



//4. No return + No parameters
function odd_even_no_return_no_param() {
    let num = 15;  // You can replace this with any integer
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Example usage:
odd_even_no_return_no_param();  // Output: Odd (if num = 15)
