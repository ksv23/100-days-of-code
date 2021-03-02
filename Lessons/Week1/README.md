### Section 17: JavaScript Arrays
**Summary**: Introduction to Arrays: push, pop, shift, unshift, slice, splice, multi-dimensional Arrays

**NOTES on ARRAY**: 
1. Arrays are ordered collection of values.
2. Use square brackets []
3. Arrays are indexed [0,1,2,3,4]
Array Methods:
4. .push - add to the end 
5. .pop - remove from end
6. .shift - remove from start
7. .unshift - add to start
More Methods:
8. .concat - merge two or more arrays
9. .includes - look for a value
10. .indexOf - just like string.indexOf
11. .reverse() - reverses an array
12. .slice - copies a portion on an array
13. .splice - removes/replaces elementsxws
14. .sort() - sorts an array

15. const + arrays - the values can change, as long as the reference remains the same
    ex: const myEggs = ['brown', 'white']
        myEggs.push('pink');
        myEggs[0]='green';


16. nested arrays - store arrays inside other arrays

### SECTION 18: Object Literals
**NOTES on OBJECTS**:
1. Objects are collections of properties.
2. Properties are a key-value pair. Property = key + value.
3. Rather than accessing data using an index, we use custom keys.
4. To access data out of objects: objectVariable["key"] ex: let person = {first: "kring"}, person["first"]
5. Another way to access data out of objects: object.key ex: let person = {first: "kring"}, person.first
6. Valid keys - all keys are converted into strings, except symbols.

### SECTION 19: Loops
**NOTES on Loops**:
1. FOR LOOP
    a. for ([initialExpression]; [condition]; [incrementExpression]) {
    statement
}
2. WHILE LOOP
    a. While loops continue running as long as test condition is true.
    b. while (condition){
    statement
}
4. Created a guessing game.
5. For.. Of
    a. for (variable of iterable){
        statement
    }
6. Object.values() - returns an array of a given object's own enumerable property values.
7. Object.keys() - returns an array of a given object's own enumerable property names.
8. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
