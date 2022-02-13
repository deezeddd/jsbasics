// ex1//////

// const numbers = arFrRange(-1, 4);
// console.log(numbers);

// function arFrRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }

// // ex2/////
// const numbs = [1, 2, 3, 4];
// // console.log(numbs.includes(2));

// function includes(array, searchIndex) {
//     for (let key of array) {
//         if (array[key] === searchIndex)
//             return true;
//         return false;

//     }

// }

// console.log(includes(numbs, 5));

// ex3//////// 

// const num = [1, 2, 3, 4, 1, 1, 1];
// const output = except(num, [1]);
// console.log(output);

// function except(array, excluded) {
//     let output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;
// }


// ex4/////
const num = [1, 2, 3, 4];

const output = move(num, 1, 2);

console.log(output);

function move(array, index, offset) {
    // swap
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('invalid')
        return; // none of code aage will run
    }

    let output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}