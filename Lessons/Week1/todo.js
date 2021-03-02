let input = prompt('What would you like to do?');
const todos = []; //initial empty array to store to do list

while (input !== 'quit' && input !== 'q') {
    //Show the list
    if (input === 'list') {
        console.log('********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('********');
    }

    //Add Something
    else if (input === 'add') {
        const addTodo = prompt('Add to do list');
        todos.push(addTodo);
        console.log(`${addTodo} is added to the list`);

        //Delete Something in the list
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter index you want to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, youve deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }

    }

    input = prompt('What would you like to do?');
}
console.log('Youre done!')