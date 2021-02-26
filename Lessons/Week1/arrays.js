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
