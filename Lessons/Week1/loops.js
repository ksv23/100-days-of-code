for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("0+=2; increments even num by 2")
for (let j = 0; j <= 20; j += 2) {
    console.log(j);
}

console.log("1+=2; increments odd num by 2")
for (let j = 1; j <= 20; j += 2) {
    console.log(j);
}

console.log("decrements by 10")
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

///Looping over Arrays Exercise 
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
//>> SCOOBY
//>> VELMA
//>> DAPHNE
//>> SHAGGY
//>> FRED

///Nested Loops 
for (let i = 1; i <= 5; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   j is : ${j}`);
    }
}
// i is: 1
//    j is : 1
//    j is : 2
//    j is : 3
// i is: 2
//    j is : 1
//    j is : 2
//    j is : 3
// i is: 3
//    j is : 1
//    j is : 2
//    j is : 3
// i is: 4
//    j is : 1
//    j is : 2
//    j is : 3
// i is: 5
//    j is : 1
//    j is : 2
//    j is : 3


const seatingChart = [
    ['Krist', 'Rob', 'Eric'],
    ['Mick', 'JD', 'Turk'],
    ['Bob', 'Elliot', 'Perry']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

////////////////////////

///While Loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// const SECRET = "BabyHippo";
// let guess = prompt("enter secret code");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code");
// }
// console.log("congrats you got it!");