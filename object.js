// // Object-oriented- programming
// in this we try to solve problems using objects rather than orthodox style

// const circle= {
// radius : 1,
// location: {
//     x:1,
//     y:1
// },
// isvisible: true,
//draw(){} is also a wayy
// ~// draw : function(){
// console.log('draw');
// }

// };

// circle.draw(); //method

// function inside object is called method


//FACTORY FUNCTION'
// it is used when we wanna create more 
// than one circles(example) but some properties will remain
// same so its very useful at these kind of places
// camel notation is used in factory function


// function createCricle(radius){
// return {
//           radius,      //equivalent to ->radius :radius same name wale me chlta h aisa
//         draw()
//         {
//             console.log('draw');
//         }
//     };
// }
// const circle1 = createCricle(1);
// console.log(circle1);
// const circle2 = createCricle(2);
// console.log(circle2);



// CONSTRUCTOR FUNCTION -> PASCAL NOTATION IS USED


// function Circle(radius){
// this.radius=radius;
// this.draw =function(){
//     console.log('draw');
// }
// // return this; it will happen under the hood
// }
// const circle = *new* Circle(1); * aise hi h ////new keyword is impp
// console.log(circle);



// // const x={}; // this is happening because of new keyword
//1 it makes empty js object under the hood
//2 it will set 'this' to point to this empty object
// 3 it will return the object from the function



//DYNAMIC NATURE

// const circle={
//     radius:1
// };

// circle.color='yelllow';
// circle.draw = function(){};
// delete circle.color;

// console.log(circle);

//CONSTRUCTOR PROPERTY
// every obj in js has constructor property



// in js functions are objects



//primitives(value types)->string boolean, number etc are copied by their value 
//ref types->obj fun array\\objects are copied by their reference

// let num= 10;
// function increment(num){
//     num++; //completely independent

// }
// increment(num);
// console.log(num);




// let num= {value: 10};
// function increment(num){
//     num.value++;

// }
// increment(num);
// console.log(num.value);


//enumerating properties of object

// const circle={
//     radius:1,
// draw(){
//     console.log('draw');
// }
// }; 
//ways of enumerating 
//simplest way is this
// for(let key in circle)
// console.log(key, circle[key]);


//way2-> keys
// for(let key of circle)
// console.log(key); // get error cz its not iterable
// for(let key of Object.keys(circle)) //neeche iska btaya h
// console.log(key);  
// ye ho rha h andrr

// function Object(){}
// const x= { value :1};
// const x = new Object();


//way3->entries
// for(let entry of Object.entries(circle)) 
// console.log(entry);  


//to check if we have prtcular prprty or method 
// if('radius' in circle) console.log('yes');


///////CLONING OF AN OBJECT/////
// const circle={
//     radius:1,
// draw(){
//     console.log('draw');
// }
// }; 
//way 1
// const another ={};
// for(let key in circle){
//     another[key]=circle[key];
// }
// console.log(another);

//way 2
// using Object.assign(can be empty operator, jisse copy krna h wo);
//can be used to combine multiple methods 
// const another = Object.assign({},circle);
// const another = Object.assign({color:'yell'},circle);
// console.log(another);

//way 3 using spread operator

// const another={ ...circle};
// console.log(another);


//in js we dont hve to worry about garbage collection unlike c++

//strings
// const message ="hi";
// message.length
// console.log(typeof(another));
// primitive hoti h na string toh.. fir kaise properties show ho rhi h 
// toh js automatically string ko bhi object jaise properties show krta h

//we can create object of string anyway
// const another = new Object("hi");
// console.log(typeof(another));  // it will be object



// String.-> TEMPLATE LITERALS
// VERY USEFUL

// `` BACKTICKS IS USED instead of '' single or double quote 

// const msg=`hello 'fuckcers' `;
// console.log(msg);


// const msg= 
// ` hi john,

// how are ya??
// `
// console.log(msg); 
// using template we can eliminate the \n and jo bhi faltu chize use krni pdti h quotes use krke


// ${} use krke we can dynamically enter the *naame or anything//depreceated
//  const naame=`ved`;
// const msg= 
// ` hi ${naame} ${2+3},

// how are ya??
// `
// console.log(msg);