// 1- Write a program that allow to user enter number then printit

// var input = window.Number(prompt("enter a number"))
// console.log(input)


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var num = Number(window.prompt("Enter a number")) 
// if (num%3 == 0 && num%4 == 0) {
//     console.log("yes")
// }
// else {
//     console.log("no")
// }


// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 = Number(window.prompt("enter the 1st number"))
// var num2 = Number(window.prompt("enter the 2nd number"))
// if (num1 > num2) {
//     console.log(num1)
// }
// else {
//     console.log(num2)
// }


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var num = Number(window.prompt("Enter a number")) 
// if (num < 0) {
//     console.log("negative")
// }
// else {
//     console.log("positive")
// }


// 5- Write a program that take 3 integers from user then print the max element and the min element.

// var num1 = Number(window.prompt("enter the 1st number"))
// var num2 = Number(window.prompt("enter the 2nd number"))
// var num3 = Number(window.prompt("enter the 3rd number"))
// if (num1 > num2 && num1 > num3) {
//     console.log(num1)
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2)
// }
// else {
//     console.log(num3)
// }


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var num = Number(window.prompt("enter a number"))
// if (num%2 == 0) {
//     console.log("even number")
// }
// else {
//     console.log("odd number")
// }


// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char = window.prompt("enter a char")
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
//     console.log("vowel")
// }
// else {
//     console.log("consonant")
// }


// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var num = Number(window.prompt("enter a number"))
// for(var i = 1 ; i <= num ; i++) {
//     console.log(i)
// }


// 10- Write a program that allows user to insert integer then print a multiplication table up to 12

// var num = Number(window.prompt("enter a number"))
// for(var i = 1 ; i <= 12 ; i++) {
//     console.log(num * i)
// }


// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var num = Number(window.prompt("enter a number"))
// for(var i = 1 ; i <= num ; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// } 


// 12- Write a program that take two integers then print the power

// var num1 = Number(window.prompt("enter the 1st number"))
// var num2 = Number(window.prompt("enter the 2nd number"))
// var result = num1 ** num2
// console.log(result)


// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var sub1 = Number(window.prompt("enter the mark"))
// var sub2 = Number(window.prompt("enter the mark"))
// var sub3 = Number(window.prompt("enter the mark"))
// var sub4 = Number(window.prompt("enter the mark"))
// var sub5 = Number(window.prompt("enter the mark"))
// var total = sub1 + sub2 + sub3 + sub4 + sub5
// var average = total / 5
// var percentage = (total / 500) * 100
// console.log(total)
// console.log(average)
// console.log(percentage + "%")


// 13- Write a program to input month number and print number of days in that month.

// var month = Number(window.prompt("enter the month number"))
// if (month == 1) {
//     console.log("Days in month: 31")
// }
// else if (month == 2) {
//     console.log("Days in month: 28")
// }
// else if (month == 3) {
//     console.log("Days in month: 31")
// }
// else if (month == 4) {
//     console.log("Days in month: 30")
// }
// else if (month == 5) {
//     console.log("Days in month: 30")
// }
// else if (month == 6) {
//     console.log("Days in month: 30")
// }
// else if (month == 7) {
//     console.log("Days in month: 31")
// }
// else if (month == 8) {
//     console.log("Days in month: 31")
// }
// else if (month == 9) {
//     console.log("Days in month: 30")
// }
// else if (month == 10) {
//     console.log("Days in month: 31")
// }
// else if (month == 11) {
//     console.log("Days in month: 30")
// }
// else if (month == 12) {
//     console.log("Days in month: 31")
// }
// else {
//     console.log("please enter a number in range")
// }


// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// var Physics = Number(window.prompt("enter the mark"))
// var Chemistry = Number(window.prompt("enter the mark"))
// var Biology = Number(window.prompt("enter the mark"))
// var Mathematics = Number(window.prompt("enter the mark"))
// var Computer = Number(window.prompt("enter the mark"))
// var total = Physics + Chemistry + Biology + Mathematics + Computer
// var average = total / 5
// var percentage = (total / 500) * 100
// console.log(percentage + "%")
// if (average >= 90) {
//     console.log("Grade A")
// }
// else if(average >= 80 && average < 90) {
//     console.log("Grade B")
// }
// else if(average >= 70 && average < 80) {
//     console.log("Grade C")
// }
// else if(average >= 60 && average < 70) {
//     console.log("Grade D")
// }
// else if(average >= 40 && average < 60) {
//     console.log("Grade E")
// }
// else {
//     console.log("Grade F")
// }


// 15- Write a program to print total number of days in month 

// var month = Number(window.prompt("enter the month number"))
// switch (month) {
//     case 1 :
//         console.log("Days in Month: 31")
//         break

//     case 2 :
//         console.log("Days in Month: 28")
//         break

//     case 3 :
//         console.log("Days in Month: 31")
//         break

//     case 4 :
//         console.log("Days in Month: 30")
//         break

//     case 5 :
//         console.log("Days in Month: 31")
//         break

//     case 6 :
//         console.log("Days in Month: 30")
//         break

//     case 7 :
//         console.log("Days in Month: 31")
//         break

//     case 8 :
//         console.log("Days in Month: 31")
//         break

//     case 9 :
//         console.log("Days in Month: 30")
//         break

//     case 10 :
//         console.log("Days in Month: 31")
//         break

//     case 11 :
//         console.log("Days in Month: 30")
//         break

//     case 12 :
//         console.log("Days in Month: 31")
//         break

//     default:
//         console.log("please enter a number in range")
// }


// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("enter a char")
// switch (char) {
//     case 'a':
//         console.log("vowel")
//         break
    
//     case 'e':
//         console.log("vowel")
//         break

//     case 'i':
//         console.log("vowel")
//         break

//     case 'o':
//         console.log("vowel")
//         break

//     case 'u':
//         console.log("vowel")
//         break

//     case 'A':
//         console.log("vowel")
//         break

//     case 'E':
//         console.log("vowel")
//         break

//     case 'I':
//         console.log("vowel")
//         break

//     case 'O':
//         console.log("vowel")
//         break

//     case 'U':
//         console.log("vowel")
//         break

//     default :
//         console.log("consonant")
// }


// 17- Write a program to find maximum between two numbers

// var num1 = Number(window.prompt("enter the 1st number"))
// var num2 = Number(window.prompt("enter the 2nd number"))
// switch (true) {
//     case (num1 > num2):
//         console.log(num1)
//         break

//     case (num2 > num1):
//         console.log(num2)
//         break

//     default :
//         console.log("equal numbers")
// }


// 18- Write a program to check whether a number is even or odd

// var num = Number(window.prompt("enter a number"))
// switch (true) {
//     case (num % 2 == 0) :
//         console.log("even number")
//         break
    
//     case (num % 2 != 0) :
//         console.log("odd number")
//         break
    
//     default :
//         console.log("invalid number")
// } 


// 19- Write a program to check whether a number is positive or negative or zero

// var num = Number(window.prompt("enter a number"))
// switch (true) {
//     case (num > 0) :
//         console.log("positive")
//         break

//     case (num < 0) :
//         console.log("negative")
//         break

//     default :
//         console.log("zero")
// }


// 20- Write a program to create Simple Calculator

var num1 = Number(window.prompt("enter the 1st number"))
var num2 = Number(window.prompt("enter the 2nd number"))
var operator = window.prompt("enter the operator")
var result
switch (operator) {
    case '+' :
        result = num1 + num2
        console.log(result)
        break

    case '-' :
        result = num1 - num2
        console.log(result)
        break

    case '*' :
        result = num1 * num2
        console.log(result)
        break

    case '/' :
        result = num1 / num2
        console.log(result)
        break

    case '%' :
        result = num1 % num2
        console.log(result)
        break
    
    default :
        console.log("invalid operator, please enter operator again")
}


