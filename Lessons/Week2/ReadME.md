### Section 20: Intro to Functions
**Notes on Functions**:
1. Functions are reusable procedures.
2. function funcName(){
    //do something
}
3. funcName(); //to use function add parenthesis 

4. Parameter is just the placeholder variable that we define for use instead of our function definition.
    function funcName(parameter){
        //do something
    }
5. Arguments: inputs that functions accept 
    ARGUMENT is what you pass when you call a function.
    ex: funcName(argument) //inside the parenthesis becomes an arguments when you call the function.

6. Functions can have multiple parameters/arguments.
    function funcName(param1, param2){
        //do something
    }

7. Return: built-in methods return values when it's called. Those values can be stored.
8. 'Return' stops the execution.
9. Can only 'return' ONE value.
10. 'Return' is how we get value out of a function so we can save them and caputure them.

### Section 21: More Functions
**Notes on Functions**:
1. Function Scope: 
    ex: function helpMe(){
        let msg = "fire!"
        msg; //fire
    }
    msg; //NOT DEFINED.
msg is scoped to the helpMe function

2. Function Expression: store a function in a variable.
3. Higher Order Functions: functions that operate on/with other functions.
    a. accept other functions as arguments
    b. return a function

4. Defining Methods: we can add functions as properties on objects.
    a. Every Method = Function but NOT every Function != Method.
5. 'This' Method: the keyword 'this' is to access other properties on the same object.
6. Try/Catch
    a. Syntax
        try {
            try_statements
        }
        [catch [(exception_var)] {
            catch_statements
        }]
        [finally {
            finally_statements
        }]


### Section 22: Callbacks & Array Methods
**Notes on Functions**:
1. forEach Method: executes a provided function once for each array element
    a. Syntax 
    array.forEach(function(currentValue, index, arr), thisValue)

2. Map Method: creates a new array with the results of calling a callback on every element in the array
    a. taking a data in an array , and transforming it as a map into a new copied array
    b. typically used for when a portion of a data is needed or wanted to be created into a new array.
    ex: const array1 = [1, 4, 9, 16];
        // pass a function to map
        const map1 = array1.map(x => x * 2);

3. Arrow Functions: arternative to a traditional function expression. It's limited and can't be used in all situations.