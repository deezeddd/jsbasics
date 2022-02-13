// ex1/////

// function showAddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// let address= {
//     street:'kastruba',
// city:`ratlam`,
// zip:457001
// };
// // console.log(address);
// showAddress(address); //call bhi to krna pdta h saaleee

//ex 2
// factory function
// function createAdd(street,city,zip){
//   return{  street,
//     city,
//     zip
//   };
// }
// const add1=createAdd('kas','tur','basd');
// console.log(add1);

//constructor function

// function CreateAdd(street,city,zip){
// this.street=street;
// this.city=city;
// this.zip=zip;

// }
// let add1=new CreateAdd('kas','tur','basd'); /// newwwwwwww is important
// console.log(add1);


//  ex 3//////


// function CreateAdd(street,city,zip){
// this.street=street;
// this.city=city;
// this.zip=zip;

// }
// let add1=new CreateAdd('kas','tur','basd'); /// newwwwwwww is important
// let add2=new CreateAdd('kas','tur','basd'); /// newwwwwwww is important
// let add3= add1;
// // console.log(add1);
// function areEqual(add1,add2){
//     return add1.street===add2.street&&
//      add1.city===add2.city&&
// add1.zip===add2.zip;

// }
// function areSame(add1,add2){
//     return add1===add2;
// }
// console.log(areEqual(add1,add2));
// console.log(areSame(add1,add2)); //same nhi h to false show krega
// console.log(areSame(add1,add3)); 

// ex4//////


// const post ={

// title: 'a',body:'sda',
// author:'asdas',
// views:234,
// comments:[ {author: 'ss', body:'d'},
// {author: 'sfdss', body:'as'}
// ],
// isLive: true
// };
// console.log(post);

// /ex5//////


// const post ={

//     title: 'a',body:'sda',
//     author:'asdas',
//     views:234,
//     comments:[ {author: 'ss', body:'d'},
//     {author: 'sfdss', body:'as'}
//     ],
//     isLive: true
//     };
// console.log(post);

    // function Post(title,body,author){
    // this.body=body;
    // this.title=title;
    // this.author=author;
    // this.views=0;
    // this.comments=[];
    // this.isLive=false;
    // }

    // let book=new Post('asd','dasa','asdasd');
    // console.log(book);


    
    //////ex 6//////
let priceRanges =[
{label:'$', tooltip:'i', minPerPerson:0,maxPerPerson:10},
{label:'$', tooltip:'i', minPerPerson:11,maxPerPerson:20},
{label:'$', tooltip:'i', minPerPerson:21,maxPerPerson:50}

];
let restaurants=[ avgPerPerson=6];