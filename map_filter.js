const numbers = [2,3,4,5,6];
const output =[];
for (let i=0;i<numbers.length;i++){
    const element =numbers[i];
    const square = element * element;
    output.push(square);
}
console.log(output);
//..............................................

// using map ..............
const numbers1 = [2,3,4,5,6];
const square1 = numbers1.map(function(element){
    return element*element;
})
console.log(square1);
//........................................
//map using arrow function.....
const numbers2 = [20,30,40,50,60];
const square2 = numbers2.map(element=>element*element)
console.log(square2);

const numbers3 = [9,8,7,6,5];
const square3 = numbers3.map(x => x * x );
console.log(square3);
//.........................................

//Using filter.....................
const numbers4 = [9,8,7,6,5];
const smallerNumber = numbers4.filter(x => x <8 );
console.log('The smaller numbers are:',smallerNumber);
const isFind = numbers4.find(x => x > 6);
console.log('the result is :',isFind);//find declare only first element.



// const num = [2,3,4];
// num.map(function(element,index,array){
//     console.log(element,index,array);
// })
