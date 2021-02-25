// console.log("before")
// let random = Math.random();
// console.log(random)
// if (random < 0.5) {
//     console.log("num is less than 0.5");
// }

// console.log("after")


////////
// function isEven(num) {
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//     if (num % 2 === 0) {
//         console.log("even");
//     }

//     //AND THIS LINE ↑↑↑↑↑
// }

/////////////////TWO if else if else

// 0-5 free
// 5-10 child 10
// 10-65 adult 20
// 65+ senior 1-

// const age = prompt("enter age");
// if (age < 5) {
//     console.log("baby, free")
// } else if (age < 10) {
//     console.log("child, 10 please")
// } else if (age < 65) {
//     console.log("adult, 20 please")
// } else {
//     console.log("senior, 10 please")
// }


////////////THREE nesting
const age = prompt("enter age");

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("youre not a baby or a senior")
}
