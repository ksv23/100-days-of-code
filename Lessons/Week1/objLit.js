const person = {
    firstName: 'Kring',
    lastName: 'Villanueva'
}
console.log(person);

const kitchenSink = {
    favNum: [1, 2],
    isFun: true,
    colors: ['red', 'yellow']
}

//access data out of objects
console.log(person["firstName"]);


//Exercises
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
var fullAddress = restaurant.address + " " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode


/////nested arrays + objects
const comments = [
    { username: 'tam', text: 'haha', votes: 19 },
    { username: 'kev', text: 'haha', votes: 55 },
    { username: 'nik', text: 'haha', votes: 23 },
]