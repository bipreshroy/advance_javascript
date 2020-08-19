const num = [5,6,7,8,9,10,3,4,2,1];
// const part = num.slice(2,5);
// console.log(part);
// console.log('after slice main array:',num);

// const remove = num.splice(2,5);
// console.log(remove);
// console.log('after splice main array:',num);

const remove1 = num.splice(2,3,44,33,55);
console.log(remove1);
console.log('after splice and inject in main array:',num);

const joinNum = num.join("");
const joinNum1 = num.join(" ");
const joinNum2 = num.join(",");
console.log(joinNum);
console.log(joinNum1);
console.log(joinNum2);
