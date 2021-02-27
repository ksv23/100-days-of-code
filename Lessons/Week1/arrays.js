let days = ['Mon', 'Tues', 'Wed'];
console.log(days[0]); //to access index 0 of array: days[0]
days[3] = 'thurs'; //to set index 3 of array equal to thurs

////CONCAT METHOD
let cats = ['blue', 'pink'];
let dogs = ['red', 'orange'];
let combo = dogs.concat(cats);
//>>combo
//>>(4) ["red", "orange", "blue", "pink"]

////Slice
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let coolColors = colors.slice(3);
//>>coolColors
//>>(4) ["green", "blue", "indigo", "violet"]
let warmColors = colors.slice(0, 3);
//>>warmColors
//>>(3)["red", "orange", "yellow"]

////Splice Method
let spliceColors = colors.splice(1, 0, 'red-orange');
//>>colors (8) ["red", "red-orange", "orange", "yellow", "green", "blue", "indigo", "violet"]

////Sort Method
let scores = [1, 2, 22, 34, 54, 657, 88, 80]
console.log(scores.sort());
//>>(8) [1, 2, 22, 34, 54, 657, 80, 88]

/////Nested Arrays
const board = [
    ['0', 'x', '0'],
    ['x', null, 'x'],
    ['x', '0', 'x']
]

console.log(board);
console.log(board[1][2]); //>> x
console.log(board[1][1]); //>> null

