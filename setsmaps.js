// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const ids = new Set([1, 2, 3]);
// console.log(ids);
const ids = new Set([1, 2, 3]);
ids.add(2);
ids.delete(2);
console.log(ids.has(2));

for (const entry of ids.entries()) {
  console.log(entry);
}

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ data: "yesterday", price: 10 }]]]);
personData.set(person2, [{ date: "2 days ago", price: 150 }]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}
console.log(personData.size);

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);
person = null;
console.log(persons);

let person3 = { name: "Manuel" };
const persons1 = new WeakMap();
persons1.set(person3, "Extra Info");
person3 = null;
console.log(persons1);
