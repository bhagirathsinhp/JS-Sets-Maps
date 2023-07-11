// SETS & MAPS:


// 1. Working with Sets...

// We create new set always with - new Set();
const ids = new Set();
console.log(ids);

// We can pass in any iterable inside set() - it can be array, another set, nodeList anything...

const ids = new Set([1, 2, 3]);
console.log(ids);
// We can't access these values with Index.

// To retrive a value we can use a specific method for set.
// In set, every value can only be stored once here, we don't have to retrive a value but to see that value exist in there...
// For this we use .has() method.
// We pass in the value we wanna look into existing inside the set = ids.has(1) - this will show TRUE within console.
// Therefore we can use it for IF checks or Ternary expressions...
const ids = new Set([1, 2, 3]);
console.log(ids.has(1));
// It's a data storage which tells us if it contains something or not.

// .add:
// We can add data inside a set by using -
ids.add(2);
console.log(ids.has(2));

// But we don't know how often 2 is stored inside a set.
// In a set, a value is guaranteed to be unique..
//  We can go through all elements in a set through - .entries. It returns an iterable.
// We can use it in a for loop...

for (const entry of ids.entries()) {
  console.log(entry);
  console.log(entry[0]);
}
// We see couple of arrays - Array [ 1, 1 ] Array [ 2, 2 ] Array [ 3, 3 ]
// We got the value TWICE.
// .entries() returns 2 elements per entries.
// To go through all the values only once, inside loop we type on - console.log(entry[0]);

// Alternatively, we should use values() instead of entries() - it will return an iterable that only yields the set values once.

// .delete():
// We enter the value we want to delete.
ids.delete(2);


-------------------------------------------------------------------------------------------


// 2. Working With Maps....

// We create some objects - now we use map to attach extra info to those objects without merging into them as we used those objects multiple times in the application.

// We create a map - new Map();
// Here the constructor - Map() - can be initialized with an array of arrays = new Map([[]])...
// Each array in the main border array is one key & value pair...

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([['key', 'some value']]);
// Here in the key & value pair = key - any kind of string or number or object = same goes for value.
// Let's look at the example for it...

const personData = new Map([[person1, [{data: 'yesterday' , price: 10}]]]);
// We have person1 as key.
// We have data, price object-nested array as value.

console.log(personData);
// We see a map with indented data structure.

// We can extract data from personData using .get().
console.log(personData.get(person1));
// We add the key to .get() of any map we want the data extracted of.

// .set() - for adding data to a map..
personData.set(person2, [{date: '2 days ago', price: 150}])
// We insert in the same method we do in map.

// We can output all info in a map in three diff ways.. Always using for-of loop.

// One way - use .entries() method.
for (const entry of personData.entries()){
  console.log(entry);
};
// We get both the arrays logged - person1 and person2.
// We don't experience what we did in set.
// We get 1st element as key and 2nd as a value in both arrays..

// With the help of Array Destructuring, we can also pull out the exact number of elements we want to extract...
for (const [key, value] of personData.entries()){
  console.log(key, value);
};

// Other way - if we are interested in the keys.
// We will use .keys() function.
for (const key of personData.keys()){
  console.log(key);
}
// Well alternative to this method is the destructuring - as we can just pass first element - key inside the const [], we will get the key...

// We have same for values - .values()
for (const value of personData.values()){
  console.log(value);
}


// Other methods of Map:
// personData.clear - clears all data on map.
// personData.delete - deletes single entry by key.
// personData.forEach - Allows to go through all items, alternative to for loops..
// personData.has - Allows us to check if certain key is part of the map.
// personData.size - allows us to see how many items are there in a map, used to output - not a function..
console.log(personData.size);


-----------------------------------------------------------------------------------------------


// 3. Maps & Objects....

// When should we use which?

// Maps:
// Can use ANY values and types as Keys.
// Better performance for large quantities of data.
// Better performance when adding + removing data frequently. Operation where we have multiple key-value pair removed and added many times a second, map performs better.


// Objects:
// Can only use strings, numbers or symbols(will learn later) as Keys. Can't use booleans, another object or an array as keys.
// Perfect for small/medium sized sets of data...
// Easier/quicker to create - typically also with better performance. 


--------------------------------------------------------------------------------------------------


// 4. Understanding WeakSet... 

// Specialized version of sets..
// We can store objects into sets too..
// But with WEAKSET, it has to object data to be precise.
// Used to store object data in a set, where eventually if we want to release some of that data, weakset can make those data garbage collected...

let person = {name: "Max"};
const persons = new WeakSet();
persons.add(person);

// Here with weakset, in persons. = we have only 3 methods - add, delete and has. No method to get the entries.

// IMPORTANT:
// WeakSet and WeakMap internally works where it can only store objects, so that it can clear those objects for us. 
// There functions releases those objects to the garbage collection.
// But they also show the data if we console.log it.

// WHY DO WE NEED THESE?:
// Let's say in a set with object data or other arrays - where we store - where we wanna let go of that data. Then we wanna make sure that this data can be garbage collected.

// HOW IT IS USED?:
// For normal variable, if we don't want to work with it - we set that variable to null for JS to detect and clean that variable for heap, garbage collector clears that from the memory...
let person = {name: 'MAX'}; // Now we don't have any work for it so we delete it by...
person = null;

// But with sets, even when person is set to null and removed from memory, JS will know it is removed but still keeps it within the function as it thinks we would work with the variable.
// So to remove that data from set, we use WeakSet() = when there is no data to work with.
// We can also use persons.delete() = but we work with weakset here...

// If we reset all the place where person is used to null, weakset won't hold onto it. It will allow garbage collector to delete items which are part of the set as long as no other part of our code uses them.

let person = {name: "Max"};
const persons = new WeakSet();
persons.add(person);

person = null; 

console.log(persons);
// The data won't be garbage collected here immediately as it cannot be planned when browser does it...


---------------------------------------------------------------------------------------------


// 5. Understanding WeakMap....

// Similar idea to weakset...
// If the data in map is a key we cleared, map won't release that data to garbage collector, this is where weakmap is used...

let person3 = {name: "Manuel"};

const persons1 = new WeakMap();
persons1.set(person3, 'Extra Info');

person3 = null;

console.log(persons1);

// JS will be able to garbage collect that data with weakmap in use..

// WEAKMAP-WEAKSET ARE ADVANCED TOPICS TO LEARN, IT WILL COME HANDY IN FUTURE.


--------------------------------------------------------------------------------------------------


