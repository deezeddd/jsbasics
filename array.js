// const num=[3,4];

// //end
// num.push(5.6);

// //beginning
// num.unshift('a', 2);
// num.unshift(1,2);

// //middle
// num.splice(2,0,'A','B'); (index, , kyD add krna h)
// console.log(num);

//finding elements-> primitives
// const num=[1,2,3,4,1];
// console.log(num.indexOf('1'));
// console.log(num.indexOf(1));

// console.log(num.indexOf(1,2)); //start search from index 2
// console.log(num.lastIndexOf(1));

// console.log(num.indexOf(1)!== -1);
// console.log(num.includes(1));

//finding elements-> objects


// const courses=[
// { id: 1, name:'a'},
// {id: 2, name:'b'},

// ];
// dont use this method
// console.log(courses.includes({ id: 1, name:'a'}, )) //reference type h toh dono alag alag refernce jaise treat hoga and uski wjha se false dikhayega

// const course= courses.find(function(course){
//     return course.name==='a';
// // });
// const course= courses.findIndex(function(course){
//     return course.name==='a'; //index of a is 0
// });
// console.log(course);

///arrow fun

// const course =courses.find(course => course.name==='a');
// console.log(course);


////// removing ele///
// const num=[1,2,3,4];

// //end
// // const last =num.pop();
// // console.log(num);
// // console.log(last);

// //beginning
// // const first =num.shift();
// // console.log(first);

// // //middle
// num.splice(2,1);
// console.log(num);

/////EMPTYING AN ARRAY///

// sol 1=> good until-> this works when num is not pointing to any reference to the array!!!
// let num =[1,2,3,4];
// // let another = num;

// num=[];
// console.log(num);

// sol2 -> good

// let num =[1,2,3,4];
// num.length=0;
// console.log(num);

// // sol3-> not good

// let num =[1,2,3,4];
// num.splice(0,num.length);

// // sol4 ->not good

// while(num.length>0)
// num.pop();

////CONCAT
// const first=[1,2,3];
// // const first=[{id : 1}];
// const sec=[4,5,6]

// const combined= first.concat(sec);
// first[0].id= 10; // refernce typ h obj toh they are copied by their reference!! toh isliye value change ho jayegi

// //SLICE
// const slice = combined.slice(2,4); //2 to 4 slice ho jayegi
// console.log(combined);
// console.log(slice);


////SPREAD OPERATOR -> easy method to combine elemnts
// const first=[1,2,3];
// // // const first=[{id : 1}];
// const sec=[4,5,6];
// const combined =[ ...first,'a', ...sec, 'b']; // can be used to insert ele in between


// // const slice = combined.slice();
// const copy = [...combined]; //used to copy new ele 
// console.log(combined);
// console.log(copy); 



/////ways of iterating arr/////
//i won't use this method
// const nums = [1, 2, 3];
// for (let num in nums)
//     console.log(num);

// // nums.forEach((num, index) => console.log(num, index));
// nums.forEach(num => console.log(num));
//OR//

// nums.forEach(
//     function(num) {
//         console.log(num);
//     });

////////array joining/-> to create string
// const nums = [1, 2, 3];
// const joined = nums.join(',');
// console.log(joined);

// const message = 'this is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-'); // url bnane me help krega
// console.log(combined);


///SORT AN ARRAY///

// const num = [2, 4, 1];
// num.sort();
// console.log(num);

// num.reverse(); //reverse sorting
// console.log(num);

///objs k liye
// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'js' }, //ye lower case h toh node js upr aa rha h cz of ascii value of N<j
//     // { id: 2, name: 'Js' },


// ];
// //toh we will convert both to either lower case or upper case
// courses.sort(function(a, b) {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB) return -1;  //ascii code comparison
//     if (nameA > nameB) return 1;
//     return 0;

// });
// console.log(courses);

///testing ele of an array////
// every()->checks if all ele satisfy the given test
// const num = [1, -1, 3, 4];
// const allPositive = num.every(function(value) {
//     return value >= 0;
// });

// console.log(allPositive);


// const num = [1, -1, 3, 4];
// // const atLeastOnePositive = num.some(value => value >= 0);
// // or//
// const atLeastOnePositive = num.some(function(value) {
//     return value >= 0;
// });
// //pehla element dekh kr hi bta dega fir aage kitne bhi elements ho matter nhi krega
// console.log(atLeastOnePositive);

//filter()-> can be used to check restaurants which are open now
// const number = [1, -1, 3, 4];
// const filtered = number.filter(num => num >= 0); //or normally bhi likh skte h bina arrow funciton k

// console.log(filtered);


//MAPPPPPPPPPP///////
// const number = [1, -1, 3, 4];
//map to strings
// const filtered = number.filter(num => num >= 0); //or normally bhi likh skte h bina arrow funciton k
// const items = filtered.map(num => '<li>' + num + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);//


//map to obj///
// const number = [1, -1, 3, 4];

// const filtered = number.filter(num => num >= 0); //or normally bhi likh skte h bina arrow funciton k

// // const items = filtered.map(num => { value: num }); // this wont work cz compiler will take it as code block
// const items = filtered.map(num => ({ value: num })); // this wont work cz compiler will take it as code block
// // mapping to an obj (or )
// const item = filtered.map(num => {
//     const obj = { value: num };
//     return obj;
// });

// //both filter and map return a new array!!-> so these methods are chainable
// // const html = '<ul>' + items.join('') + '</ul>';
// console.log(items);

// CHAINING//////// -> 
// const number = [1, -1, 3, 4];

// const items =
//     number.filter(num => num >= 0)
//     .map(num => ({ value: num }))
//     .filter(obj => obj.value > 1) // obj of value > 1
//     .map(obj => obj.value); //sb chain ko ek baar remove kr kr k dekh
// console.log(items);

//REDUCING AN ARRAY//////////
// reduce method ka use kro accumulator , currentvalue 

const number = [1, -1, 3, 4];

// const sum = number.reduce((accumulator, currentNumber) => accumulator + currentNumber);
// console.log(sum);
// OLD METHOD /////////
// let sum = 0;
// for (let n of number)
//     sum += n;
// console.log(sum);