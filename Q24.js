// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var string1 = "January";
var string2 = "February";
console.log(string1 === string2);
console.log(string1 !== string2);
// • Tests using the lower case function
var mixedCaseString = "Red Rose";
console.log(mixedCaseString.toLowerCase() === "red rose");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 30;
var num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
var a = 60;
console.log(a > 50 && a < 20);
console.log(a > 50 || a < 20);
// • Test whether an item is in a array
var num = [2, 4, 6, 8];
console.log(num.includes(2));
// • Test whether an item is not in a array
var nums = [2, 4, 6, 8];
console.log(nums.includes(10));
