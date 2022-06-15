// // Functions in JS
// // Function declaration  // hoisting will work only in function declaration
// // arrow function
// // function expression

// function greet(){
//     console.log("Hello Word!!!")
// }

// //invoke call
// greet();// invoke can be written at the top of the code before function declaration itself, because of hoisting

// // pure and impure functions
// // what are the side effects?
// // the above function prints something to the screen and it is affecting the outer world => called impure function

// function sum(a,b){
//     return a+b;
// }
// sum(2,3)//here nothing prints to the screen and not affecting the outer world, so it is called pure function

// function pushItem(arr){
//     arr.push("newItem")
// }
// let arr = [];
// pushItem(arr)  // this is a impure function
// // so to make a pure function
// function addItem(arr){
//     return [...arr,"New Item"]
// }
// let numbers = [1,2,3]
// addItem(numbers) // this is a pure function

// //function expression
// // assigning function as a value to a varaible is called funciton expression
// let sayHello = function(){
//     console.log("Heloo...")
// };
// sayHello();// here hoisting doesn't work.  so in function expression the function is called after the functions expression

// // arrow function
// let sayHi = ()=>console.log("say Hi....")
// sayHi();

// // to make the function dynamic pass the parameters
