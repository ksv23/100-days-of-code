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