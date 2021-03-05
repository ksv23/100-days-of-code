///forEach Method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

////another & newer method for.. of
// for (let el of numbers) {
//     console.log(el)
// }

const movies = [
    {
        title: 'Harry Potter',
        score: 100
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]

movies.forEach(function (movie) {
    console.log(`${movie.title} -- ${movie.score}/100`)
})


///Map Method: it's like making a new array
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

//Exercise 47!!! TOOK FOREVER TO SOLVE!
function cleanNames(arr) {
    const newOnes = arr.map(function (newNames) {
        return newNames.trim(); //trims the uneccessary spaces eg: ['   hello']
    });
    return newOnes;
}

///Arrow Functions
//Traditional Function
function add(a, b) {
    return a + b + 100;
}
//Arrow FUnction
const sum = (a, b) => {
    return a + b + 100;
}

const rollDies = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//Exercise 48: Arrow function of greeting
const greet = (str) => { //str = function(str)
    return (`Hey ${str}!`); //returns a greeting
}
//traditional function of greeting
const hey = function pink(str) {
    return (`hey ${str}!`)
}