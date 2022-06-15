const prompt = require("prompt-sync")({ sigint: true });

// 1. Write a JavaScript function to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function dayAndTime() {
    const date = new Date();
    console.log(date)
    const day = date.getDay()
    console.log(`Today is : ${days[day]}`)
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let pmOrAm = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    console.log(`Current Time is : ${hour}${pmOrAm} ${minute} ${second}`)
}
dayAndTime();

// 2. Write a JavaScript function that returns the length of the given array.
function lengthOfArr(...args) {
    return args.length
}
console.log(lengthOfArr("rekha", "motilal", "musuvati", "developer"))
console.log(lengthOfArr(1, 2, 3, 4, 5, 6, 7, 8))


// 3. Write a JavaScript function that returns the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function curDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    return `${mm}-${dd}-${yyyy} ${mm}/${dd}/${yyyy} or ${dd}-${mm}-${yyyy} ${dd}/${mm}/${yyyy}`
}
console.log(curDate());

//4. Write a JavaScript function that returns the area of a triangle where lengths of the three of its sides are 5, 6, 7.
const areaOfTriangle = (a, b, c) => ((a + b + b) / 2)
console.log(areaOfTriangle(5, 6, 7))

//5. Write a JavaScript function that can rotate the string 'w3resource' 
//in right direction by periodically removing one letter from the end of the string and attaching it to the front and return it. 

function rotateString(str) {
    let newArr = []
    let endStr = str.slice(-1)
    console.log(endStr)
    let startStr = str.slice(0, str.length - 1)
    console.log(endStr + startStr)
}
rotateString("w3resource")

//6. Write a JavaScript function to determine whether a given year is a leap year in the Gregorian calendar. 
function leapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(1700))
console.log(leapYear(2016))
console.log(leapYear(2000))
console.log(leapYear(100))

//7. Write a JavaScript function to find 1st January is being a Sunday between 2014 and 2050.
function findDay() {
    for (year = 2014; year <= 2050; year++) {
        let dates = new Date(year, 0, 1)
        let dayIndex = dates.getDay();
        if (dayIndex === 0) {
            console.log(`1st January is a Sunday in ${year}`)
        }
    }
}
findDay()

//8. Write a JavaScript function where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
//If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
let randomNum = prompt("Please enter your guess number: ");
const randomFunc = (randomNum) => (Math.floor(Math.random() * 10) === randomNum) ? "Good Work!!!" : "Not matched";
console.log(randomFunc(randomNum))

//9. Write a JavaScript function to calculate days left until next Christmas. 
function christmas() {
    today = new Date();
    xmas = new Date("December 25, 2022");
// 1 millisecond = 1000/th of a second; therefore
// 1 second = 1000 milliseconds [msec]
// 1 minute has sixty seconds; therefore
// 1 minute = 60 x 1000 msec = 60,000 msec
// 1 hour has 60 minutes; therefore
// 1 hour = 60 x 60,000 msec = 3,600,000 milliseconds
// 1 day has 24 hours; therefore
// 1 day = 24 x 3,600,000 msec = 86,400,000 milliseconds
// There are 86,400,000 milliseconds in 1 day

    msPerDay = 24 * 60 * 60 * 1000;
    timeLeft = (xmas.getTime() - today.getTime());
//console.log(timeLeft,msPerDay)
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    return `${daysLeft} days left until Christmas`
}
console.log(christmas())

