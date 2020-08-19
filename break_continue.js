const nums = [31,26,-83,48,-56,26,-247,81,-19];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element<0){
        break;
    }
    console.log('positive numbers are :',element);
}

const nums1 = [31,26,-83,48,-56,26,-247,81,-19];
for (let i = 0; i < nums1.length; i++) {
    const element1 = nums1[i];
    if (element1<0){
        continue;
    }
    console.log('the numbers are :',element1);
}


