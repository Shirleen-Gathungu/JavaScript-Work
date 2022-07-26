// 1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// function multiplesOfNumbers(){
    // function multiplesOfNumbers(numbers) {
      
        for(let num=1; num<=100; num++){
           if(num%5===0 && num%3===0){
                console.log("FizzBuzz")
            }
           
            else if (num%3===0){
                console.log("Fizz");
            }
            else if(num%5===0){
                console.log("Buzz");
            }
           
            else{
                console.log(num);
            }
        }
     
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let n =0;
for(let a=0; a<1000; a++){
    if(a%3===0 && a%5===0){
    n+=a
    }
}
console.log(n)

// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even

 for(let num=0; num<=20; num++){
   if (num%2===0){
   console.log((num),("is even"));
   }
   else{
        console.log((num),("is odd"));
  }

 }

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
//  let num = [-2, 4,-5, 6,0]

 let num =[-2, 4,-5, 6,0];

 let large= 0;

 for (let i=0; i<num.length;i++){
 if (num[i]>large) {
    large=num[i]

 }

 }
 console.log(large);
// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function checkLargest(num1,num2){
    if(num1>num2){
    console.log(num1);
    }
    else{
    console.log(num2);
    }
}
checkLargest(59,23);
// Write a JavaScript program to find leap years from 2000 to 2022

for(let year=2000; year<=2022; year++){
if (year%4===0){
    console.log(year);
}
else{

}

}
