function stopwatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const watch = stopwatch();
console.log(watch);
console.log(stopwatch());
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());