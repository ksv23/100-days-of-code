//Intro to Functions
function sing() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("FA")
}

///Arguments
function greet(firstName) {
    console.log(`Hello ${firstName}!`);
}

//Multiple Parameters/Arguments
function greetings(first, last) {
    console.log(`Hey there ${first} ${last}`);
}

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}

//The RETURN Keyword
function add(x, y) {
    return x + y;
}


//Exercise 36: Define a function called rant which accepts a string argument called message. the function should print out an uppercased version of 'message' 3 times.
function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

//Exercise 37: if two parameters are both 1s print Snake Eyes, else print Not Snake Eyes
function isSnakeEyes(x, y) {
    if (x === 1 && y === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log("Not Snake Eyes!");
    }
}

//Exercise 38: Return the value
function multiply(x, y) {
    let prod = x * y;
    return prod;
}

//Exercise 39: Return true if temp >=75, else return false
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

//Exercise 40
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

//Exercise 41: Capitalize the first letter of string.
function capitalize(str) {
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

//Exercise 42: Return the sum of all the numbers in the array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Exercise 43: Return Days of the week;

function returnDay(x) {
    if (x === 1) {
        return "Monday";
    } else if (x === 2) {
        return "Tuesday";
    }
    else if (x === 3) {
        return "Wednesday";
    }
    else if (x === 4) {
        return "Thursday";
    }
    else if (x === 5) {
        return "Friday";
    }
    else if (x === 6) {
        return "Saturday";
    } else if (x === 7) {
        return "Sunday";
    } else ((x <= 1) || (x >= 7));
    {
        return null;
    }
}