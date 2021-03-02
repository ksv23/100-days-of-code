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
//or for...of
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
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

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 10) break;
// }

///For... Of Loop
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'movies'];

for (let sub of subreddits) {
    console.log(sub);
}


// for (let char of "hello world") {
//     console.log(char);
// }


//For..Of exercise
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
    console.log(Math.pow(num, 2));
}

console.log("Iterating over Objects")
//Iterating over objects
const testScores = {
    keen: 90,
    rob: 80,
    kim: 70,
    cloe: 60,
    shaun: 50,
    colt: 40,
    steele: 30
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let totScore = Object.values(testScores); //array of scores
for (let score of totScore) {
    total += score; //Adding all the scores
}
console.log(total / totScore.length); //Average of all the scores