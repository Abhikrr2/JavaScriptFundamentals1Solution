/* You are developin2 a form validation system. Write a pro2ram that takes user information(such as name,
email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages
like "Name should be a strin2," "Email should be a strin2," or "age should be a number." if any field is not
proper. */

let name = "abhi";
let email = "abhi@PeriodicWave.live";
let age = "21";

if (typeof name !== "string") {
    console.log("Name should be a String. ");
} else if (typeof email !== "string") {
    console.log("Email should be a String. ");
}else if (typeof age !== "number") {
    console.log("Age should be a Number. ");
}else {
    console.log("All the field are proper. ");
}