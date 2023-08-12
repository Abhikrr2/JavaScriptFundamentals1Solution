/*
 You are given with an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.
*/
const arr = [1,2,3,4,"Abhi",45,89,"PW",56];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log(`The First String is : ${arr[i]}`);
        break;
    }
    
}