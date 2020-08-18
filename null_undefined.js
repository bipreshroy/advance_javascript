let number ; //variable number has no value.
console.log(number);
//...............................

function add (num1,num2){
    console.log(num1+num2); //there is no return;
}
const result = add(4,9);
console.log(result);
//..........................

function add (num1,num2){
    return ; //return has no value;
}
const result1 = add(4,9);
console.log(result1);
//...............................

const person ={name:'shohel',age:34,phone:'01712879808'}
console.log(person.fName); //there is no fName element;
//.......................................

const fun = undefined; //undefined is a key word.it is not useable.
console.log(fun);
//..................................
const age = [20,38,94];
console.log(age[5]); //there is only three array element. 