// Write a function `lengths` that accepts a single parameter as an argument, 
// namely an array of strings. The function should return an array of 
// numbers where each number is the length of the corresponding string.
// var words = ["hello", "what", "is", "up", "dude"];
// lengths(words);  # => [5, 4, 2, 2, 4]

const lengths = (...args) => args.map(item => item.length);
console.log(lengths("hello", "what", "is", "up", "dude"));
console.log(lengths("engineering", "software", "", "soon", "coming"));

// 2. Write a function called `transmogrifier`. This function should accept three arguments, 
// which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225. 
// Use your function to find the following answers.
// transmogrifier(5, 4, 3);
// transmogrifier(13, 12, 5); 
// transmogrifier(42, 13, 7);

const transmogrifier = (n1,n2,n3)=> Math.pow((n1*n2),n3);
console.log(transmogrifier(5,4,3)) //8000
console.log(transmogrifier(13, 12, 5))//92389579776
console.log(transmogrifier(42, 13, 7))//14466001271480793000

// 3. Write a function `wordReverse` that accepts a single argument, a string. 
// The method should return a string with the order of the words reversed. Don't worry about punctuation.
// wordReverse("Now I know what a TV dinner feels like");
// # => "like feels dinner TV a what know I Now"
// wordReverse("Put Hans back on the line");
// # => "line the on back Hans Put" (edited) 

const wordReverse = (str) => str.split(' ').reverse().join(' ')
console.log(wordReverse("Now I know what a TV dinner feels like"));
console.log(wordReverse("Put Hans back on the line"));
