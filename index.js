// console.log("hello fuckersss");


// // PRIMITIVE DATA TYPES
// let name= 'vedant'; //string literal
// let age=20; //mumber literal

// let isApproved=true; //boolean literal
// let firstName= undefined;
// let selectedColor = null;

// static and dynamic
// static me apan change nhi kr skte typee par dynamic me kar skte h change
//  string name = 'vedf'; cant be changed
// let name='egfe'; can be changed
// typeof(); is used to check the type

// reference types
// object literal

// let person = {
//     name :'ved',
// age:20
// };
//  we use '; ' at the end of object is because we are  declaring it as a variable



// // dot notation
// person.name='kalpit';

// //bracket notation
// person['name']='mary';

// console.log(person.name);

// ////// ARRAYYYY////////

// let selectedColors= ['red','blue'];
// selectedColors[2]=1;
// //array is dynamic in js and it can
// //  store different data types in a single array 
// // whilst array is object type in js
// console.log(selectedColors);



//  /////////////FUNCTION//////////////
//performing a task
// function greet(name,lastName){
//     console.log("hellow " + name+" " +lastName);
// }
// greet('hina',"xAE-12");//passing argument

//calculating a value
// function square(number){
//     return number*number;
// }


// console.log(square(2)); // 2 calls made cz log is also called then square also

///operators///
// x**y ==== x to the pwr of y
// (x===y) strict equality (type+value)
// (x!==y) not equal;

// loose equality
// (x==y)
// console.log('1'==1);
// // console.log(true=1);

///ternary operator////////

// let points=90;
// let type= points>100?"gold":"silver";
// console.log(type);

/////////LOGICAL AND, OR
// && , ||
// let highIncome=false;
// let goodCreditScore=false;
// let eligibleForLoan = highIncome&&goodCreditScore;
// console.log('eligible',eligibleForLoan);
// // NOT (!)
//     let applicRefused = !eligibleForLoan;
//     console.log("applic refused",applicRefused);


//////// LOGICAL OPERTR WITH NON BOOLEAN ->we can provide default values with this
//falsy(false)
// undefined,null,0,false, '',NaN

// anyth that isnt falsy -> truthy

// false||1||2;
// outpt=1 
// JO PEHLE AAGE AAYEGA WO HI OUTPUT AYEGA IS TYPE ME
// IT IS CALLED SHORT-CIRCUITING



// let userColor ='green';
// let userColor=undefined;
// let defaultColor ='blue';
// let currentColor= userColor ||defaultColor;

// console.log(currentColor);


////////precedence////
// use parathesis to get precedence by yourself

//////exercise
// let a='blue';
// let b='green';
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

///////loooopsss///

// while vs do while
// in do-while the code is executed atleast once


// // for-in loops-> iterate over properties of an *(object)*
// const person={
//     name:'vre',
//     age: 20
// };
// for(let key in person)
// console.log(key,person[key]);

// //dot notation
// //bracket notation

// const colors=['red','green','blue'];

// for (let index in colors)
// console.log(index,colors[index]);


// //for-of loops->  iterate over the elements or itemsd in an aray
// const colors=['red','green','blue'];
// //color will hold value of the iterative xyz
// for(let color of colors)
// console.log(color);


// function maxOfTwo(a,b){
// // if(a>b)
// // return a;
// // // else iski zaroorat nhi pdegi cz a return ho jata h to exit ho jayega wo function se
// // return b;

// return (a>b) ?a:b;
// }

// console.log(maxOfTwo(98,55));


// console.log(isLandscape(300,444));
// function isLandscape(height,width){
//     return(width> height); // isme explicitly true ya false lgane ki zarorat nai h!!!
// }


// exercise 3!!!!!!
// function fizzBuzz(input){
//     if(typeof input !== 'number')
//     return NaN; // super important!!!!!!!!!!!!!!!!!!!!
//     if((input%5==0)&&(input%3==0))
//     return 'FizzBuzz';
//     if(input%3==0)
//     return 'Fizz';
//     if(input%5==0)
//     return 'Buzz';
//     if((input%5!=0)||(input%3!=0))
// return input;


// }
// console.log(fizzBuzz(3));


// exercise 4!!!!!!!!!! firse krna!!!!!!
// checkSpeed(130);
// function checkSpeed(speed){


//         // formula = Math.floor((speed%70)/5);
// if(speed< 75){

// console.log('ok');
// return ;}
// // else{
//     // ab else ki zaroorat nhi pdegi cz return krwa dia h apan ne
// let points= Math.floor((speed-70)/5);
// if(points>=12)
// console.log('license suspended');
// else
// console.log('points', points);
// }


// exerciseeeeee 5
// showNo(10);
// function showNo(limit)
// { let i=0;
//     while(i<limit)
//     {
//         console.log(i+' even');
//         i++;
//         console.log(i+' odd');
//         i++;

//     }
//     console.log(i+' odd');
// }


////////////////////execise 6//////////
// const movie ={
// title:'as',
// releaseY :2022,
// director: 'asd',
// rating:5

// };

// showProp(movie);

// function showProp(obj){
//     for (let t in obj)
//         if(typeof obj[t] == 'string')
//             console.log(t,obj[t]);
//             //noo need of curly braces here cz ek hi line toh h for k andar 


// }

///////////ex 7/////////

// console.log(sum(15));
// function sum(limit){
// let total=0;
// for(let i=0;i<=limit;i++)
// {
//     if((i%3==0) ||(i%5==0))
// total+=i;
// }
// sum=total;
// return sum;

// }


////////ex8/////////

// const marks=[80,80,50];
// let sum=0;
// for( let mark of marks)
// sum+=mark;
// let avg=sum/marks.length;
// console.log(avg);

/////exercise 9//////

// showStars(5);
// function showStars(rows){
//     for(let row=1;row<=rows;row++)
//     {let pattern='';
//     for(let j=0;j< row;j++)
//         pattern+="*";
//     console.log(pattern);
// }
// }

///////exercise 10////
///firse kroo