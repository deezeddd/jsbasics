// //function declaration ->can be called before declaring the function
// walk();
// function walk(){
//     console.log('walk');
// }
// **********hoisting->is the proccess of moving fun declaration at topp of the file done automatically by the compiler


// // anonymus function expression->cannot be called before declaring the function


// run(); will show error
// const run=function(){ //run is set to refer this function
// console.log('run');
// };
// const move=run;
// run();
// move();


// // named function expression/////////

// const run=function walk(){
// console.log('run');
// };

///////////////////ARGUMENTS>........
// function sum(a,b){
//     return a+b; //1+ undefined == NaN result milega
// }

// console.log(sum(1));

// arguments is a keyword////
// function sum() {
//     let total = 0;
//     for (let value of arguments)
//     // for of loop can be used on any Object that has an iterator
//         total += value;

//     console.log(arguments);
//     return total;

// }

// console.log(sum(1, 2, 3, 4, 5));

// the rest operatorrrrr ///// 
// function sum(...args) { //args is an array
//     // console.log(args);
//     return args.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3, 4, 5));

/// we cant have a parameter after rest operator
//this is the reason we call it rest operator
function sum(discount, ...prices, some) {
    // console.log(args);
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);

}

console.log(sum(0.1, 20, 30));