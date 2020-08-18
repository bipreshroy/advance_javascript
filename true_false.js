//Falsy value: 0,undefined,null,NaN,"",
//Truthy value:" ","0",any number,any string;

// const num = 0;falsy
// const num = 10;truthy
//const num = null;falsy
//const num = NaN;falsy
//const num = "";falsy
//const num = "Kabila";truthy
//const num = " ";truthy
//const num = [];truthy
//const num = {};truthy
const num = false;
if (num){
    console.log("condition is true.");
}else{
    console.log("condition is false.");
}