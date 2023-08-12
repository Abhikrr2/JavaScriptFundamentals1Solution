/*
Simple discount calculator that takes two values from the variables - the total cost and the
discount percentage - and prints the discounted value.
*/
let totalPrice = 5000;
let discountPercentage = 25;

let discountAmount = discountPercentage / 100 * totalPrice ;//Calculate the discout Amount.
let finalPrice = totalPrice - discountAmount;//Calculate the final price after discount.
console.log("The final Price after discount is :", finalPrice )//Print the final value.